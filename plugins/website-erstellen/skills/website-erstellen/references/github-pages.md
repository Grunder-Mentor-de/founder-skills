# GitHub Pages und eigene Domain

Lies diese Datei in Schritt 6 und 7. Alle Angaben haben den Stand 10/2026 (abgerufen am 15.10.2026). Menüs und Werte können sich ändern. Kannst du im Netz nachsehen, prüf Klickpfad und Werte auf der genannten Seite, bevor du sie weitergibst. Gib jeden Klickpfad in einer eigenen Nachricht und warte, bis die Person ihn erledigt hat.

## Inhalt
1. Was GitHub Pages erlaubt
2. Konto und Repository
3. Dateien hochladen
4. Pages einschalten
5. Eigene Domain
6. HTTPS
7. Typische Fehler
8. Kosten
9. Quellen

## 1. Was GitHub Pages erlaubt

- GitHub beschreibt Pages als Hosting für statische Seiten, vor allem „as a showcase for personal and organizational projects“.
- Nicht erlaubt ist Pages laut Nutzungsbedingungen als kostenloses Hosting, um ein Online-Geschäft, einen Shop oder eine Seite zu betreiben, die vor allem Transaktionen oder kommerzielles SaaS dient. Spenden- und Crowdfunding-Links sind erlaubt.
- Ob eine reine Firmenseite ohne Shop, Zahlung und Login erlaubt ist, steht nirgends ausdrücklich. Sag der Person das offen: Eine Visitenkarte für ein Vorhaben ist nach dem Wortlaut kein Shop und keine Transaktionsseite, aber eine Grauzone. GitHub kann Seiten jederzeit sperren. Wer sicher gehen will, fragt den Support von GitHub oder wählt einen anderen statischen Hoster.
- Keine Passwörter, Kreditkartendaten oder andere sensible Eingaben über die Seite.

## 2. Konto und Repository

- Ein kostenloses GitHub-Konto reicht. Das Konto legt die Person selbst an, du gibst keine Zugangsdaten ein.
- Mit dem kostenlosen Konto muss das Repository öffentlich sein. Jeder kann die Dateien der Seite lesen. Private Repositories für Pages gibt es ab einem bezahlten Plan.
- Zwei Arten von Seiten:
  - **Seite des Kontos:** Repository mit dem Namen `<name>.github.io` (Kontoname, klein geschrieben). Adresse `https://<name>.github.io`. Empfehlung für die Firmenseite.
  - **Seite eines Projekts:** jedes andere Repository. Adresse `https://<name>.github.io/<repository>`.
- Für ein Team: eine Organisation auf GitHub anlegen, damit die Seite nicht am privaten Konto einer Person hängt.

## 3. Dateien hochladen

Ohne Git, im Browser:
1. Im Repository „Add file“ > „Upload files“.
2. Den Inhalt des Ordners `website/` hineinziehen, nicht den Ordner selbst. `index.html` muss oben im Repository liegen.
3. Unten „Commit changes“.

Grenzen beim Hochladen im Browser: höchstens 25 MiB pro Datei und 100 Dateien auf einmal.

Mit Git (Claude Code, Codex): nur nach ausdrücklichem Ja der Person pushen.

Spätere Änderungen: die geänderte Datei auf dieselbe Weise neu hochladen, sie ersetzt die alte.

## 4. Pages einschalten

1. Im Repository „Settings“ > „Pages“.
2. Unter „Build and deployment“ als Quelle „Deploy from a branch“, Branch `main`, Ordner `/ (root)`, „Save“.
3. Nach einigen Minuten erscheint oben die Adresse der Seite. Die Person öffnet sie auf dem Handy und am Rechner.

## 5. Eigene Domain

Reihenfolge: erst in GitHub eintragen, dann DNS beim Domain-Anbieter setzen.

**Domain bestätigen (Schutz gegen Übernahme):** Profilbild > „Settings“ > „Pages“ > „Add a domain“. GitHub zeigt einen TXT-Eintrag mit dem Namen `_github-pages-challenge-<name>`. Die Person legt ihn beim Domain-Anbieter an und klickt bei GitHub auf „Verify“. Der TXT-Eintrag bleibt dauerhaft stehen.

**Domain eintragen:** Im Repository „Settings“ > „Pages“ > „Custom domain“, Domain eintragen, „Save“. GitHub legt dabei eine Datei `CNAME` im Repository an. Nicht löschen.

**DNS beim Domain-Anbieter:**

| Typ | Name | Wert |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA (optional) | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `<name>.github.io` (ohne Repository-Namen) |

- Vorhandene Einträge des Anbieters für `@` und `www` (Parkseite, Weiterleitung) vorher entfernen. Zusätzliche A-Einträge stören.
- MX- und TXT-Einträge für E-Mail nicht anfassen. Sonst kommen keine Mails mehr an, auch nicht die Testnachricht aus Schritt 7.
- Keine Platzhalter-Einträge wie `*.domain.de`. Laut GitHub ermöglichen sie die Übernahme der Domain durch Fremde.
- Sind Domain ohne www und `www` beide eingerichtet, leitet GitHub zwischen beiden um.
- Bis die Einträge überall greifen, kann es bis zu 24 Stunden dauern. Speicher den Stand und mach in der nächsten Sitzung weiter.

## 6. HTTPS

- In „Settings“ > „Pages“ das Häkchen „Enforce HTTPS“ setzen. Laut GitHub kann es bis zu 24 Stunden dauern, bis die Option verfügbar ist.
- Kommt das Zertifikat nicht: Domain in „Custom domain“ entfernen, neu eintragen, „Save“.
- Alle Verweise in den Dateien relativ oder mit `https://`, sonst meldet der Browser gemischte Inhalte.

## 7. Typische Fehler

| Zeichen | Ursache |
|---|---|
| Seite zeigt 404 von GitHub | `index.html` liegt in einem Unterordner, oder Pages ist nicht eingeschaltet |
| Domain zeigt die alte Parkseite | alte A-Einträge des Anbieters stehen noch da, oder DNS greift noch nicht |
| Nur mit www erreichbar, ohne www Zertifikatsfehler | A-Einträge für `@` fehlen oder sind falsch |
| „Enforce HTTPS“ grau | DNS greift noch nicht, oder überzählige Einträge |
| Gestaltung fehlt | `style.css` falsch verlinkt oder Groß- und Kleinschreibung im Dateinamen |

## 8. Kosten

- GitHub Pages mit kostenlosem Konto: 0 €.
- Domain mit Endung .de: bei drei großen deutschen Anbietern am 15.10.2026 im ersten Jahr wenige Cent bis 5 €, danach etwa 12 bis 19 € im Jahr. Auf den Preis ab dem zweiten Jahr achten, nicht nur auf das Angebot im ersten. Preise ändern sich, die Person prüft selbst.
- Sag offen: „kostenlos“ gilt für das Hosting, nicht für die Domain.

## 9. Quellen

- Nutzungsbedingungen, Abschnitt „Pages“ (Fassung 27.08.2026): docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features
- Limits: docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Seite anlegen, öffentlich mit kostenlosem Konto: docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Hochladen im Browser: docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Eigene Domain und DNS-Werte: docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Domain bestätigen: docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- HTTPS: docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
