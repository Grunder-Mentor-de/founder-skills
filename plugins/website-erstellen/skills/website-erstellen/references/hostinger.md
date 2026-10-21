# Hostinger für Advanced-Seiten

Lies diese Datei in Schritt 1, wenn die Person einen der Gründe unten nennt, und in Schritt 6 und 7, wenn sie Hostinger gewählt hat. Stand 10/2026 (abgerufen am 15.10.2026). Preise, Menüs und Werte ändern sich. Kannst du im Netz nachsehen, prüf sie auf der genannten Seite, bevor du sie weitergibst. Ein Hosting-Vertrag kostet Geld: Die Person schließt ihn selbst ab, du gibst keine Zahlungs- oder Zugangsdaten ein.

## 1. Wann Hostinger statt GitHub Pages

Standard ist GitHub Pages: kostenlos und ohne Wartung. Hostinger ist der Weg für Advanced-Seiten, wenn mindestens einer dieser Gründe zutrifft:
- Ein Kontaktformular soll ohne fremden Formulardienst laufen. Hostinger kann PHP ausführen, GitHub Pages nicht.
- E-Mail-Postfächer mit der eigenen Domain sollen beim selben Anbieter liegen.
- Der Quelltext der Seite soll nicht öffentlich sein.
- Das Geschäftsmodell liegt nahe am Verkauf, und die Grauzone in den Nutzungsbedingungen von GitHub Pages ist der Person zu unsicher.
- Mehrere Seiten oder Projekte sollen später auf einem Hosting laufen.

Beide Seiten benennen: Hostinger kostet Geld, bindet über die Laufzeit, und der niedrige Preis gilt nur bei langer Laufzeit. Dafür fallen die Einschränkungen von GitHub Pages weg.

Ein Shop mit Zahlungen bleibt auch bei Hostinger außerhalb dieses Skills.

## 2. Kosten (Stand 15.10.2026)

| Tarif | im Monat bei 48 Monaten | Gesamt 48 Monate | Verlängerung im Monat | dabei im ersten Jahr |
|---|---|---|---|---|
| Premium | 2,99 € | 143,52 € | 9,99 € | Domain, 2 Postfächer je Website |
| Unlimited | 3,99 € | 191,52 € | 16,99 € | Domain, unbegrenzt Postfächer |

SSL ist laut Hostinger in jedem Plan automatisch installiert. Quelle: hostinger.com/de/webhosting. Sag offen, dass Domain und Postfächer nur im ersten Jahr kostenlos sind.

## 3. Datenschutz

- Den Vertrag zur Auftragsverarbeitung (Data Processing Agreement) führt Hostinger als Anhang zu den Nutzungsbedingungen, Fassung vom 29.09.2026. Vertragspartei ist eine von drei Gesellschaften, darunter Hostinger International Ltd. mit Sitz auf Zypern. Für Übermittlungen in Drittländer gelten laut Text die EU-Standardvertragsklauseln. Als Unterauftragsverarbeiter nennt er unter anderem AWS, Google Cloud und Cloudflare. Quelle: hostinger.com/legal/dpa.
- Serverstandort: Hostinger schreibt, es gebe Standorte „unter anderem in Deutschland“. Ein Testportal schreibt, es gebe ein Rechenzentrum in Europa, aber keins in Deutschland. Unsicher, die Person prüft beim Einrichten, welcher Standort gewählt ist.
- In die Datenschutzerklärung gehören Hostinger als Hoster, die Server-Logs und bei einem PHP-Formular der Umgang mit den Nachrichten. Den Text erstellt die Person mit einem Generator oder lässt ihn prüfen (`references/recht.md`).

## 4. Seite hochladen

- Im Kundenbereich hPanel liegen die Dateien der Website im Ordner `public_html`. Hochladen geht über den Dateimanager im Browser. Den genauen Klickpfad prüfst du vor der Anleitung auf den Hilfeseiten von Hostinger (ungeprüft).
- Hat die Person in Claude Code ein Hosting-Plugin oder einen Hosting-MCP von Hostinger eingerichtet, kannst du darüber hochladen, nur nach ihrem ausdrücklichen Ja.
- Kontaktformular mit PHP: ein schlankes Skript, das die Nachricht an die eigene Adresse schickt, mit Schutz gegen Spam (verstecktes Feld) und einer Bestätigungsseite. Zugangsdaten für den Mailversand gehören nie in die Dateien im Repository oder im Projektordner, sondern nur auf den Server.

## 5. Domain verbinden

Zwei Wege, laut Hostinger:
- **Nameserver auf Hostinger umstellen** (von Hostinger empfohlen): beim Domain-Anbieter die Nameserver durch die ersetzen, die hPanel für diese Domain anzeigt. Die DNS-Einträge legt Hostinger dann selbst an. Vorher die Domain einem Hosting-Paket hinzufügen.
- **Nameserver behalten, A-Record setzen:** beim Domain-Anbieter einen A-Record für `@` und für `www` auf die IP-Adresse des Hostings aus hPanel. Nur sinnvoll, wenn die IP fest ist.
- Bis die Änderung überall greift, kann es bis zu 24 Stunden dauern. Speicher den Stand.
- Liegt die E-Mail bei einem anderen Anbieter, verschiebt ein Wechsel der Nameserver auch die MX-Einträge. Dann vorher die Einträge für E-Mail notieren und bei Hostinger übernehmen, oder den Weg mit A-Record nehmen.

Quelle: hostinger.com/tutorials/how-to-point-domain-to-hostinger.

## 6. Prüfen

Die Prüfliste Livegang aus `references/bauen.md` gilt unverändert. Dazu: HTTPS ist aktiv, und eine Testnachricht über das PHP-Formular ist angekommen.
