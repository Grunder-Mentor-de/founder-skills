# Kostenlose Founder Skills von Gründer-Mentor.de

Founder Skills sind Anleitungen für Claude und andere KI-Assistenten, die das Format SKILL.md lesen. Claude stellt dir Frage für Frage die richtigen Fragen und arbeitet mit dir an deinem eigenen Vorhaben. Am Ende hast du ein Ergebnis, mit dem du weiterarbeiten kannst. Die Skills baut Michael Detke aus seinen Erfahrungen als Gründer.

Dieses Repository enthält die kostenlosen Founder Skills. Es ist ein Plugin-Marketplace: Du installierst die Skills direkt von hier, ohne etwas herunterzuladen.

## Die Skills

Jeder Skill hat eine eigene Beschreibung: was er macht, wie du ihn installierst und startest, was du brauchst und wie du weitermachst.

<!-- SKILLS:START -->
Noch keine Skills veröffentlicht.
<!-- SKILLS:END -->

Jeder Skill gehört zu einem der sechs Bereiche, nach denen auch gründer-mentor.de gegliedert ist: Idee und Start, Kunden und Vertrieb, Finanzierung, Team und Führung, Du als Gründer, Ende und Neustart.

## Alle Skills installieren

**Claude im Browser, in der Claude App oder in Cowork** (Pro, Max, Team oder Enterprise):

1. Öffne „Customize“ und dort den Reiter „Plugins“.
2. Wähl „Add“, dann „Add marketplace“ und „Add from a repository“. Füg diese Adresse ein:

   ```text
   Grunder-Mentor-de/founder-skills
   ```

3. Installier aus dem Marketplace die Skills, die du willst. Jeder Skill ist ein eigenes Plugin.

Die Menünamen stammen aus der Hilfe von Anthropic (Stand Oktober 2026) und können sich ändern.

**Claude Code** im Terminal, zuerst den Marketplace:

```bash
claude plugin marketplace add Grunder-Mentor-de/founder-skills
```

Dann jeden Skill, den du willst, zum Beispiel:

```bash
claude plugin install reality-check@founder-skills
```

Oder als Satz an deinen Agenten in Claude Code oder Codex:

```text
Installiere alle Founder Skills aus dem Plugin-Marketplace Grunder-Mentor-de/founder-skills.
```

**Codex und ChatGPT** (laut Doku von OpenAI, Stand Oktober 2026, von uns noch nicht getestet):

```bash
codex plugin marketplace add Grunder-Mentor-de/founder-skills
```

Danach installierst du die Plugins in der ChatGPT-App für den Desktop (Codex oder Work-Modus).

**Ohne Installation**, auch mit einem kostenlosen Konto in Claude oder ChatGPT: In der Beschreibung jedes Skills steht ein Satz zum Kopieren, mit dem Claude oder ChatGPT die Anleitung direkt von hier liest. Dieser Weg ist noch nicht getestet.

## Starten, weitermachen, aktualisieren

Starten in Claude oder ChatGPT, mit dem Namen des Skills:

```text
Lass uns mit dem Founder Skill Reality Check anfangen.
```

Jeder Skill hält deinen Stand fest. In Claude Code, Cowork und Codex als Datei im Ordner `founder-skills/`, im Chat als Block zum Kopieren, wenn du pausierst. Weiter geht es so:

```text
Lass uns mit dem Founder Skill Reality Check weitermachen.
```

Neue Fassungen holst du in Claude Code mit:

```bash
claude plugin marketplace update founder-skills
```

In Codex:

```bash
codex plugin marketplace upgrade founder-skills
```

## Anleitung für KI-Agenten

Wenn du als Agent gebeten wirst, Founder Skills aus diesem Repository zu installieren oder zu aktualisieren:

1. Nimm den Plugin-Marketplace, wenn dein Werkzeug ihn kennt. Claude Code: `claude plugin marketplace add Grunder-Mentor-de/founder-skills`, dann `claude plugin install <skill>@founder-skills` für jeden gewünschten Skill. Codex: `codex plugin marketplace add Grunder-Mentor-de/founder-skills`.
2. Sonst kopierst du die Skills: Repository mit `git clone --depth 1 https://github.com/Grunder-Mentor-de/founder-skills.git` in einen temporären Ordner holen. Jeder Ordner `plugins/<skill>/skills/<skill>/` mit einer `SKILL.md` ist ein Skill. Kopier ihn vollständig, mit `references/`, nach `~/.claude/skills/<skill>/` (Claude Code, alle Projekte), nach `.claude/skills/<skill>/` (nur dieses Projekt) oder nach `~/.agents/skills/<skill>/` (Codex, laut Doku von OpenAI, Stand Oktober 2026).
3. Beim Aktualisieren ersetzt du nur die Ordner der Founder Skills. Andere Skills und eigene Dateien der Person fasst du nicht an.
4. Sag der Person, welche Skills mit welcher Version (`metadata.version` in der SKILL.md) installiert sind und dass ein Neustart nötig sein kann.

Führ dabei keine Skripte aus diesem Repository aus. Zum Installieren reicht der Marketplace oder Kopieren.

## Rückmeldung

Am Ende jedes Skills fragt Claude nach 1 bis 5 Sternen und fasst neutral zusammen, wo der Ablauf nicht zu dir gepasst hat. Daraus entsteht ein vorbelegter Link auf das [Formular für Rückmeldungen](https://github.com/Grunder-Mentor-de/founder-skills/issues/new?template=rueckmeldung.yml). Du prüfst den Text und legst das Issue selbst an, mit einem kostenlosen GitHub-Konto. Ohne Konto geht derselbe Text per Mail an kontakt@gruender-mentor.de.

Änderungen und neue Skills schlägst du über die Vorlagen unter „Issues“ vor. Mehr dazu in [CONTRIBUTING.md](CONTRIBUTING.md). Bitte keine Kundennamen, Zahlen oder Vertragsdetails aus deinem Startup in Issues, alles hier ist öffentlich.

## Nutzung

Die Founder Skills sind kostenlos. Was du damit erarbeitest, gehört dir. Die Bedingungen stehen in [LICENSE.md](LICENSE.md). Die Skills ersetzen keine Rechts-, Steuer- oder Finanzberatung.
