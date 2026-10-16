# Grafiken: Ikigai und Ressourcenrad

Der Reality Check zeigt zwei Grafiken mit den Antworten der Person: das Ikigai am Ende von Schritt 2 und das Ressourcenrad in Schritt 3. Lies diese Datei, bevor du die erste Grafik baust.

## Inhalt
1. Wann welche Grafik
2. Farben
3. So füllst du die Vorlagen
4. Je nach Werkzeug zeigen
5. Vorlage Ikigai
6. Vorlage Ressourcenrad

## 1. Wann welche Grafik

| Grafik | Wann | Was drinsteht |
|---|---|---|
| Ikigai | Ende Schritt 2, nach den vier Fragen | je Kreis bis zu drei Stichworte aus den Antworten, in der Mitte die Schnittmenge in höchstens drei kurzen Zeilen |
| Ressourcenrad, erste Fassung | Schritt 3, sobald alle sechs Felder Stichworte haben | sechs Felder mit je bis zu drei Stichworten, rechts „Rohdiamant: Kommt nach deiner Auswahl“ |
| Ressourcenrad, fertig | Schritt 3, nachdem die Person eine Idee gewählt hat | die gewählten Begriffe mit Rahmen, rechts die gewählte Idee mit Titel, Angebot und Kunden |

Die Stichworte sind die Worte der Person, gekürzt, nicht umgedeutet. Was du ergänzt hast, steht nicht in der Grafik, sondern im Gespräch als Vorschlag.

## 2. Farben

1. **Farben der Person:** Hat die Person im Gespräch eigene Farben für ihr Vorhaben genannt, oder liegt im Ordner eine Datei mit ihrem Branding (etwa aus einem früheren Founder Skill), nimm diese: Hauptfarbe für `FARBE_GUT` und `FARBE_1`, zweite Farbe für `FARBE_LIEBE` und `FARBE_2`, dunkle Schriftfarbe für `TEXT` und `FARBE_GELD`. `FARBE_WELT` mischst du aus Haupt- und zweiter Farbe.
2. **Sonst Gründer-Mentor.de:**

| Platzhalter | Farbe |
|---|---|
| `FARBE_LIEBE`, `FARBE_2` | Grün `#10D199` |
| `FARBE_GUT`, `FARBE_1` | Blau `#2961FF` |
| `FARBE_WELT` | Blaugrün `#1AA3D6` |
| `FARBE_GELD`, `TEXT` | Anthrazit `#09183B` |
| `HINTERGRUND` | Hellblau `#F0F3FF` |
| `SCHRIFT_KREISE` | Weiß `#FFFFFF` |

Frag nicht eigens nach Farben. Sag beim ersten Bild in einem Satz: „Wenn du für dein Vorhaben schon Farben hast, nenn sie, dann baue ich die Grafik in deinen Farben neu.“ Sind die Farben der Person so hell, dass weiße Schrift schlecht lesbar wäre (etwa Gelb oder Pastell), setz `SCHRIFT_KREISE` auf die dunkle Schriftfarbe.

## 3. So füllst du die Vorlagen

- Ersetze jeden Platzhalter `{{…}}`. Was leer bleibt, ersetzt du durch nichts, die Zeile bleibt dann leer.
- `TITEL`: „Ikigai von [Vorname]“ und „Ressourcenrad von [Vorname]“, wenn die Person ihren Namen genannt hat, sonst „Dein Ikigai“ und „Dein Ressourcenrad“. Bei Teams der Teamname oder der Arbeitstitel. Frag nicht eigens nach dem Namen.
- **Längen**, damit nichts übersteht: Stichworte in Kreisen und Feldern höchstens etwa 20 Zeichen, die Mitte des Ikigai höchstens 18 Zeichen je Zeile, Zeilen im Rohdiamant höchstens 26 Zeichen. Kürze lieber, als die Schrift zu verkleinern.
- Sonderzeichen: `&` als `&amp;`, `<` als `&lt;`, `>` als `&gt;`.
- **Rahmen um gewählte Begriffe** (`RAHMEN`): ein `rect` je Begriff, alle hintereinander. Breite gleich Zeichenzahl mal 8,5 plus 20, `x` gleich x-Wert des Textes minus halbe Breite, `y` gleich y-Wert des Textes minus 20, Höhe 28, damit zwei Rahmen untereinander nicht aneinanderstoßen. Muster:
  `<rect x="474" y="234" width="162" height="28" rx="8" fill="none" stroke="#10D199" stroke-width="3"/>`
  In der ersten Fassung bleibt `RAHMEN` leer.
- Ändere nichts an Koordinaten, Kreisen und Linien. Nur Texte, Farben und Rahmen.

## 4. Je nach Werkzeug zeigen

