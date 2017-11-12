/*
  Im Code s. u. gibt es eine Verzweigung (if-else) und in beiden Fällen wird Code durch eine Schleife wiederholt ausgeführt.

  (0) Wann wird der Code im if-Block ausgeführt?
  (1) Ändere den Quellcode an einer einzigen Stelle, sodass der Code im else-Block ausgeführt wird.
  (2) Wie lange wird das Skript ausgeführt werden?
  (3) Welcher der beiden Fälle ist hinsichtlich der RAM-Nutzung problematisch und warum?
  (4) Prüfe deine Vermutung in (3). Die folgende Anleitung setzt voraus, dass dieses Skript den Namen

    speicher.js

  hat. Teste sowohl den if-Block als auch den else-Block mit Node. Rufe dazu node von der Windows-Konsole (Achtung: nicht die Node-Konsole. Falls du in der Node-Konsole bist, verlasse sie mit .exit oder öffne eine neue Windows-Konsole!) mit diesem Skript als Argument auf:

    node speicher.js

  Achtung: Falls du dich in der Windows-Konsole nicht im gleichen Verzeichnis befindest, wie diese Skriptdatei, so wird der obige Windows-Konsolenaufruf eine Fehlermeldung erzeugen. Gib dann den vollständigen(!) Dateipfad dieses Skripts an:

    node C:\Users\Schüler\<je nachdem, wo dieses Skript abgespeichert hast>\speicher.js

  Öffne nun einen Task-Manager und suche den Prozess mit dem Namen

    Node: Server-side JavaScript

  Prüfe deine Vermutungen.
  (5) Wie stark wird die Festplatte durch dieses Skript beansprucht?
  (6) Jeder halbwegs gute Programmierer wird sagen, dass es kein guter Programmierstil ist, die Bedinung in der while-Schleife durch

    1 < 2

  zu realisieren. Bitte verbessern!
*/

var modus = 'dontdumpram';
var text = '';

if ( modus == 'dontdumpram' ) {

  console.log('Code im if-Block wird ausgeführt.');
  while ( 1 < 2 ) {
    text = 'a';
  }

} else {

  console.log('Code im else-Block wird ausgeführt.');
  while ( 1 < 2 ) {
    text = text + 'a';
  }

}
