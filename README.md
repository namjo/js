#### Stundenplanung

1. Homepage `sites.google.com/view/lhginf`
1. Setup
  * USB-Stick, um Node Projekt dort zu speichern, am besten in einen Ordner namens `nodeprojekt`. Verknüpfung erstellen in `C:\Schüler\nodeprojekt`
  * Dateiendungen anzeigen lassen: *Explorer --> Ansicht --> Dateinamenerweiterungen* Häckchen setzen

1. WarmUp-Frage: *Was für primitive Datentypen in JS gibt es?*
1. Aufgaben 1 & 2 besprechen

1. Hotspot starten `php -S addr:port`, Server hochfahren und Zugang via IP Adresse gewähren. Das brauchen sie für Aufgabe 3:
1. Aufgabe 3 interaktiv. Schüler führen es am Rechner aus, ich zeige es an meinem eigenen Rechner.
1. Aufgabe 4 kann dann wieder jeder alleine machen.

1. **Variablen**: Zettel austeilen.
   * Jeder liest bis *Realisierung von Variablen im Speicher*
   * Einer liest Arbeitsauftrag laut vor. Dann Fragen zum Arbeitsauftrag klären. Dann mit **Bleistift** ran an die Arbeit!
   * Sicherung:
     * Gemeinsam vergleichen
     * Was ist das wichtigste, was ich euch hier vermitteln will?
1. **Rückseite** bearbeiten
   * Jeder liest *Bemerkungen zum Gleichheitszeichen* selbst.
   * Aufgabe 1 jeder versucht es selbst. Gemeinsam besprechen mit **Beamer-to-Whiteboard**
   * Aufgabe 2 kann jeder selbst versuchen. Ist ja nicht viel Tipparbeit...

1. Falls Zeit übrig: if-else.js downloaden und Aufgaben dort bearbeiten

1. Falls noch mehr Zeit übrig:
  * Warum nicht: Rede doch über IP und Netzwerke ...
  **Zeichung** anfertigen!!!
  * Windows: `ipconfig`
  * UNIX: `ifconfig`
  * `ping`: Command-Line-Tool, um anderen Rechner im Netzwerk anzustupsen.
  * `netstat`: Zeigt alle aktuellen Verbindungen zu anderen Rechnern im Netzwerk
  * Windows: `tracert` UNIX: `traceroute`

---

JavaScript Flipped Classroom

1. Download und Installation
2. Variablen: Zeichen, Zeichenketten, Zahlen, Wahrheitswerte
  1. globale und lokale Variablen
3. Node module
4. Kontrollstrukturen
  1. If-else
  1. Wahrheitswerte
2. Schleifen
  1. for
  2. while
5. Funktionen
  1. Eingabeparameter: Variablen oder Funktionen
  2.
6. Objekte -- nein, eher lassen ...

Liste Möglicher Programme


# Beginners Guide to JavaScript with NodeJS

### primitive datatypes: (char) string, number, boolean

#### strings

1. concatenate strings vs add numbers
1. unburden general programming concepts for later purposes, like
  1. arrays: `s[pos]`
  1. dot-notation
     * on attributes
       1. `s.length`
     * and methods
       1. `s.codePointAt(params)`
       1. `s.slice(params)`

#### numbers

1. Math object and its important functions
   * Math.random
   * Math.pow
   * ...

### control flow

*Syntax*: **code blocks** and **conditions**.

#### branches

1. `if`
1. `if-else`

#### loops

1. `while`
1. `do-while`
1. `for`

### functions and parameters

*Syntax* **code blocks** and **parameter list**.


### practical hints:

#### Node modules: built-in vs npm install

1. what is `npm` at all?
1. `npm init` to initialize node project
1. Don't reinvent the wheel, instead use **node modules**
   * `require('fs')`
   * `require('sleep')`
     warning: `sleep` module runs only as of `8.x.x`.
     In `6.x.x` use `system-sleep`. Unfortulatey, `system-sleep` won't provide microseconds ...

1. atom editor
   * **comments** in JavaScript:
     * single line `//`
     * multiline `/* ... */`
   * linting with jshint
