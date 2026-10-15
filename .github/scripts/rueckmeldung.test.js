// Tests für rueckmeldung.js. Start im Hauptordner des Repositorys: node --test .github/scripts/
'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('fs')
const path = require('path')
const r = require('./rueckmeldung.js')

const ROOT = path.join(__dirname, '..', '..')
const BEKANNT = ['customer-interview', 'elevator-pitch', 'mvp-pilot', 'reality-check', 'sales-deck']

// So schreibt GitHub ein ausgefülltes Formular rueckmeldung.yml in den Issue-Text
const BODY_RUECKMELDUNG = `### Welcher Skill?

reality-check

### Version

1.1.0

### Sterne

4

### Zusammenfassung

- Wollte nach Schritt 2 direkt den Preis besprechen
- Hat ein eigenes Dokument zur Zielgruppe eingebracht
### Unterüberschrift im Text, die keine Feldüberschrift ist

### Was würdest du ergänzen oder anders machen?

_No response_

### Womit hast du den Skill genutzt?

Claude Code`

// Formular aenderung.yml mit Dropdown (Anzeigename)
const BODY_AENDERUNG = `### Welcher Skill?

MVP & Pilot

### Welche Stelle?

Schritt 3, die Frage nach dem Preis

### Was schlägst du vor, und warum?

Erst nach dem Umfang fragen, dann nach dem Preis.`

// Formular mit Windows-Zeilenenden, Anzeigename und ungültigen Sternen
const BODY_UNGUELTIG = '### Welcher Skill?\r\n\r\nCustomer Interview\r\n\r\n### Version\r\n\r\n_No response_\r\n\r\n### Sterne\r\n\r\n7\r\n\r\n### Zusammenfassung\r\n\r\nDu bist dem Ablauf ohne Abweichungen gefolgt.'

test('parseFormular liest Felder, leere Felder werden zu ""', () => {
  const f = r.parseFormular(BODY_RUECKMELDUNG)
  assert.equal(f['Welcher Skill?'], 'reality-check')
  assert.equal(f['Version'], '1.1.0')
  assert.equal(f['Sterne'], '4')
  assert.equal(f['Was würdest du ergänzen oder anders machen?'], '')
  assert.equal(f['Womit hast du den Skill genutzt?'], 'Claude Code')
  assert.equal(r.parseFormular(BODY_UNGUELTIG)['Version'], '')
})

test('skillZuSlug bildet Slugs und Anzeigenamen ab', () => {
  assert.equal(r.skillZuSlug('reality-check'), 'reality-check')
  assert.equal(r.skillZuSlug('Reality Check'), 'reality-check')
  assert.equal(r.skillZuSlug('  Sales Deck  '), 'sales-deck')
  assert.equal(r.skillZuSlug('MVP & Pilot'), 'mvp-pilot')
  assert.equal(r.skillZuSlug('Gründer Übung für Äpfel'), 'gruender-uebung-fuer-aepfel')
  assert.equal(r.skillZuSlug('Straße'), 'strasse')
  assert.equal(r.skillZuSlug('/skill-bauen'), 'skill-bauen')
  assert.equal(r.skillZuSlug('Reality Check 1.1.0'), 'reality-check')
  assert.equal(r.skillZuSlug(''), null)
  assert.equal(r.skillZuSlug('???'), null)
  assert.equal(r.skillErkennen('Reality Check (`reality-check`)', BEKANNT), 'reality-check')
  assert.equal(r.istAlle('alle'), true)
  assert.equal(r.istAlle('Alle'), true)
})

test('sterneLesen nimmt nur ganze Zahlen von 1 bis 5', () => {
  for (const [ein, aus] of [
    ['4', 4], ['1', 1], ['5 Sterne', 5], ['1 Stern', 1], ['4 Sternen', 4], ['3/5', 3], ['2 von 5', 2], ['4 von 5 Sternen', 4],
    ['**4**', 4], ['★★★★☆', 4], ['⭐⭐⭐', 3], ['⭐️⭐️⭐️⭐️', 4], ['4,0', 4],
  ]) {
    assert.equal(r.sterneLesen(ein), aus, ein)
  }
  for (const ein of ['0', '6', '7', '45', '3,5', '4.5', 'fünf', 'gut', '⭐⭐⭐⭐⭐⭐', '', null]) assert.equal(r.sterneLesen(ein), null, String(ein))
})

