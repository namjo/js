// Die folgenden Codezeilen lesen den Textinhalt der Datei foo.txt und geben diesen Textinhalt als String-Zeichenkette an die Variable textinhalt. Wie das genau funktioniert, musst man jetzt nicht verstehen. Hauptsache ist, DASS es funktioniert.

var ds = require('fs');
var textinhalt = ds.readFileSync('foo.txt').toString();

// Aufgabe 1: Gib den Textinhalt über die Konsole aus.

// Aufgabe 2: Gib den Textinhalt der Datei bar.txt über die Konsole aus.

// Aufgabe 3: Beispiel einer Schleife
/*
var stelle = 0;
while (stelle < textinhalt.length) {
  console.log('Zeichen an ' + stelle + '-ter Stelle lautet: ' + textinhalt[stelle]);
  stelle = stelle + 1;
}
*/

// Aufgabe 4: Überlege, was der folgende Code tut:
/*
var stelle = 0;
while (stelle < textinhalt.length) {
  console.log(stelle + "-tes Zeichen lautet: " + textinhalt[stelle] + " und hat ASCII-Repräsentation " + textinhalt.charCodeAt(stelle));
  stelle = stelle + 1;
}
*/
