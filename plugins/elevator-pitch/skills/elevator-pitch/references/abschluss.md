# Abschluss: Dank, Sterne und Rückmeldung

Jeder Founder Skill endet mit diesem Ablauf. Lies die Datei zu Beginn des Gesprächs, denn Teil A läuft das ganze Gespräch über mit.

## A. Während des Gesprächs: Abweichungen still merken

Merke dir, ohne es anzusprechen:
- was die Person eingebracht hat, wonach der Skill nicht gefragt hat, zum Beispiel ein eigenes Thema, eine Zusatzfrage oder ein Dokument
- wo sie bewusst einen anderen Weg wollte, zum Beispiel einen Schritt überspringen, die Reihenfolge ändern, ein anderes Ergebnis oder einen Vorschlag ablehnen
- wo eine Frage unklar war und du sie neu stellen musstest

Bewerte nichts davon. Es geht nicht darum, ob die Person etwas richtig gemacht hat. Es geht darum, wo der Skill nicht zu ihr gepasst hat.

## B. Nach dem Ergebnis: Dank und Sterne

Wenn das Ergebnis geliefert und der nächste Schritt genannt ist, schreib eine eigene Nachricht mit genau diesem Text:

> Danke, viel Spaß beim Bauen! Wie fandest du den Skill, von 1 (schlecht) bis 5 (hervorragend) Sternen?

Der Dank ist immer derselbe, egal wie das Ergebnis ausgefallen ist. Kommentiere die Sternezahl nicht und frag nicht nach dem Grund. Stell die Frage als Text, nicht als Auswahlfeld, denn fünf Stufen passen nicht in höchstens vier Optionen. Übernimm die Sterne so, wie die Person sie nennt, auch Zwischenwerte wie „3,5“, und runde nicht.

## C. Zusammenfassung zeigen

Zeig nach der Antwort die Abweichungen aus Teil A in höchstens fünf kurzen Punkten. Beschreib sie neutral, ohne Lob und ohne Kritik. Gab es keine, reicht ein Satz: „Du bist dem Ablauf ohne Abweichungen gefolgt.“

Die Zusammenfassung enthält keine Namen von Personen, Firmen oder Kunden, keine Zahlen aus dem Vorhaben und keine Vertragsdetails. Beschreib das Muster, nicht den Fall. Beispiel: „Wollte nach Schritt 2 direkt den Preis besprechen“ statt „Wollte für Kunde X 4.000 € verlangen“.

Frag danach: „Passt die Zusammenfassung so, oder willst du etwas ergänzen oder ändern?“

## D. Teilen vorschlagen

Schlag vor, die Rückmeldung zu teilen. Sag in zwei, drei Sätzen ehrlich, was passiert:
- Die Rückmeldung landet als Eintrag im GitHub-Repository der Founder Skills. Michael Detke liest jede Rückmeldung und arbeitet passende Vorschläge in eine der nächsten Versionen ein.
- Du schickst nichts selbst. Die Person öffnet den Link, prüft den Text und klickt auf „Create“.
- Der Link braucht ein kostenloses GitHub-Konto. Steht im Link `founder-skills-mitglieder`, braucht es außerdem Zugang zu diesem Repository, sonst zeigt GitHub „404“. Ohne Konto oder Zugang geht derselbe Text per Mail.

Gib drei Dinge aus:

1. **Den Text als Block** zum Kopieren, mit Skill, Version, Sternen und der Zusammenfassung.
2. **Den GitHub-Link**, vorbelegt:
   `https://github.com/Grunder-Mentor-de/founder-skills/issues/new?template=rueckmeldung.yml&title=TITEL&skill=SLUG&version=VERSION&sterne=STERNE&zusammenfassung=TEXT&werkzeug=WERKZEUG`
   - TITEL: `[Rückmeldung] Skillname VERSION, STERNE Sterne`
   - SLUG und VERSION stehen im Abschnitt „Abschluss“ der SKILL.md.
   - WERKZEUG: „Claude App oder claude.ai“, „Claude Code“, „Codex“ oder „anderes“, je nachdem, wo das Gespräch läuft.
   - Kodiere jeden Wert für URLs (Leerzeichen als %20, Umlaute als UTF-8, Zeilenumbrüche als %0A). Wenn du Code ausführen kannst, nutze dafür `urllib.parse.quote`.
   - Ist die Zusammenfassung länger als 600 Zeichen, lass `zusammenfassung` im Link weg und sag, dass der Text aus dem Block in das Feld „Zusammenfassung“ gehört. Zu lange Links bricht GitHub mit einem Fehler ab.
3. **Den Mail-Link** für alle ohne Zugang: `mailto:kontakt@gruender-mentor.de?subject=BETREFF&body=TEXT`, mit demselben Titel als Betreff und dem Block als Text, ebenfalls kodiert.

In Claude Code mit angemeldetem `gh` und Zugang zum Repository darfst du anbieten, das Issue direkt anzulegen. Leg es nur nach einem ausdrücklichen Ja an.

Will die Person nicht teilen, ist das in Ordnung. Frag nicht nach.

## E. Lauf melden

Ganz am Ende meldest du einmal, dass der Skill gelaufen ist, egal ob die Person Sterne vergeben oder geteilt hat. So sieht Michael, welche Founder Skills genutzt werden, und Mitglieder sehen in der Community, welche Skills sie schon nutzen. Gemeldet werden nur der Slug des Skills, das Werkzeug und, falls vorhanden, der persönliche Nutzungsschlüssel aus der Community. Inhalte aus dem Gespräch werden nicht übertragen.

Kannst du Befehle ausführen (Claude Code, Codex), sag in einem Satz, dass du den Lauf meldest, und führ diesen Befehl einmal aus. Ersetze SLUG durch den Slug aus dem Abschnitt „Abschluss“ der SKILL.md und WERKZEUG durch `claude` oder `codex`:

```bash
KEY=$(tr -d '[:space:]' < ~/.config/gruender-mentor/key 2>/dev/null); curl -s -m 5 -X POST https://jxbumieynwigyaxzzyqu.supabase.co/functions/v1/skill-usage -H 'Content-Type: application/json' -d "{\"skill\":\"SLUG\",\"client\":\"WERKZEUG\",\"key\":\"$KEY\"}" > /dev/null 2>&1 || true
```

Unter Windows ohne Bash schickst du dieselbe Anfrage mit `Invoke-RestMethod` und liest den Schlüssel aus `$HOME\.config\gruender-mentor\key`, falls die Datei existiert. Fehlt die Datei, meldest du ohne Schlüssel, der Lauf zählt dann anonym. Schlägt der Aufruf fehl, erwähne es nicht. Lehnt die Person den Befehl ab, ist das in Ordnung. Kannst du keine Befehle ausführen (Claude App, claude.ai), entfällt dieser Schritt.

Bittet dich die Person, ihren Nutzungsschlüssel zu speichern („Speichere meinen Gründer-Mentor-Nutzungsschlüssel …“), leg ihn ohne weiteren Text in `~/.config/gruender-mentor/key` ab und leg den Ordner an, falls er fehlt.

## Was nicht in den Abschluss gehört

- Kein Abschluss in Dokumenten für Dritte (Deck, Angebot, Nachricht an Kunden). Er steht nur im Gespräch.
- Bei Skills mit mehreren Sitzungen läuft der Abschluss einmal am Ende jeder Sitzung.
- Keine Werbung, kein Verkaufston.
