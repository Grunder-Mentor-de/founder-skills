// Sortiert Rückmeldungen und Änderungsvorschläge ein: setzt die Labels skill:<slug> und sterne:<1-5>.
// Aufgerufen von .github/workflows/rueckmeldung.yml über actions/github-script.
//
// Alles bis zum Abschnitt „GitHub-Teil“ sind reine Funktionen ohne Netz und ohne Dateizugriff.
// Lokal testen: node --test .github/scripts/
'use strict'

const fs = require('fs')
const path = require('path')

// Überschriften der Formularfelder, so wie GitHub sie in den Issue-Text schreibt.
// Sie entsprechen dem „label“ der Felder mit id skill und sterne in .github/ISSUE_TEMPLATE/.
const FELD_SKILL = 'Welcher Skill?'
const FELD_STERNE = 'Sterne'
const LEER = '_No response_'

const ART_RUECKMELDUNG = 'rückmeldung'
const ART_AENDERUNG = 'änderung'
const PRAEFIX_SKILL = 'skill:'
const PRAEFIX_STERNE = 'sterne:'
const MAX_LABEL = 50 // GitHub erlaubt höchstens 50 Zeichen pro Label

// Farben aus der Marke Gründer-Mentor.de
const FARBE_SKILL = '09183B'
const FARBE_STERNE = '2961FF'

// Issue-Form-Text in Felder zerlegen: „### <Überschrift>\n\n<Wert>“, leere Felder „_No response_“.
// Ergebnis: { '<Überschrift>': '<Wert>' }. Bei doppelten Überschriften zählt die erste.
function parseFormular(body) {
  const text = String(body || '').replace(/\r\n?/g, '\n')
  const teile = text.split(/^###[ \t]+(.+?)[ \t]*$/m)
  const felder = new Map()
  for (let i = 1; i < teile.length; i += 2) {
    const name = teile[i].trim()
    if (felder.has(name)) continue
    const wert = (teile[i + 1] || '').trim()
    felder.set(name, wert === LEER ? '' : wert)
  }
  return Object.fromEntries(felder)
}

// Ausweg für Issues ohne Formular (z. B. mit gh angelegt): Zeilen wie „Skill: reality-check“ oder „**Sterne:** 4“
function zeileLesen(body, schluessel) {
  const text = String(body || '').replace(/\r\n?/g, '\n')
  const muster = new RegExp(`^[ \\t]*(?:[-*][ \\t]+)?\\**${schluessel}\\**[ \\t]*:[ \\t]*\\**[ \\t]*(.+?)[ \\t]*$`, 'imu')
  const treffer = text.match(muster)
  return treffer ? treffer[1].replace(/\*+$/, '').trim() : null
}

// Ausweg über den Titel aus dem Abschluss: „[Rückmeldung] Reality Check 1.1.0, 4 Sterne“
function titelLesen(titel) {
  const treffer = String(titel || '').match(/^\s*\[rückmeldung\]\s*([^,]+?)(?:\s+v?\d+(?:\.\d+)+)?\s*(?:,\s*(\S+)\s+sterne?)?\s*$/iu)
  if (!treffer) return { skill: null, sterne: null }
  return { skill: treffer[1].trim() || null, sterne: treffer[2] || null }
}

function istAlle(wert) {
  const s = String(wert || '').trim().toLowerCase()
  return s === 'alle' || s === 'alle skills'
}

// Anzeigename oder Slug auf einen Slug abbilden: „Reality Check“ → reality-check, „MVP & Pilot“ → mvp-pilot
function skillZuSlug(wert) {
  let s = String(wert || '').split('\n')[0].normalize('NFC').trim().toLowerCase()
  s = s.replace(/^\/+/, '') // „/skill-bauen“
  s = s.replace(/\s+v?\d+(?:\.\d+)+\s*$/, '') // angehängte Version „Reality Check 1.1.0“
  s = s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
  s = s.replace(/&/g, ' ')
  s = s.normalize('NFKD').replace(/[̀-ͯ]/g, '') // é → e
  s = s.replace(/[\s_]+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-+|-+$/g, '')
  return s || null
}

// Wie skillZuSlug, prüft aber auch Teile in Klammern oder Backticks: „Reality Check (`reality-check`)“.
// Mit bekannten Slugs gewinnt der erste bekannte Kandidat.
function skillErkennen(wert, bekannteSkills) {
  const roh = String(wert || '').split('\n')[0]
  const kandidaten = [roh]
  for (const t of roh.matchAll(/[(`]([^()`]+)[)`]/g)) kandidaten.push(t[1])
  kandidaten.push(roh.replace(/[(`][^()`]*[)`]/g, ' '))
  const slugs = kandidaten.map(skillZuSlug).filter(Boolean)
  if (bekannteSkills && bekannteSkills.length) {
    const bekannt = slugs.find((s) => bekannteSkills.includes(s))
    if (bekannt) return bekannt
  }
  return slugs[0] || null
}