| Werkzeug | So zeigst du die Grafik |
|---|---|
| Mit Zugriff auf Dateien (Claude Code, Codex) | Schreib die Datei nach `founder-skills/reality-check-ikigai.svg` und `founder-skills/reality-check-ressourcenrad.svg`, im selben Ordner wie den Stand. Nenn beim ersten Mal den Pfad und sag, dass sich die Datei im Browser öffnen lässt. Die fertige Fassung des Rads überschreibt die erste. |
| claude.ai oder Claude App mit Artefakten oder Code-Ausführung | Zeig das SVG als Bild im Chat (Artefakt) und biete die Datei zum Herunterladen an. |
| Chat ohne Bilder und ohne Dateien | Zeig denselben Inhalt als kleine Tabelle (Kreis oder Feld, Stichworte) und sag in einem Satz, dass die Grafik in Claude Code oder Codex als Datei entsteht. |

Eine Grafik ersetzt keine Frage. Die Frage, die zum Schritt gehört, steht in derselben Nachricht unter der Grafik.

## 5. Vorlage Ikigai

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 860" width="800" height="860" font-family="'Noto Sans', 'Helvetica Neue', Arial, sans-serif">
  <rect width="800" height="860" fill="{{HINTERGRUND}}"/>
  <text x="400" y="44" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="26" font-weight="700" fill="{{TEXT}}">{{TITEL}}</text>
  <g opacity="0.82">
    <circle cx="400" cy="270" r="210" fill="{{FARBE_LIEBE}}"/>
    <circle cx="250" cy="420" r="210" fill="{{FARBE_GUT}}" style="mix-blend-mode:multiply"/>
    <circle cx="550" cy="420" r="210" fill="{{FARBE_WELT}}" style="mix-blend-mode:multiply"/>
    <circle cx="400" cy="570" r="210" fill="{{FARBE_GELD}}" style="mix-blend-mode:multiply"/>
  </g>
  <!-- Vier Kreise: Titel und bis zu drei Begriffe -->
  <g font-size="15" text-anchor="middle" fill="{{SCHRIFT_KREISE}}">
    <text x="400" y="118" font-size="20" font-weight="700">Was du liebst</text>
    <text x="400" y="144">{{LIEBE_1}}</text>
    <text x="400" y="164">{{LIEBE_2}}</text>
    <text x="400" y="184">{{LIEBE_3}}</text>

    <text x="138" y="392" font-size="20" font-weight="700">Worin du</text>
    <text x="138" y="416" font-size="20" font-weight="700">gut bist</text>
    <text x="138" y="442">{{GUT_1}}</text>
    <text x="138" y="462">{{GUT_2}}</text>
    <text x="138" y="482">{{GUT_3}}</text>

    <text x="662" y="392" font-size="20" font-weight="700">Was die Welt</text>
    <text x="662" y="416" font-size="20" font-weight="700">braucht</text>
    <text x="662" y="442">{{WELT_1}}</text>
    <text x="662" y="462">{{WELT_2}}</text>
    <text x="662" y="482">{{WELT_3}}</text>

    <text x="400" y="686" font-size="20" font-weight="700">Wofür jemand zahlt</text>
    <text x="400" y="712">{{GELD_1}}</text>
    <text x="400" y="732">{{GELD_2}}</text>
    <text x="400" y="752">{{GELD_3}}</text>
  </g>
  <!-- Schnittmengen als Etiketten, damit sie auf jeder Farbe lesbar bleiben -->
  <g font-size="14" text-anchor="middle" fill="{{TEXT}}">
    <rect x="232" y="282" width="116" height="30" rx="15" fill="#FFFFFF" opacity="0.92"/>
    <text x="290" y="302" font-weight="700">Leidenschaft</text>
    <rect x="452" y="282" width="116" height="30" rx="15" fill="#FFFFFF" opacity="0.92"/>
    <text x="510" y="302" font-weight="700">Mission</text>
    <rect x="232" y="528" width="116" height="30" rx="15" fill="#FFFFFF" opacity="0.92"/>
    <text x="290" y="548" font-weight="700">Beruf</text>
    <rect x="452" y="528" width="116" height="30" rx="15" fill="#FFFFFF" opacity="0.92"/>
    <text x="510" y="548" font-weight="700">Berufung</text>
  </g>
  <!-- Mitte: Ikigai und die Schnittmenge in höchstens drei kurzen Zeilen -->
  <rect x="312" y="360" width="176" height="120" rx="18" fill="#FFFFFF" opacity="0.95"/>
  <g text-anchor="middle" fill="{{TEXT}}">
    <text x="400" y="392" font-family="Fraunces, Georgia, serif" font-size="24" font-weight="700">Ikigai</text>
    <text x="400" y="418" font-size="13">{{MITTE_1}}</text>
    <text x="400" y="436" font-size="13">{{MITTE_2}}</text>
    <text x="400" y="454" font-size="13">{{MITTE_3}}</text>
  </g>
  <text x="400" y="828" text-anchor="middle" font-size="12" fill="{{TEXT}}" opacity="0.6">Reality Check · Founder Skill von gründer-mentor.de</text>
