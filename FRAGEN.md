## Klausurvorbereitung

#### allgemeine Verständnisfragen

Es wird nicht verlangt, Romane zu schreiben. Sollte man sich für Stichpunkte entscheiden, dann müssen sie aussagekräftig statt schwammig sein. Bei Multiple-Choice-Fragen müssen genau die falschen Antworten durchgestrichen werden.

1. Nenne ein Beispiel für Hardware und ein Beispiel für Software.

1. Nenne Vor- und Nachteile zwischen Arbeitsspeicher und Festplatte. Erkläre, wieso Computer sowohl RAM als auch Festplattenspeicher besitzen.

1. Ein Computer hat folgende Hardwarekomponenten:

  * CPU mit vier Kernen (Quadcore) zu je 4,2 GHz
  * Zwei eingesetzte RAM-Riegel zu je 512 MB
  * HDD Festplatte mit 1 TB Speicherkapazität

  Weshalb wird der Rechner trotz überdurchschnittlich schnellem Prozessor sehr sehr langsam laufen? Nenne mindestens zwei Optionen, um den Rechner zu verschnellern.

1. Nenne ein Programm, das live zeigt, wie sehr der RAM gefüllt ist und wie stark die CPU belastet ist.

1. Nenne wesentliche Unterschiede zwischen einer Verknüpfung und einer Kopie. Welche Konsequenzen ergeben sich daraus im Umgang mit der Orignialdatei?

1. `high_res_image.bmp` ist ein qualitativ hochaufgelöstes und unkomprimiertes Bild. Es verbraucht 1 GB im Speicher.
  1. Max hat eine 500 GB Festplatte. Welche der folgenden Szenarien sind technisch gesehen möglich?
      * Max will 499 Kopien erstellen
      * Max will 499 Verknüpfungen erstellen
  1. Max will das Bild löchen. Wann sind die Daten mit hoher Sicherheit, mögicherweise bzw. keinesfalls ***physikalisch*** von der Festplatte entfernt?
      * Gleich nachdem Max das Bild in den Papierkorb schmeißt.
      * Gleich nachdem Max den Papierkorb entleert hat.
      * Einen Monate nachdem Max den Papierkorb entleert hat.
      * Nachdem Max die Festplatte komplett überschreibt.
      * Nachdem Max die Festplatte herausnimmt und kräftig mit einem Hammer draufschlägt.

1. Erkundige dich selbst: Was versteht man unter *IT-Forensik*? Was ist eine *forensische Kopie* einer Festplatte?

1. Was versteht man allgemein unter einer *Referenz*. Nenne außerdem zwei mögliche Beispiele für Referenzen in der Informatik.

1. Was versteht man in der Informatik unter dem Begriff des *Übersetzens*? Nenne die drei gängigen Arten von Übersetzern und grenze sie voneinander ab.

1. Handelt es sich bei NodeJS um einen Kompiler oder um einen Interpreter? Wie heißt die Programmiersprache, die NodeJS übersetzt?

1. Softwarelizenzen
  1. Wodurch ist Software unter OpenSource Lizenz bzw. proprietärer Lizenz im Wesentlichen charakterisiert?
  1. Nenne eine Möglichkeit, wie man mit OpenSource Software Geld verdienen kann.
  1. Wie bezeichnet man kostenlose proprietäre Software?
  1. Nenne jeweils ein Beispiel für OpenSource Software und proprietärer Software.

1. Nenne die beiden im Unterricht angesprochenen wichtigen Aufgaben eines Betriebssystems.

1. Was passiert beim Start eines Programms?
  1. Alle für das Programm relevanten Informationen werden von der Festplatte in den Arbeitsspeicher geladen.
  1. Das Programm wird ausgeführt.

1. Was kann man tun, wenn ein Prozess hängt und der Rechner deswegen nur noch sehr langsam reagiert?

1. Was passiert, wenn man Software installiert?
  1. Die für das Funktionieren des Programms wichtigen Dateien werden in die Festplatte geschrieben.
  1. Die für das Funktionieren des Programms wichtigen Dateien werden in den RAM geschrieben.

1. Wann wird ein Programm zu einem Prozess?
  1. Wenn man das Programm startet.
  1. Wenn man die Software, die das Programm beinhaltet auf dem Rechner installiert.

1. Max bearbeitet gerade eine Textdatei. Dazu geht er folgendermaßen vor:
  1. Er öffnet die Datei.
  1. Er schreibt die Zeichenkette "hallo" in die letzte Zeile.
  1. Er speichert ab.
  1. Er schließt die Textdatei.
