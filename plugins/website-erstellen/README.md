# Website erstellen

Founder Skill von Gründer-Mentor.de für Stufe 3: erster zahlender Kunde und gegründet. Bereich: Kunden und Vertrieb.

## Was der Skill macht

- **Von:** „Ich habe eine Idee, aber keine Website, und weiß nicht, wo ich anfangen soll.“
- **Nach:** Deine Seite läuft unter deiner eigenen Domain mit HTTPS, kostenlos auf GitHub Pages oder als Advanced-Seite bei Hostinger. Du hast sie auf dem Handy und am Desktop geprüft, Impressum und Datenschutzerklärung sind verlinkt, und eine Testnachricht über deinen Kontaktweg ist angekommen.
- **Der Weg:** Sieben Schritte: Zweck, Kontaktweg und Hosting, Texte, Aussehen, Bauen mobil zuerst, Impressum und Datenschutz, online bringen, eigene Domain und Livegang.
- **Am Ende hast du:** die Dateien deiner Website, ihr Design-System (Farben, Schriften, Abstände) für dein Sales Deck und ein Livegang-Protokoll mit Prüfliste, Domain-Einstellungen und offenen Punkten
- **Dauer:** etwa zwei bis drei Stunden in zwei oder drei Sitzungen, dazu bis zu 24 Stunden Wartezeit, bis Domain und HTTPS greifen (geschätzt, noch nicht gemessen)

Der Ablauf ist angelehnt an den Skill [website-bauen](https://github.com/Julian-Ivanov/website-bauen) von Julian Ivanov.

## Installieren

Kopier diesen Satz in Claude Code oder Codex:

```text
Installiere den Skill website-erstellen von https://github.com/Grunder-Mentor-de/founder-skills in diesem Projekt.
```

**Damit der Satz funktioniert:**

- **Mit Claude:** Öffne die Claude-App für den Desktop (Mac oder Windows), wähl oben den Reiter „Code“ und dann einen Ordner für dein Vorhaben. Dafür brauchst du Pro oder Max. Claude Code im Terminal geht genauso.
- **Mit ChatGPT:** Öffne die Codex-App von OpenAI für den Desktop (Mac oder Windows) und wähl einen Ordner für dein Vorhaben. Laut OpenAI ist Codex auch im kostenlosen ChatGPT-Konto enthalten, mit begrenzter Nutzung (Stand Oktober 2026).
- Fragt der Agent, ob er Befehle ausführen oder Dateien anlegen darf, erlaube es. Er holt den Skill von GitHub und legt ihn in deinem Ordner ab.
- Taucht der Skill danach nicht auf, starte eine neue Sitzung.

Für alle deine Projekte statt nur für eines:

```text
Installiere den Skill website-erstellen von https://github.com/Grunder-Mentor-de/founder-skills für alle meine Projekte.
```

<details>
<summary>Andere Wege: als Plugin in Claude Code, warum nicht im Chat</summary>

**Claude Code als Plugin:**

```bash
claude plugin marketplace add Grunder-Mentor-de/founder-skills
claude plugin install website-erstellen@founder-skills
```

**Nicht im Chat auf claude.ai oder in ChatGPT:** Dieser Skill gestaltet die Seite mit dem Design-Plugin Impeccable und legt Dateien in deinem Ordner an. Das geht nur in Claude Code oder Codex.

</details>

## Starten

Schreib in eine neue Sitzung in Claude Code oder Codex, im Ordner für dein Vorhaben:

```text
Lass uns mit dem Founder Skill Website erstellen anfangen.
```

Der Skill stellt sich kurz vor und stellt dir dann eine Frage nach der anderen.

## Was du brauchst

- Hast du schon eine Website, bring sie mit. Der Skill fragt am Anfang „Fängst du neu an, oder hast du schon etwas?“, bewertet deine Seite mit Stärken, Lücken und den drei wichtigsten Verbesserungen und sagt dir, wo du auf dem Weg stehst. Überarbeitet wird nur, wenn du das willst.
- Claude Code oder Codex, wie unter „Installieren“ beschrieben. Im Chat auf claude.ai oder in ChatGPT geht dieser Skill nicht.
- Impeccable, ein Design-Plugin (kostenlos, Open Source). Der Skill richtet es am Anfang mit dir ein. Dafür brauchst du Node.js (kostenlos) oder in Claude Code den Plugin-Befehl.
- Ein GitHub-Konto (kostenlos). Mit dem kostenlosen Konto ist der Quelltext deiner Seite öffentlich.
- Nur für Advanced-Seiten statt GitHub Pages: ein Webhosting bei Hostinger (kostenpflichtig, laut Preisen vom Oktober 2026 ab 2,99 € im Monat bei 48 Monaten Laufzeit, danach 9,99 € im Monat). Sinnvoll für ein Kontaktformular ohne fremden Dienst, Postfächer mit deiner Domain oder einen Quelltext, der nicht öffentlich sein soll.
- Eine eigene Domain, etwa mit .de (kostenpflichtig, laut Preisen vom Oktober 2026 im ersten Jahr oft wenige Cent bis 5 €, danach etwa 12 bis 19 € im Jahr). Hast du noch keine, kaufst du sie in Schritt 7 selbst.
- Dein Handy, um die Seite zu prüfen.
- Die Angaben für dein Impressum: Name oder Firma, Anschrift, E-Mail, bei einer Firma Rechtsform und Registernummer.
- Optional: Logo, Farben und eigene Fotos, die du nutzen darfst.
- Optional: ein Generator für Rechtstexte (kostenlose und kostenpflichtige gibt es) oder eine Anwältin oder ein Anwalt für Impressum und Datenschutzerklärung.
- Optional: ein Formulardienst oder ein Terminkalender, wenn Besucher dir nicht per E-Mail schreiben sollen.

Für einen Shop, Zahlungen oder Logins ist dieser Skill nicht gedacht. Das sagt dir der Skill am Anfang.

## Weitermachen und aktualisieren

**Pausieren und weitermachen:** Der Skill hält nach jedem Schritt deinen Stand fest. Er speichert ihn als Datei `founder-skills/website-erstellen-stand.md` in deinem Ordner. Das brauchst du hier oft, weil die Domain bis zu 24 Stunden braucht. Zum Weitermachen schreibst du:

```text
Lass uns mit dem Founder Skill Website erstellen weitermachen.
```

**Aktualisieren:** Die Version steht am Ende jedes Gesprächs. Eine neue Fassung holst du mit:

```text
Aktualisiere den Skill website-erstellen von https://github.com/Grunder-Mentor-de/founder-skills in diesem Projekt.
```

Als Plugin installiert: in Claude Code `claude plugin marketplace update founder-skills`, in Claude im Browser das Plugin entfernen und neu installieren. Ohne Installation liest der Skill immer die neueste Fassung.
**Rückmeldung und Bewertung:** Am Ende fragt der Skill nach 1 bis 5 Sternen und fasst neutral zusammen, wo der Ablauf nicht zu dir gepasst hat. Daraus entsteht ein vorbelegter Link auf das [Formular für Rückmeldungen](https://github.com/Grunder-Mentor-de/founder-skills/issues/new?template=rueckmeldung.yml). Du prüfst den Text und schickst ihn selbst ab, mit einem kostenlosen GitHub-Konto. Ohne Konto geht derselbe Text per Mail an kontakt@gruender-mentor.de.