</svg>
```

## 6. Vorlage Ressourcenrad

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760" font-family="'Noto Sans', 'Helvetica Neue', Arial, sans-serif">
  <defs>
    <linearGradient id="pfeil" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="{{FARBE_1}}"/>
      <stop offset="1" stop-color="{{FARBE_2}}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="760" fill="#FFFFFF"/>
  <text x="40" y="52" font-family="Fraunces, Georgia, serif" font-size="26" font-weight="700" fill="{{TEXT}}">{{TITEL}}</text>

  <!-- Rad: Mittelpunkt (420,410), Radius 270, drei Linien teilen es in sechs Felder -->
  <circle cx="420" cy="410" r="270" fill="{{HINTERGRUND}}" stroke="#D5DCF2" stroke-width="2"/>
  <g stroke="#C9D2EE" stroke-width="2">
    <line x1="420" y1="120" x2="420" y2="700"/>
    <line x1="169" y1="265" x2="671" y2="555"/>
    <line x1="169" y1="555" x2="671" y2="265"/>
  </g>
  <circle cx="420" cy="410" r="46" fill="#FFFFFF" stroke="#D5DCF2" stroke-width="2"/>

  <!-- Feldnamen außen -->
  <g font-size="19" font-weight="700" fill="{{FARBE_1}}" text-anchor="middle">
    <text x="570" y="132">Stärken</text>
    <text x="718" y="417" text-anchor="start">Interessen</text>
    <text x="570" y="708">Erfahrung</text>
    <text x="270" y="708">Qualifikationen</text>
    <text x="138" y="417" text-anchor="end">Netzwerk</text>
    <text x="270" y="132">Besonderer Zugang</text>
  </g>

  <!-- Begriffe: bis zu drei je Feld, höchstens etwa 18 Zeichen.
       Gewählte Begriffe bekommen den Rahmen (rect) davor, Breite etwa 8,5 Pixel je Zeichen plus 20. -->
  <g font-size="15" fill="{{TEXT}}" text-anchor="middle">
    <!-- Stärken, Feldmitte (555,250) -->
    <text x="555" y="222">{{STAERKE_1}}</text>
    <text x="555" y="254">{{STAERKE_2}}</text>
    <text x="555" y="286">{{STAERKE_3}}</text>
    <!-- Interessen, Feldmitte (615,410) -->
    <text x="615" y="382">{{INTERESSE_1}}</text>
    <text x="615" y="414">{{INTERESSE_2}}</text>
    <text x="615" y="446">{{INTERESSE_3}}</text>
    <!-- Erfahrung, Feldmitte (555,570) -->
    <text x="555" y="542">{{ERFAHRUNG_1}}</text>
    <text x="555" y="574">{{ERFAHRUNG_2}}</text>
    <text x="555" y="606">{{ERFAHRUNG_3}}</text>
    <!-- Qualifikationen, Feldmitte (285,570) -->
    <text x="285" y="542">{{QUALI_1}}</text>
    <text x="285" y="574">{{QUALI_2}}</text>
    <text x="285" y="606">{{QUALI_3}}</text>
    <!-- Netzwerk, Feldmitte (225,410) -->
    <text x="225" y="382">{{NETZ_1}}</text>
    <text x="225" y="414">{{NETZ_2}}</text>
    <text x="225" y="446">{{NETZ_3}}</text>
    <!-- Besonderer Zugang, Feldmitte (285,250) -->
    <text x="285" y="222">{{ZUGANG_1}}</text>
    <text x="285" y="254">{{ZUGANG_2}}</text>
    <text x="285" y="286">{{ZUGANG_3}}</text>
  </g>
  <!-- Rahmen für gewählte Begriffe, Beispiel für den zweiten Begriff bei Stärken:
       <rect x="[x - Breite/2]" y="[y - 20]" width="[Breite]" height="28" rx="8" fill="none" stroke="{{FARBE_2}}" stroke-width="3"/> -->
  {{RAHMEN}}

  <!-- Pfeil und Rohdiamant -->
  <path d="M 832 350 L 876 410 L 832 470" fill="none" stroke="url(#pfeil)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="902" y="240" width="278" height="340" rx="24" fill="{{HINTERGRUND}}"/>
  <text x="924" y="288" font-family="Fraunces, Georgia, serif" font-size="22" font-weight="700" fill="{{FARBE_1}}">Rohdiamant</text>
  <g font-size="16" fill="{{TEXT}}">
    <text x="924" y="326" font-weight="700">{{IDEE_TITEL}}</text>
    <text x="924" y="360">{{IDEE_1}}</text>
    <text x="924" y="384">{{IDEE_2}}</text>
    <text x="924" y="408">{{IDEE_3}}</text>
    <text x="924" y="432">{{IDEE_4}}</text>
    <text x="924" y="470" font-weight="700">Für:</text>
    <text x="924" y="494">{{IDEE_KUNDEN_1}}</text>
    <text x="924" y="518">{{IDEE_KUNDEN_2}}</text>
  </g>
  <text x="600" y="738" text-anchor="middle" font-size="12" fill="{{TEXT}}" opacity="0.6">Reality Check · Founder Skill von gründer-mentor.de</text>
</svg>
```