An welchen Ereignissen von 1. - 4. wird von der Festplatte gelesen bzw. in die Festplatte geschrieben?

#### "Rechenaufgaben"

Außer bei JavaScript-Code haben die Farben keine besondere Bedeutung, sondern wurden vom markdown-to-pdf-Konverter aus irgendeinem komischen Grund automatisch erzeugt ...

1. Bestimme die nächsten beiden Binärzahlen nach `00100110`

1. Bestimme die Auswirkung des folgenden Assemblercodes auf den Speicher. Was muss außerdem mit dem Assemblercode geschehen, bevor er ausgeführt werden kann?

  Speicher:
  ```
  addr        584   585   586   587
  hex         02    06    00    00
  ```

  Assemblercode:
  ```assembly
  GETA  $255, 584
  LDB   $0,   $255, 0
  LDB   $1,   $255, 1
  ADD   $0,   $0,   $1
  STB   $0,   $255, 3
  ```

1. Angenommen, das komplette Dateisystem eines Windows-Rechners würde nur aus folgenden Dateien bestehen:
  ```
  C:\system\winload.efi
  C:\system\Ntoskrnl.exe
  C:\system\Services.exe
  C:\system\drivers\keyboard.dll
  C:\system\drivers\monitor.dll
  C:\util\cmd.exe
  C:\util\textedit.exe
  C:\documents\hallo.txt
  ```  
  1. Zeichne dieses Dateisystem als Baum.
  1. Benenne die absoluten Pfade aller Ordner.

1. Max programmiert folgenden JavaScript-Code

  ```javascript
  var text = "hallo";
  console.log(text);
  ```

  und speichert diesen Code in einer Datei namens `hallo.js` im Verzeichnis `C:\Users\Max\mein_erstes_Softwareprojekt\` ab.
  Max startet eine Konsole mit `cmd.exe` und will node mit dem Skript aufrufen. Also tippt er folgendes ein:

  ```
  C:\Users\Max\> node hallo.js
  ```

  Jedoch erscheint die Fehlermeldung

  ```
  module.js:471
      throw err;
      ^

  Error: Cannot find module 'C:\Users\Max\hallo.js'
      at Function.Module._resolveFilename (module.js:469:15)
      at Function.Module._load (module.js:417:25)
      at Module.runMain (module.js:604:10)
      at run (bootstrap_node.js:383:7)
      at startup (bootstrap_node.js:149:9)
      at bootstrap_node.js:496:3
  ```
  Korrigiere Max's Fehler.

1. Max will die Werte zweier Variablen tauschen. Erkläre den Fehler in seinem Code und korrgiere.

  ```javascript
  a = b;
  b = a;
  ```

1. Max programmiert aus Lust und Laune einfach mal folgendes Skript.

  ```javascript
  var text = '';
  while(true) {
      text = text + 'a';
  }
  ```

  Wie viel Speicherplatz verursacht das Skript bei Nichtausführung bzw. Ausführung?
  1. weniger als 1 Megabyte auf der Festplatte
  1. mehr als 1 Megabyte auf der Festplatte
  1. mehr als 1 Gigabyte auf der Festplatte
  1. weniger als 1 Megabyte auf dem Arbeitsspeicher
  1. mehr als 1 Megabyte auf der Arbeitsspeicher
  1. mehr als 1 Gigabyte auf der Arbeitsspeicher

1. Notiere die grundsätzliche Syntax einer vorprüfenden Schleife in JavaScript.

1. Notiere die grundsätzliche Syntax einer Verzweigung mit Alternative in JavaScript.

1. Schreibe eine Funktion, die zwei Zahlen als Parameter erhält und die größere zurückgibt.
  ```javascript
  function max(x,y) {
      // ... dein code ...
  }
  ```

1. Schreibe eine Funktion, die testet, ob ein String ein Leerzeichen enthält oder nicht. Überlege dir selbst, was diese Funktion zurückgeben muss.
  ```javascript
  function hat_space(zeichenkette) {
      // ... dein code ...
  }
  ```

1. Schreibe eine Funktion, die zählt, wie viele Leerzeichen ein String enthält. Überlege dir selbst, was diese Funktion zurückgeben muss.

  ```javascript
  function anzahl_spaces(zeichenkette) {
      // ... dein code ...
  }
  ```