// Sterne lesen: „4“, „4 Sterne“, „4 Sternen“, „4/5“, „4 von 5 Sternen“, „**4**“, „★★★★☆“, „⭐️⭐️⭐️⭐️“.
// Alles andere ergibt null. Das unsichtbare Variationszeichen U+FE0F (Emoji-Tastatur) wird vorher entfernt.
function sterneLesen(wert) {
  const s = String(wert || '')
    .replace(/[︎️]/g, '')
    .replace(/\*+/g, '')
    .trim()
  if (!s) return null
  const symbole = s.match(/^([★⭐]{1,5})[☆\s]*$/u)
  if (symbole) return [...symbole[1]].length
  const zahl = s.match(/^([1-5])(?:[.,]0)?(?:\s*(?:\/\s*5|von\s+5))?(?:\s*(?:sterne?n?|stars?))?\s*$/iu)
  return zahl ? Number(zahl[1]) : null
}

// Wertet ein Issue aus. Rein: bekommt alles als Daten, gibt einen Plan zurück.
//   art:        'rückmeldung', 'änderung' oder null (dann nichts tun)
//   skill:      Slug oder null (null heißt: nichts erkannt, vorhandene skill:-Labels bleiben)
//   alleSkills: true, wenn ausdrücklich „alle“ gewählt ist (dann werden skill:-Labels entfernt)
//   sterne:     1 bis 5 oder null (null heißt: vorhandene sterne:-Labels bleiben)
//   hinweise:   Texte für das Protokoll des Workflows
function auswerten({ titel, body, labels, bekannteSkills }) {
  const namen = (labels || []).map((l) => (typeof l === 'string' ? l : l && l.name)).filter(Boolean)
  const ergebnis = { art: null, skill: null, alleSkills: false, sterne: null, hinweise: [] }
  if (namen.includes(ART_RUECKMELDUNG)) ergebnis.art = ART_RUECKMELDUNG
  else if (namen.includes(ART_AENDERUNG)) ergebnis.art = ART_AENDERUNG
  else return ergebnis

  const felder = parseFormular(body)
  const ausTitel = ergebnis.art === ART_RUECKMELDUNG ? titelLesen(titel) : { skill: null, sterne: null }
  const quelleSkill = [felder[FELD_SKILL], zeileLesen(body, 'skill'), ausTitel.skill].find((w) => w && w.trim())
  const quelleSterne = [felder[FELD_STERNE], zeileLesen(body, 'sterne'), ausTitel.sterne].find((w) => w && w.trim())

  if (!quelleSkill) {
    ergebnis.hinweise.push('Kein Skill gefunden, skill:-Labels bleiben unverändert.')
  } else if (istAlle(quelleSkill)) {
    ergebnis.alleSkills = true
  } else {
    const slug = skillErkennen(quelleSkill, bekannteSkills)
    const bekannt = !bekannteSkills || !bekannteSkills.length || bekannteSkills.includes(slug)
    if (!slug) {
      ergebnis.hinweise.push(`Skill „${quelleSkill}“ ergibt keinen Slug, kein skill:-Label gesetzt.`)
    } else if ((PRAEFIX_SKILL + slug).length > MAX_LABEL) {
      ergebnis.hinweise.push(`Slug „${slug}“ ist zu lang für ein Label, kein skill:-Label gesetzt.`)
    } else if (!bekannt) {
      ergebnis.hinweise.push(`Skill „${slug}“ gibt es im Repository nicht (bekannt: ${bekannteSkills.join(', ')}), kein skill:-Label gesetzt.`)
    } else {
      ergebnis.skill = slug
    }
  }

  if (ergebnis.art === ART_RUECKMELDUNG) {
    if (!quelleSterne) {
      ergebnis.hinweise.push('Keine Sterne gefunden, sterne:-Labels bleiben unverändert.')
    } else {
      ergebnis.sterne = sterneLesen(quelleSterne)
      if (ergebnis.sterne === null) ergebnis.hinweise.push(`Sterne „${quelleSterne}“ ist keine Zahl von 1 bis 5, kein sterne:-Label gesetzt.`)
    }
  }
  return ergebnis
}

