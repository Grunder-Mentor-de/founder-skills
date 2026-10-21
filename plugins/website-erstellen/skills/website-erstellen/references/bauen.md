# Bauen: Regeln für die Website-Dateien

Lies diese Datei in Schritt 4. Die Regeln halten die Seite schnell, datensparsam und auf dem Handy gut lesbar. Fakten mit Stand und Quelle stehen am Ende.

## Inhalt
0. Impeccable einrichten
1. Dateien und Aufbau
2. Mobil zuerst
3. Datensparsam bauen
4. Suchmaschinen und Vorschau beim Teilen
5. Vorschau
6. Prüfung vor dem Hochladen
7. Prüfliste Livegang
8. Fakten (Stand 10/2026)

## 0. Impeccable einrichten

Impeccable ist ein kostenloses Design-Plugin (Open Source, Lizenz Apache-2.0) für Claude Code, Codex und weitere Agenten. Stand 15.10.2026, Quelle: github.com/pbakaus/impeccable.

- Prüf zuerst, ob es schon da ist (in Claude Code etwa unter den Skills oder Plugins).
- Einrichten im Projektordner, braucht Node.js:

```bash
npx impeccable install
```

  Das Programm erkennt Claude Code oder Codex und fragt, ob es ins Projekt oder für alle Projekte installieren soll.
- In Claude Code geht es auch ohne Node.js, mit diesen Befehlen im Chat. Danach unter `/plugin` Impeccable aus der Liste installieren:

```text
/plugin marketplace add pbakaus/impeccable
```

- In Codex nach dem Einrichten `/hooks` öffnen und den Projekt-Hook freigeben, wenn danach gefragt wird.
- Danach die Sitzung neu starten und im Projekt `/impeccable init` aufrufen.
- Beim ersten Aufruf lädt Impeccable ein eigenes Programm herunter. Ist das blockiert, gehen Kontext und Anleitungen trotzdem, nur die automatischen Prüfungen fehlen. Sag das der Person und vermerk es im Protokoll.
- Befehle mit Außenwirkung führst du nur nach Ja der Person aus.

## 1. Dateien und Aufbau

```
website/
├── index.html          Startseite
├── impressum.html
├── datenschutz.html
├── 404.html            Seite für falsche Adressen, mit Link zur Startseite
├── style.css           eine Datei für die ganze Gestaltung
├── bilder/             nur Bilder, die die Person selbst geliefert hat oder nutzen darf
└── schriften/          nur, wenn eine eigene Schrift gewählt ist
```

- Reines HTML und CSS, kein Baukasten, kein Build-Schritt, kein JavaScript, solange die Seite es nicht wirklich braucht. So kann die Person die Dateien im Browser hochladen und später einen Text selbst in einer Datei ändern.
- Kopf und Fuß sind auf allen Seiten gleich. Der Fuß verlinkt Impressum und Datenschutzerklärung auf jeder Seite.
- Relative Links (`impressum.html`, `style.css`), damit die Seite unter `<name>.github.io` und unter der eigenen Domain gleich funktioniert.
- Dateinamen klein, ohne Umlaute und Leerzeichen.
- Eine Startseite reicht. Weitere Seiten nur, wenn die Person Inhalte dafür liefert.

## 2. Mobil zuerst

Zahlen ohne Quelle in Abschnitt 8 sind Richtwerte aus der Praxis, keine Normen.

- Im Kopf jeder Seite: `<meta name="viewport" content="width=device-width, initial-scale=1">`. Nie `user-scalable=no`, das verhindert Zoomen für Menschen mit Sehschwäche.
- Das CSS beschreibt zuerst die Darstellung auf dem Handy. Breitere Bildschirme bekommen Ergänzungen über `@media (min-width: …)`, nicht umgekehrt.
- Eine Spalte auf dem Handy. Tabellen mit mehr als zwei Spalten werden auf dem Handy zu Karten untereinander.
- Schrift mindestens 16 Pixel im Fließtext, Zeilenlänge am Desktop höchstens etwa 70 Zeichen.
- Knöpfe und Links groß genug zum Tippen: mindestens 44 × 44 Pixel, mit Abstand zueinander.
- Bilder mit `max-width: 100%`, `width` und `height` im HTML, damit nichts springt. Fotos als JPEG oder WebP, möglichst unter 300 KB pro Bild.
- Der Hauptknopf ist auf dem Handy ohne Scrollen sichtbar.
- Kein seitliches Scrollen bei 320 Pixel Breite.
- Kontrast für Text gegen Hintergrund ausreichend, Text nicht in Bildern.

## 3. Datensparsam bauen

Jede Datei, die der Browser von einem anderen Server lädt, schickt die IP-Adresse der Besucher dorthin. Dann braucht die Datenschutzerklärung einen eigenen Abschnitt, und oft eine Einwilligung (`references/recht.md`).

