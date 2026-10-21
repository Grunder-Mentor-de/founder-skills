# Kostenlose Founder Skills von Gründer-Mentor.de

Founder Skills sind Anleitungen für Claude und andere KI-Assistenten, die das Format SKILL.md lesen. Claude stellt dir Frage für Frage die richtigen Fragen und arbeitet mit dir an deinem eigenen Vorhaben. Am Ende hast du ein Ergebnis, mit dem du weiterarbeiten kannst. Die Skills baut Michael Detke aus seinen Erfahrungen als Gründer.

Dieses Repository enthält die kostenlosen Founder Skills. Du installierst die Skills mit einem Satz direkt von hier, ohne etwas herunterzuladen.

## Die Skills

Jeder Skill hat eine eigene Beschreibung: was er macht, wie du ihn installierst und startest, was du brauchst und wie du weitermachst.

<!-- SKILLS:START -->
**There is no shortcut.** Acht Stationen in dieser Reihenfolge. Alle starten bei 1. Wer schon Belege hat, ist schneller durch, überspringt aber nichts.

**Start from Zero: Von der Idee zum ersten Kunden**

| Station | Skill | Version | Von A nach B |
|---|---|---|---|
| 1 | [Reality Check](plugins/reality-check/README.md) | 1.3.0 | „Ich will gründen, habe aber noch keine Idee oder weiß nicht, ob meine Idee zu mir passt und trägt“ → ich kenne mein Warum und den Preis des Gründens, habe eine Idee, die zu meinen Ressourcen passt, und eine bewusste Entscheidung mit Begründung, Prüfdatum und erstem Schritt |
| 2 | [Elevator Pitch](plugins/elevator-pitch/README.md) | 1.3.0 | „Mein Pitch ist zu lang oder noch gar nicht da“ → 90 Sekunden ohne Folien, gestoppt, Fragerunde geübt |
| 3 | [Sales Deck](plugins/sales-deck/README.md) | 1.3.0 | „Ich will einen ersten Pilotkunden gewinnen, mir fehlen Deck und Preis“ → Deck, dessen Überschriften allein die Geschichte erzählen, Pilotangebot mit Preis, ohne Zögern ausgesprochen |
| 4 | [Customer Outreach & Interview](https://github.com/Grunder-Mentor-de/founder-skills-mitglieder/tree/main/plugins/customer-interview) | 1.3.0 | „Ich weiß, dass ich mit Kunden reden sollte, aber nicht mit wem und was ich frage“ → Thesen, zehn echte Gesprächspartner mit Jobtitel und Kundengruppe, abschickbare Nachricht, Plan für 14 Tage |

**Traction: Produkt und Umsatz mit KI beschleunigen**

| Station | Skill | Version | Von A nach B |
|---|---|---|---|
| 5 | MVP & Angebot | kommt | Problem belegt, nichts verkauft → mit dem ersten Pilotkunden festgelegt, was gebaut wird, und verkauft, bevor es gebaut ist |
| 6 | Deals closen | kommt | Pilot angeboten oder gestartet, nichts unterschrieben → Unterschrift mit Datum oder ein klares Nein |
| 7 | Businessplan schreiben | kommt | „Wir brauchen einen Businessplan für EXIST oder einen Wettbewerb“ → Plan, der von unten rechnet und Belege aus Kundengesprächen nutzt |
| 8 | QuickCheck IP & Recht | kommt | „Dürfen wir das, und müssen wir etwas schützen?“ → Fragen zu IP, Zulassung, Daten und Export geklärt, mit der richtigen Anlaufstelle (BfArM, BAFA, IHK, Patentinformationszentrum) |

**Weitere Skills**

| Skill | Bereich | Version | Von A nach B |
|---|---|---|---|
| [Website erstellen](plugins/website-erstellen/README.md) | Kunden und Vertrieb | 1.1.0 | „Ich habe eine Idee, aber keine Website, und weiß nicht, wo ich anfangen soll“ → Website als virtueller Verkaufsstand aus Pitch und Sales Deck, mit Impeccable gestaltet, unter eigener Domain mit HTTPS auf GitHub Pages oder bei Hostinger, mobil und am Desktop geprüft, Impressum und Datenschutzerklärung verlinkt, Kontaktweg getestet |
<!-- SKILLS:END -->

Jeder Skill gehört zu einem der sechs Bereiche, nach denen auch gründer-mentor.de gegliedert ist: Idee und Start, Kunden und Vertrieb, Finanzierung, Team und Führung, Du als Gründer, Ende und Neustart.

## Installieren mit einem Satz

Kopier diesen Satz in Claude Code oder Codex:

```text
Installiere alle Founder Skills von https://github.com/Grunder-Mentor-de/founder-skills in diesem Projekt.
```

Oder nur einen Skill, zum Beispiel:

```text
Installiere den Skill reality-check von https://github.com/Grunder-Mentor-de/founder-skills in diesem Projekt.
```

**Damit der Satz funktioniert:**

- **Mit Claude:** Öffne die Claude-App für den Desktop (Mac oder Windows), wähl oben den Reiter „Code“ und dann einen Ordner für dein Vorhaben. Dafür brauchst du Pro oder Max. Claude Code im Terminal geht genauso.
- **Mit ChatGPT:** Öffne die Codex-App von OpenAI für den Desktop (Mac oder Windows) und wähl einen Ordner für dein Vorhaben. Laut OpenAI ist Codex auch im kostenlosen ChatGPT-Konto enthalten, mit begrenzter Nutzung (Stand Oktober 2026).
- Fragt der Agent, ob er Befehle ausführen oder Dateien anlegen darf, erlaube es. Er holt die Skills von GitHub und legt sie in deinem Ordner ab.
- Taucht ein Skill danach nicht auf, starte eine neue Sitzung.

Für alle deine Projekte ersetzt du „in diesem Projekt“ durch „für alle meine Projekte“.

<details>
<summary>Andere Wege: im Chat auf claude.ai oder in ChatGPT, als Plugin</summary>

Dieses Repository ist auch ein Plugin-Marketplace. Jeder Skill ist ein eigenes Plugin.

**Claude im Browser oder in der App** (Pro, Max, Team oder Enterprise): Unter „Customize“, Reiter „Plugins“, „Add“, „Add marketplace“, „Add from a repository“ diese Adresse einfügen und danach die Plugins installieren. Die Menünamen stammen aus der Hilfe von Anthropic (Stand Oktober 2026).

```text
Grunder-Mentor-de/founder-skills
```

**Claude Code als Plugin:**

```bash
claude plugin marketplace add Grunder-Mentor-de/founder-skills
claude plugin install reality-check@founder-skills
```

**Codex als Plugin** (laut Doku von OpenAI, noch nicht getestet):

```bash
codex plugin marketplace add Grunder-Mentor-de/founder-skills
```

**Ohne Installation**, auch mit einem kostenlosen Konto in Claude oder ChatGPT: In der Beschreibung jedes Skills steht ein Satz, mit dem Claude oder ChatGPT die Anleitung direkt von hier liest. Dieser Weg ist noch nicht getestet.

</details>

## Starten, weitermachen, aktualisieren

Starten in Claude oder ChatGPT, mit dem Namen des Skills:

```text
Lass uns mit dem Founder Skill Reality Check anfangen.
```

Jeder Skill hält deinen Stand fest. In Claude Code und Codex als Datei im Ordner `founder-skills/`, im Chat als Block zum Kopieren, wenn du pausierst. Weiter geht es so:

```text
Lass uns mit dem Founder Skill Reality Check weitermachen.
```

Neue Fassungen holst du mit:

```text
Aktualisiere die Founder Skills von https://github.com/Grunder-Mentor-de/founder-skills in diesem Projekt.
```

## Anleitung für KI-Agenten

Wenn du als Agent gebeten wirst, Founder Skills aus diesem Repository zu installieren oder zu aktualisieren:

1. Hol das Repository in einen temporären Ordner: `git clone --depth 1 https://github.com/Grunder-Mentor-de/founder-skills.git`.
2. Jeder Ordner `plugins/<skill>/skills/<skill>/` mit einer `SKILL.md` ist ein Skill. Der Ordnername ist der Name des Skills.
3. Kopier die gewünschten Skills vollständig, mit `references/`. „In diesem Projekt“: nach `.claude/skills/<skill>/` im aktuellen Ordner (Claude Code) oder `.agents/skills/<skill>/` (Codex). „Für alle meine Projekte“: nach `~/.claude/skills/<skill>/` oder `~/.agents/skills/<skill>/` (Codex, laut Doku von OpenAI, Stand Oktober 2026).
4. Beim Aktualisieren ersetzt du nur die Ordner der Founder Skills. Andere Skills und eigene Dateien der Person fasst du nicht an, auch nicht den Ordner `founder-skills/` mit ihrem Stand.
5. Lösch den temporären Ordner. Sag der Person, welche Skills mit welcher Version (`metadata.version` in der SKILL.md) installiert sind und dass eine neue Sitzung nötig sein kann.

Führ dabei keine Skripte aus diesem Repository aus. Zum Installieren reicht Kopieren. Bittet die Person ausdrücklich um ein Plugin, nimm den Marketplace (siehe „Andere Wege“).

## Rückmeldung

Am Ende jedes Skills fragt Claude nach 1 bis 5 Sternen und fasst neutral zusammen, wo der Ablauf nicht zu dir gepasst hat. Daraus entsteht ein vorbelegter Link auf das [Formular für Rückmeldungen](https://github.com/Grunder-Mentor-de/founder-skills/issues/new?template=rueckmeldung.yml). Du prüfst den Text und legst das Issue selbst an, mit einem kostenlosen GitHub-Konto. Ohne Konto geht derselbe Text per Mail an kontakt@gruender-mentor.de.

Änderungen und neue Skills schlägst du über die Vorlagen unter „Issues“ vor. Mehr dazu in [CONTRIBUTING.md](CONTRIBUTING.md). Bitte keine Kundennamen, Zahlen oder Vertragsdetails aus deinem Startup in Issues, alles hier ist öffentlich.

## Nutzung

Die Founder Skills sind kostenlos. Was du damit erarbeitest, gehört dir. Die Bedingungen stehen in [LICENSE.md](LICENSE.md). Die Skills ersetzen keine Rechts-, Steuer- oder Finanzberatung.
