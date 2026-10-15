# Kostenlose Founder Skills von Gründer-Mentor.de

Founder Skills sind Anleitungen für Claude und andere KI-Assistenten, die das Format SKILL.md lesen. Claude stellt dir Frage für Frage die richtigen Fragen und arbeitet mit dir an deinem eigenen Vorhaben. Am Ende hast du ein Ergebnis zum Herunterladen. Die Skills baut Michael Detke aus seinen Erfahrungen als Gründer.

Dieses Repository enthält die kostenlosen Founder Skills. Weitere gibt es für Mitglieder der Community von [gründer-mentor.de](https://xn--grnder-mentor-xob.de/).

## Installieren mit einem Satz

Gib deinem KI-Agenten (Claude Code, Codex oder ein anderer, der Dateien anlegen darf) diesen Satz:

> Installiere die Founder Skills von https://github.com/Grunder-Mentor-de/founder-skills für alle meine Projekte.

Nur für das aktuelle Projekt:

> Installiere die Founder Skills von https://github.com/Grunder-Mentor-de/founder-skills in diesem Projekt.

Nur einen Skill:

> Installiere den Founder Skill reality-check von https://github.com/Grunder-Mentor-de/founder-skills.

Neue Fassung holen:

> Aktualisiere die Founder Skills von https://github.com/Grunder-Mentor-de/founder-skills.

Taucht ein Skill danach nicht auf, starte den Agenten neu. Dann sagst du zum Beispiel: „Lass uns mit dem Founder Skill Reality Check anfangen.“

### Claude im Browser oder in der App (claude.ai)

Dort kann Claude nichts von GitHub installieren. Du lädst den Skill als ZIP hoch:

1. ZIP herunterladen: unter „Releases“ rechts auf dieser Seite, oder direkt über `https://github.com/Grunder-Mentor-de/founder-skills/releases/latest/download/<skill>.zip`, zum Beispiel `…/reality-check.zip`.
2. In den Einstellungen von Claude die Code-Ausführung einschalten.
3. Im Bereich „Skills“ die ZIP hochladen. Die Menüs ändern sich hin und wieder. Laut Hilfeseite von Anthropic (Stand Oktober 2026) heißt der Weg etwa „Customize > Skills > + > Upload a skill“.

Eine neue Fassung lädst du genauso hoch. Die alte ersetzt sich nicht von selbst.

## Die Skills

<!-- SKILLS:START -->
Noch keine Skills veröffentlicht.
<!-- SKILLS:END -->

Jeder Skill gehört zu einem der sechs Bereiche, nach denen auch gründer-mentor.de gegliedert ist: Idee und Start, Kunden und Vertrieb, Finanzierung, Team und Führung, Du als Gründer, Ende und Neustart.

## Anleitung für KI-Agenten

Wenn du als Agent gebeten wirst, die Founder Skills aus diesem Repository zu installieren oder zu aktualisieren:

1. Hol das Repository in einen temporären Ordner: `git clone --depth 1 https://github.com/Grunder-Mentor-de/founder-skills.git`.
2. Jeder Ordner unter `skills/` mit einer `SKILL.md` ist ein Skill. Der Ordnername ist der Name des Skills.
3. Kopier die gewünschten Skill-Ordner vollständig, mit `references/`, an den Ort, den dein Werkzeug liest:
   - Claude Code für alle Projekte: `~/.claude/skills/<skill>/`
   - Claude Code nur für dieses Projekt: `.claude/skills/<skill>/` im Projektordner
   - Codex: `~/.agents/skills/<skill>/` (laut Doku von OpenAI, Stand Oktober 2026)
   - andere Agenten: den Ordner, in dem sie Skills im Format SKILL.md suchen. Weißt du ihn nicht, frag nach.
4. Beim Aktualisieren ersetzt du nur die Ordner der Founder Skills. Andere Skills und eigene Dateien der Person fasst du nicht an. Gibt es in einem Skill-Ordner Dateien, die nicht aus diesem Repository stammen, frag vorher.
5. Lösch den temporären Ordner. Sag der Person, welche Skills mit welcher Version (`metadata.version` in der SKILL.md) installiert sind und dass ein Neustart nötig sein kann.

Führ dabei keine Skripte aus diesem Repository aus. Zum Installieren reicht Kopieren.

## Rückmeldung

Am Ende jedes Skills fragt Claude nach 1 bis 5 Sternen und fasst neutral zusammen, wo der Ablauf nicht zu dir gepasst hat. Daraus entsteht ein vorbelegter Link auf das Formular [„Rückmeldung zu einem Skill“](https://github.com/Grunder-Mentor-de/founder-skills/issues/new?template=rueckmeldung.yml). Du prüfst den Text und legst das Issue selbst an. Dafür brauchst du ein kostenloses GitHub-Konto. Ohne Konto geht derselbe Text per Mail an kontakt@gruender-mentor.de.

Änderungen und neue Skills schlägst du über die Vorlagen unter „Issues“ vor. Mehr dazu in [CONTRIBUTING.md](CONTRIBUTING.md).

Bitte keine Kundennamen, Zahlen oder Vertragsdetails aus deinem Startup in Issues. Alles hier ist öffentlich.

## Nutzung

Die Founder Skills sind kostenlos. Was du damit erarbeitest, gehört dir. Die Bedingungen stehen in [LICENSE.md](LICENSE.md). Die Skills ersetzen keine Rechts-, Steuer- oder Finanzberatung.