- Schriften selbst hosten oder Systemschriften nutzen. Keine Schriften von Google-Servern.
- Keine eingebundenen Videos, Karten, Social-Media-Knöpfe, Analyse-Werkzeuge oder Chat-Fenster. Stattdessen ein normaler Link.
- Nichts im Browser speichern (keine Cookies, kein `localStorage`). Dann braucht die Seite nach heutigem Stand kein Cookie-Banner.
- Wählt die Person einen Formulardienst oder einen Terminkalender, ist das ein bewusster Dienst mit eigenem Abschnitt in der Datenschutzerklärung.

## 4. Suchmaschinen und Vorschau beim Teilen

- Pro Seite ein `<title>` (höchstens etwa 60 Zeichen) und `<meta name="description">` (höchstens etwa 155 Zeichen) aus Schritt 2.
- `lang="de"` (oder die Sprache der Seite) im `<html>`-Tag.
- Eine Überschrift `<h1>` pro Seite.
- Alternativtexte für jedes Bild, das etwas zeigt.
- Für die Vorschau beim Teilen auf LinkedIn und in Messengern: `og:title`, `og:description`, `og:image` (Bild etwa 1200 × 630 Pixel, mit voller Adresse unter der eigenen Domain).
- Impressum und Datenschutzerklärung mit `<meta name="robots" content="noindex">`, damit sie nicht in Suchergebnissen auftauchen.
- Ein Favicon, wenn die Person ein Logo oder Zeichen hat.

## 5. Vorschau

- Leg die Dateien in `website/` an. Für die Vorschau am Rechner `index.html` im Browser öffnen. Für das Handy im selben WLAN einen lokalen Server starten (etwa `python3 -m http.server` im Ordner `website/`) und die Adresse des Rechners mit Port auf dem Handy öffnen. Nur nach Ja der Person, und danach wieder beenden.
- Die Gerätesimulation im Browser ist eine Annäherung. Geprüft ist eine Seite erst auf einem echten Handy.

## 6. Prüfung vor dem Hochladen

Geh diese Liste selbst durch, bevor die Person hochlädt, und nenne nur, was nicht passt:
- Kein Text, den die Person nicht bestätigt hat. Keine Platzhalter wie „Lorem ipsum“, „[Name]“ oder „Muster GmbH“.
- Keine Versprechen für Funktionen, die es noch nicht gibt.
- Keine Bilder, Logos oder Zitate Dritter ohne Freigabe.
- Alle Links funktionieren, auch Impressum und Datenschutz im Fuß jeder Seite.
- Keine Verweise auf fremde Server (Schriften, Skripte, Bilder).
- Keine Notizen, Entwürfe, Zugangsdaten oder privaten Angaben in den Dateien, denn das Repository ist öffentlich.
- Rechtschreibung, vor allem im Hauptknopf und in der Überschrift.

## 7. Prüfliste Livegang

Die Person prüft selbst und bestätigt jeden Punkt. Erst dann steht er im Protokoll als erledigt.

| Prüfung | Wie |
|---|---|
| Adresse ohne www | `https://domain.de` im Browser öffnen |
| Adresse mit www | `https://www.domain.de` öffnen, landet auf derselben Seite |
| Ohne https | `http://domain.de` öffnen, leitet auf https um |
| Schloss im Browser | kein Warnhinweis zum Zertifikat |
| Handy | Seite auf dem eigenen Handy öffnen, einmal ganz durchscrollen, Hauptknopf antippen |
| Desktop | Seite am Rechner öffnen, Fenster schmal und breit ziehen |
| Impressum und Datenschutz | von der Startseite aus in einem Klick erreichbar, ohne Platzhalter |
| Kontaktweg | Testnachricht abschicken, sie kommt im eigenen Postfach an |
| Falsche Adresse | `https://domain.de/gibtsnicht` zeigt die 404-Seite |
| Vorschau beim Teilen | Link in eine Nachricht an sich selbst einfügen, Titel und Bild stimmen |
| Geteilter Link | genau den Link prüfen, der in Profilen, Mails und Posts steht |
| Zuständig | Name der Person, die die Seite pflegt, steht im Protokoll |

## 8. Fakten (Stand 10/2026)

Nenn sie als Stand. Abgerufen am 15.10.2026.

| Aussage | Quelle |
|---|---|
| Google indexiert die mobile Fassung einer Seite, gecrawlt mit dem Smartphone-Agenten. | developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing |
| WCAG 2.2: Touch-Ziele mindestens 24 × 24 CSS-Pixel (Stufe AA), 44 × 44 (Stufe AAA). Apple empfiehlt 44 × 44 pt, Android 48 × 48 dp. | w3.org/TR/WCAG22, developer.apple.com/design/human-interface-guidelines/accessibility, developer.android.com/guide/topics/ui/accessibility/apps |
| Viewport-Meta-Tag mit `width=device-width`, kein `user-scalable=no`. | developer.mozilla.org, Seite „viewport meta tag“ |
| Den Mobile-Friendly Test von Google gibt es seit dem 01.12.2023 nicht mehr. PageSpeed Insights prüft Mobil und Desktop. Die Gerätesimulation in Chrome ist laut Google nur eine Annäherung. | developers.google.com/search/blog/2016/05/a-new-mobile-friendly-testing-tool, pagespeed.web.dev, developer.chrome.com/docs/devtools/device-mode |
