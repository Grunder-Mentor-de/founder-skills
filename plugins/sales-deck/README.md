# Sales Deck

Founder Skill von Gründer-Mentor.de. Schritt 3 auf dem Weg „Start from Zero“, von der Idee zum ersten zahlenden Kunden. Bereich: Kunden und Vertrieb.

## Was der Skill macht

- **Von:** „Ich will einen ersten Pilotkunden gewinnen, aber mir fehlen ein Deck und ein Preis.“
- **Nach:** Wer nur die Überschriften deines Decks liest, versteht, was du machst, welches Problem du löst und was du willst. Du sprichst dein Pilotangebot samt Preis ohne Zögern aus. Im Deck ist sichtbar, was belegt ist und was Annahme.
- **Der Weg:** Zehn Schritte, in der Reihenfolge der Folien: wer im Termin sitzt und wer entscheidet, das Titelblatt mit dem, was du machst, als Antwort, das Problem mit Zahl oder These, die Lösung mit Bild, der Beweis, Geschäftsmodell und Pilotangebot mit Preis, was dich einzigartig macht und der Wettbewerb, Plan und Ask, das Deck mit Designvorschlag, auf Wunsch eine Absichtserklärung und eine Übung. Der Skill stellt dir die Fragen, die sonst als Überschrift auf Folien landen, und macht aus deinen Antworten die Überschriften.
- **Am Ende hast du:** höchstens 10 Folien im Querformat mit Sprechtext und Designvorschlag nach der 10-20-30-Regel, mit Versionsnummer, dazu dein Pilotangebot in fünf Sätzen, die Liste deiner Annahmen und auf Wunsch eine nicht bindende Absichtserklärung.
- **Dauer:** etwa 60 Minuten, geschätzt, noch nicht gemessen.

## Installieren

Kopier diesen Satz in Claude Code oder Codex:

```text
Installiere den Skill sales-deck von https://github.com/Grunder-Mentor-de/founder-skills in diesem Projekt.
```

**Damit der Satz funktioniert:**

- **Mit Claude:** Öffne die Claude-App für den Desktop (Mac oder Windows), wähl oben den Reiter „Code“ und dann einen Ordner für dein Vorhaben. Dafür brauchst du Pro oder Max. Claude Code im Terminal geht genauso.
- **Mit ChatGPT:** Öffne die Codex-App von OpenAI für den Desktop (Mac oder Windows) und wähl einen Ordner für dein Vorhaben. Laut OpenAI ist Codex auch im kostenlosen ChatGPT-Konto enthalten, mit begrenzter Nutzung (Stand Oktober 2026).
- Fragt der Agent, ob er Befehle ausführen oder Dateien anlegen darf, erlaube es. Er holt den Skill von GitHub und legt ihn in deinem Ordner ab.
- Taucht der Skill danach nicht auf, starte eine neue Sitzung.

Für alle deine Projekte statt nur für eines:

```text
Installiere den Skill sales-deck von https://github.com/Grunder-Mentor-de/founder-skills für alle meine Projekte.
```

<details>
<summary>Andere Wege: im Chat auf claude.ai oder in ChatGPT, als Plugin</summary>

**Claude im Browser oder in der App, als Plugin** (Pro, Max, Team oder Enterprise): Unter „Customize“, Reiter „Plugins“, „Add“, „Add marketplace“, „Add from a repository“ diese Adresse einfügen und danach das Plugin `sales-deck` installieren. Die Menünamen stammen aus der Hilfe von Anthropic (Stand Oktober 2026).

```text
Grunder-Mentor-de/founder-skills
```

**Claude Code als Plugin:**

```bash
claude plugin marketplace add Grunder-Mentor-de/founder-skills
claude plugin install sales-deck@founder-skills
```

**Ohne Installation**, auch mit einem kostenlosen Konto in Claude oder ChatGPT (noch nicht getestet). Kopier diesen Satz in einen neuen Chat:

```text
Lies die Anleitung unter https://raw.githubusercontent.com/Grunder-Mentor-de/founder-skills/main/plugins/sales-deck/skills/sales-deck/SKILL.md und die Dateien, auf die sie verweist (gleiche Adresse, statt SKILL.md jeweils references/ und der Dateiname). Arbeite die Anleitung dann Schritt für Schritt mit mir durch.
```

</details>

## Starten

Schreib in eine neue Sitzung oder einen neuen Chat:

```text
Lass uns mit dem Founder Skill Sales Deck anfangen.
```

Der Skill stellt sich kurz vor und stellt dir dann eine Frage nach der anderen.

## Was du brauchst

- Hast du schon ein Deck, bring es mit. Der Skill fragt am Anfang „Fängst du neu an, oder hast du schon etwas?“, bewertet dein Material mit Stärken, Lücken und den drei wichtigsten Verbesserungen und sagt dir, wo du auf dem Weg stehst. Überarbeitet wird nur, wenn du das willst.
- Zum Installieren mit einem Satz: die Claude-App für den Desktop mit Pro oder Max (kostenpflichtig) oder die Codex-App von OpenAI (laut OpenAI auch im kostenlosen ChatGPT-Konto, mit begrenzter Nutzung). Andere Wege stehen unter „Installieren“.
- Was du über deinen Kunden weißt, am besten aus echten Gesprächen. Ohne Gespräche wird vieles im Deck als Annahme markiert.
- Für die Folien ein Programm deiner Wahl: Google Slides oder Keynote (kostenlos) oder PowerPoint (kostenpflichtig). Mit Code-Ausführung kann Claude auch direkt eine PowerPoint-Datei oder ein PDF im Querformat erzeugen.
- Hilfreich: der One-Pager aus dem Reality Check und das Pitch-Blatt aus dem Elevator Pitch. Dann ist schon klar, was du machst, und das Deck bringt es in Form.
- Dein Logo und, falls vorhanden, ein Bild oder Screenshot vom Produkt.

## Weitermachen und aktualisieren

**Pausieren und weitermachen:** Der Skill hält nach jedem Schritt deinen Stand fest. In Claude Code und Codex speichert er ihn als Datei `founder-skills/sales-deck-stand.md` in deinem Ordner. Im Chat gibt er dir den Stand als Block zum Kopieren, sobald du pausieren willst. Zum Weitermachen schreibst du:

```text
Lass uns mit dem Founder Skill Sales Deck weitermachen.
```

Im Chat fügst du den kopierten Stand direkt darunter ein.

**Aktualisieren:** Die Version steht am Ende jedes Gesprächs. Eine neue Fassung holst du mit:

```text
Aktualisiere den Skill sales-deck von https://github.com/Grunder-Mentor-de/founder-skills in diesem Projekt.
```

Als Plugin installiert: in Claude Code `claude plugin marketplace update founder-skills`, in Claude im Browser das Plugin entfernen und neu installieren. Ohne Installation liest der Skill immer die neueste Fassung.
**Rückmeldung und Bewertung:** Am Ende fragt der Skill nach 1 bis 5 Sternen und fasst neutral zusammen, wo der Ablauf nicht zu dir gepasst hat. Daraus entsteht ein vorbelegter Link auf das [Formular für Rückmeldungen](https://github.com/Grunder-Mentor-de/founder-skills/issues/new?template=rueckmeldung.yml). Du prüfst den Text und schickst ihn selbst ab, mit einem kostenlosen GitHub-Konto. Ohne Konto geht derselbe Text per Mail an kontakt@gruender-mentor.de.