test('Beispiel 1: Rückmeldung aus dem Formular', () => {
  const e = r.auswerten({ titel: '[Rückmeldung] Reality Check 1.1.0, 4 Sterne', body: BODY_RUECKMELDUNG, labels: ['rückmeldung'], bekannteSkills: BEKANNT })
  assert.deepEqual(e, { art: 'rückmeldung', skill: 'reality-check', alleSkills: false, sterne: 4, hinweise: [] })
  const plan = r.planeLabels(['rückmeldung', 'skill:sales-deck', 'sterne:2'], e)
  assert.deepEqual(plan, { hinzufuegen: ['skill:reality-check', 'sterne:4'], entfernen: ['skill:sales-deck', 'sterne:2'] })
  assert.deepEqual(r.planeLabels(['rückmeldung', 'skill:reality-check', 'sterne:4'], e), { hinzufuegen: [], entfernen: [] })
})

test('Beispiel 2: Änderungsvorschlag mit Anzeigename, ohne Sterne; „alle“ entfernt skill:-Labels', () => {
  const e = r.auswerten({ titel: '[Änderung] Preisfrage', body: BODY_AENDERUNG, labels: [{ name: 'änderung' }], bekannteSkills: BEKANNT })
  assert.equal(e.art, 'änderung')
  assert.equal(e.skill, 'mvp-pilot')
  assert.equal(e.sterne, null)
  assert.deepEqual(r.planeLabels(['änderung', 'sterne:3'], e), { hinzufuegen: ['skill:mvp-pilot'], entfernen: [] })

  const alle = r.auswerten({ titel: '', body: BODY_AENDERUNG.replace('MVP & Pilot', 'alle'), labels: ['änderung'], bekannteSkills: BEKANNT })
  assert.equal(alle.alleSkills, true)
  assert.equal(alle.skill, null)
  assert.deepEqual(r.planeLabels(['änderung', 'skill:reality-check', 'skill:sales-deck'], alle), {
    hinzufuegen: [],
    entfernen: ['skill:reality-check', 'skill:sales-deck'],
  })
})

test('Beispiel 3: Windows-Zeilenenden, ungültige Sterne bleiben unangetastet', () => {
  const e = r.auswerten({ titel: '[Rückmeldung] ', body: BODY_UNGUELTIG, labels: ['rückmeldung'], bekannteSkills: BEKANNT })
  assert.equal(e.skill, 'customer-interview')
  assert.equal(e.sterne, null)
  assert.equal(e.hinweise.length, 1)
  assert.match(e.hinweise[0], /keine Zahl von 1 bis 5/)
  assert.deepEqual(r.planeLabels(['rückmeldung', 'sterne:2'], e), { hinzufuegen: ['skill:customer-interview'], entfernen: [] })
})

test('Ausweg ohne Formular: Schlüsselzeilen und Titel', () => {
  const zeilen = r.auswerten({ titel: 'x', body: '**Skill:** Sales Deck\n**Version:** 1.1.0\n**Sterne:** 5', labels: ['rückmeldung'], bekannteSkills: BEKANNT })
  assert.equal(zeilen.skill, 'sales-deck')
  assert.equal(zeilen.sterne, 5)
  const titel = r.auswerten({ titel: '[Rückmeldung] Elevator Pitch 1.1.0, 3 Sterne', body: 'Freier Text', labels: ['rückmeldung'], bekannteSkills: BEKANNT })
  assert.equal(titel.skill, 'elevator-pitch')
  assert.equal(titel.sterne, 3)
})

test('Leere Pflichtfelder im privaten Repository: Titel aus dem Abschluss springt ein', () => {
  // GitHub setzt „required“ nur in öffentlichen Repositorys durch, hier können Skill und Sterne leer ankommen
  const body = BODY_RUECKMELDUNG.replace('### Welcher Skill?\n\nreality-check', '### Welcher Skill?\n\n_No response_').replace('### Sterne\n\n4', '### Sterne\n\n_No response_')
  const e = r.auswerten({ titel: '[Rückmeldung] Sales Deck 1.1.0, 2 Sterne', body, labels: ['rückmeldung'], bekannteSkills: BEKANNT })
  assert.equal(e.skill, 'sales-deck')
  assert.equal(e.sterne, 2)
  const ohne = r.auswerten({ titel: '[Rückmeldung] ', body, labels: ['rückmeldung'], bekannteSkills: BEKANNT })
  assert.equal(ohne.skill, null)
  assert.equal(ohne.sterne, null)
  assert.deepEqual(r.planeLabels(['rückmeldung', 'skill:reality-check', 'sterne:4'], ohne), { hinzufuegen: [], entfernen: [] })
})

test('unbekannter Skill und fehlende Art', () => {
  const e = r.auswerten({ titel: '', body: '### Welcher Skill?\n\nMein eigener Skill\n\n### Sterne\n\n5', labels: ['rückmeldung'], bekannteSkills: BEKANNT })
  assert.equal(e.skill, null)
  assert.equal(e.sterne, 5)
  assert.match(e.hinweise[0], /gibt es im Repository nicht/)
  const ohne = r.auswerten({ titel: '', body: BODY_RUECKMELDUNG, labels: ['neuer-skill'], bekannteSkills: BEKANNT })
  assert.equal(ohne.art, null)
  assert.deepEqual(r.planeLabels(['neuer-skill'], ohne), { hinzufuegen: [], entfernen: [] })
})

