// Die folgenden Zeilen lesen den Textinhalt der Datei foo.txt und geben diesen Textinhalt als String-Zeichenkette an die Variable textinhalt. Wie das genau funktioniert, musst man jetzt nicht verstehen. Hauptsache ist, DASS es funktioniert.

var dateisystem = require('fs');
var textinhalt = dateisystem.readFileSync('foo.txt').toString();

// schreiben in das Dateisystem

var stelle = 0;
while (stelle < textinhalt.length) {
  var ascii_code = textinhalt[stelle];
  stelle = stelle + 1;
}