// Vergleicht vorhandene Labels mit dem Ergebnis von auswerten(): was hinzu, was weg.
function planeLabels(vorhandene, ergebnis) {
  const namen = (vorhandene || []).map((l) => (typeof l === 'string' ? l : l && l.name)).filter(Boolean)
  const hinzufuegen = []
  const entfernen = []
  if (!ergebnis || !ergebnis.art) return { hinzufuegen, entfernen }

  const abgleichen = (praefix, gewuenscht) => {
    for (const n of namen) if (n.startsWith(praefix) && n !== gewuenscht) entfernen.push(n)
    if (gewuenscht && !namen.includes(gewuenscht)) hinzufuegen.push(gewuenscht)
  }
  if (ergebnis.alleSkills) abgleichen(PRAEFIX_SKILL, null)
  else if (ergebnis.skill) abgleichen(PRAEFIX_SKILL, PRAEFIX_SKILL + ergebnis.skill)
  if (ergebnis.sterne) abgleichen(PRAEFIX_STERNE, PRAEFIX_STERNE + ergebnis.sterne)
  return { hinzufuegen, entfernen }
}

// Farbe und Beschreibung für ein neu anzulegendes Label
function labelVorlage(name) {
  if (name.startsWith(PRAEFIX_STERNE)) {
    return { color: FARBE_STERNE, description: `Rückmeldung mit ${name.slice(PRAEFIX_STERNE.length)} von 5 Sternen` }
  }
  return { color: FARBE_SKILL, description: `Betrifft den Skill ${name.slice(PRAEFIX_SKILL.length)}` }
}

// ---------------------------------------------------------------------------------------------
// GitHub-Teil

// Slugs aller Skills im Repository: Ordner mit SKILL.md unter skills/, im Hauptordner und unter .claude/skills/
function bekannteSkillsLesen(root) {
  const slugs = new Set()
  for (const ort of [path.join(root, 'skills'), root, path.join(root, '.claude', 'skills')]) {
    let eintraege = []
    try {
      eintraege = fs.readdirSync(ort, { withFileTypes: true })
    } catch {
      continue
    }
    for (const e of eintraege) {
      if (e.isDirectory() && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(e.name) && fs.existsSync(path.join(ort, e.name, 'SKILL.md'))) {
        slugs.add(e.name)
      }
    }
  }
  return [...slugs].sort()
}

async function labelSicherstellen(github, owner, repo, name) {
  try {
    await github.rest.issues.getLabel({ owner, repo, name })
    return
  } catch (e) {
    if (e.status !== 404) throw e
  }
  try {
    await github.rest.issues.createLabel({ owner, repo, name, ...labelVorlage(name) })
  } catch (e) {
    if (e.status !== 422) throw e // 422: gerade eben von einem anderen Lauf angelegt
  }
}

async function einsortieren({ github, context, core }) {
  const ereignisIssue = context.payload && context.payload.issue
  if (!ereignisIssue) {
    core.info('Kein Issue im Ereignis, nichts zu tun.')
    return null
  }
  const { owner, repo } = context.repo
  const nummer = ereignisIssue.number

  // Frischen Stand holen, die Labels im Ereignis können schon veraltet sein
  const { data: issue } = await github.rest.issues.get({ owner, repo, issue_number: nummer })
  const vorhandene = (issue.labels || []).map((l) => (typeof l === 'string' ? l : l.name))
  const bekannteSkills = bekannteSkillsLesen(process.env.GITHUB_WORKSPACE || process.cwd())

  const ergebnis = auswerten({ titel: issue.title, body: issue.body, labels: vorhandene, bekannteSkills })
  for (const h of ergebnis.hinweise) core.warning(`#${nummer}: ${h}`)
  if (!ergebnis.art) {
    core.info(`#${nummer} ist weder Rückmeldung noch Änderungsvorschlag, nichts zu tun.`)
    return { ergebnis, plan: { hinzufuegen: [], entfernen: [] } }
  }

  const plan = planeLabels(vorhandene, ergebnis)
  for (const name of plan.entfernen) {
    try {
      await github.rest.issues.removeLabel({ owner, repo, issue_number: nummer, name })
    } catch (e) {
      if (e.status !== 404) throw e
    }
  }
  for (const name of plan.hinzufuegen) await labelSicherstellen(github, owner, repo, name)
  if (plan.hinzufuegen.length) {
    await github.rest.issues.addLabels({ owner, repo, issue_number: nummer, labels: plan.hinzufuegen })
  }
  core.info(
    `#${nummer} (${ergebnis.art}): hinzugefügt [${plan.hinzufuegen.join(', ')}], entfernt [${plan.entfernen.join(', ')}]`
  )
  return { ergebnis, plan }
}

module.exports = einsortieren
Object.assign(module.exports, {
  FELD_SKILL,
  FELD_STERNE,
  FARBE_SKILL,
  FARBE_STERNE,
  parseFormular,
  zeileLesen,
  titelLesen,
  istAlle,
  skillZuSlug,
  skillErkennen,
  sterneLesen,
  auswerten,
  planeLabels,
  labelVorlage,
  bekannteSkillsLesen,
  einsortieren,
})