test('Formular-Überschriften passen zu den Konstanten im Skript', () => {
  const labelVon = (datei, id) => {
    const text = fs.readFileSync(path.join(ROOT, '.github', 'ISSUE_TEMPLATE', datei), 'utf8')
    const treffer = text.match(new RegExp(`id:\\s*${id}\\s*\\n\\s*attributes:\\s*\\n\\s*label:\\s*(.+)`))
    return treffer && treffer[1].trim()
  }
  assert.equal(labelVon('rueckmeldung.yml', 'skill'), r.FELD_SKILL)
  assert.equal(labelVon('rueckmeldung.yml', 'sterne'), r.FELD_STERNE)
  assert.equal(labelVon('aenderung.yml', 'skill'), r.FELD_SKILL)
})

test('bekannteSkillsLesen findet Skills unter plugins/ und skills/', () => {
  const os = require('os')
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-'))
  for (const ordner of ['plugins/sales-deck/skills/sales-deck', 'skills/reality-check', 'skills/_entwurf', 'skills/ohne-skill-md', 'customer-interview']) {
    fs.mkdirSync(path.join(tmp, ordner), { recursive: true })
  }
  for (const datei of ['plugins/sales-deck/skills/sales-deck/SKILL.md', 'skills/reality-check/SKILL.md', 'skills/_entwurf/SKILL.md', 'customer-interview/SKILL.md']) {
    fs.writeFileSync(path.join(tmp, datei), '---\nname: x\n---\n')
  }
  const slugs = r.bekannteSkillsLesen(tmp)
  assert.deepEqual(slugs, ['customer-interview', 'reality-check', 'sales-deck'])
  fs.rmSync(tmp, { recursive: true, force: true })
})

test('bekannteSkillsLesen in diesem Repository bricht nicht ab', () => {
  assert.ok(Array.isArray(r.bekannteSkillsLesen(ROOT)))
})

test('einsortieren: Ablauf gegen ein nachgebautes GitHub', async () => {
  const repoLabels = new Map([['rückmeldung', '10D199'], ['skill:sales-deck', '09183B']])
  let issueLabels = ['rückmeldung', 'skill:sales-deck']
  const aufrufe = []
  const fehler404 = () => Object.assign(new Error('Not Found'), { status: 404 })
  const github = {
    rest: {
      issues: {
        get: async () => ({ data: { number: 7, title: '[Rückmeldung] Reality Check 1.1.0, 4 Sterne', body: BODY_RUECKMELDUNG, labels: issueLabels.map((name) => ({ name })) } }),
        getLabel: async ({ name }) => {
          if (!repoLabels.has(name)) throw fehler404()
          return { data: { name } }
        },
        createLabel: async ({ name, color, description }) => {
          aufrufe.push(['createLabel', name, color, description])
          repoLabels.set(name, color)
        },
        removeLabel: async ({ name }) => {
          aufrufe.push(['removeLabel', name])
          issueLabels = issueLabels.filter((n) => n !== name)
        },
        addLabels: async ({ labels }) => {
          aufrufe.push(['addLabels', ...labels])
          issueLabels.push(...labels)
        },
      },
    },
  }
  const meldungen = []
  const core = { info: (t) => meldungen.push(t), warning: (t) => meldungen.push('WARN ' + t) }
  const context = { repo: { owner: 'o', repo: 'r' }, payload: { issue: { number: 7 } } }

  const alt = process.env.GITHUB_WORKSPACE
  process.env.GITHUB_WORKSPACE = ROOT
  try {
    await r.einsortieren({ github, context, core })
  } finally {
    if (alt === undefined) delete process.env.GITHUB_WORKSPACE
    else process.env.GITHUB_WORKSPACE = alt
  }
  assert.deepEqual(issueLabels.sort(), ['rückmeldung', 'skill:reality-check', 'sterne:4'])
  assert.deepEqual(aufrufe, [
    ['removeLabel', 'skill:sales-deck'],
    ['createLabel', 'skill:reality-check', r.FARBE_SKILL, 'Betrifft den Skill reality-check'],
    ['createLabel', 'sterne:4', r.FARBE_STERNE, 'Rückmeldung mit 4 von 5 Sternen'],
    ['addLabels', 'skill:reality-check', 'sterne:4'],
  ])
  assert.ok(!meldungen.some((m) => m.startsWith('WARN')), meldungen.join('\n'))
})
