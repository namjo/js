// Schleifen (loops) werden in der Programmierung benutzt, um bestimmte Befehle wiederholt auszuführen, nämlich solange wie (engl. while) eine bestimmte Bedingung erfüllt ist.

while ( Bedingung erfüllt ) {
  // irgendwelche Befehle
}

/* Aufgabe 0:
  a) Welche Ausgabe wird folgender Code liefern?
  b) Wie oft wird der Codeblock in der while-Schleife ausgeführt und welchen Wert speichert die Variable zahl jeweils VOR Ausführung eines solchen Codeblocks?
*/
var zahl = 0;
console.log('Betrete gleich Schleife');
while ( zahl < 6 ) {
  console.log('Schleife betreten');
  console.log('zahl ist jetzt ' + zahl);
  zahl = zahl + 2;
}
console.log('Schleife verlassen');

/* Aufgabe 1:
  Ändere den obigen Code so, dass folgende Ausgabe an der Konsole erscheint:

    Betrete gleich Schleife
    zahl ist jetzt 0
    zahl ist jetzt 1
    zahl ist jetzt 2
    zahl ist jetzt 3
    zahl ist jetzt 4
    zahl ist jetzt 5
    Schleife verlassen

  Aufgabe 2:
  Ändere den obigen Code so, dass folgende Ausgabe an der Konsole erscheint:

    Betrete gleich Schleife
    zahl ist jetzt 0
    zahl ist jetzt 1
    zahl ist jetzt 4
    zahl ist jetzt 9
    zahl ist jetzt 16
    zahl ist jetzt 25
    Schleife verlassen
*/

/* Aufgabe 3:
  Wie sieht str nach jedem Schleifendurchlauf aus?
  Bemerkungen:
  a != b testet, ob a und b ungleich sind.
  a == b würde testen, ob a und b gleich sind.
*/

var str = 'a';
while ( str != 'aaaa' ) {
  str = str + 'a';
  console.log(str);
}
console.log('Progamm ist endlich raus aus der Schleife');
console.log('str ist jetzt ' + str);

/* Aufgabe 4:
  Vor allem zwei Dinge sind problematisch an folgendem Code. Erkläre!
  Hinweis: Probiere den Code aus und schaue nach, was der Task-Manager über das Programm sagt.
*/

var bar = 'Startstring';
while ( bar.length > 0 ) {
  bar = bar + 'a';
}

/* Aufgabe 5:
  Bestimme die Summe der ersten 1000 natürlichen Zahlen:
  1 + 2 + 3 + ... + 1000

  Aufgabe 6:
  Bestimme die Summe der ersten 1000 Quadratzahlen:
  1*1 + 2*2 + 3*3 + ... + 1000*1000
*/

/* Aufgage 7:
  Schreibe ein Programm, das jedes Zeichen eines Strings durchläuft und dessen ASCII-Code als Dezimalzahl ausgibt.

  Beispiel: Wenn var text = 'foo' wäre, dann sollte folgende Ausgabe erscheinen (siehe ASCII-Tabelle):
    102
    111
    111

  Hinweis: Erinnere dich bitte an die Objektmethode codePointAt, z. B. 'foo'.codePointAt(param) bzw. text.codePointAt(param)
*/

/* Aufgabe 8:
  Schreibe ein Verschlüsselungsprogramm, das jedes Zeichen eines Strings um +1 im ASCII-Code verschiebt. Z. B. hat der String 'foo' die ASCII-Darstellung 102, 111, 111. Verschiebt man jedes Zeichen im ASCII-Code um +1, so erhält man 103, 112, 112, also 'gpp'. Der verschobene String soll dann über die Konsole ausgegeben werden.

  Hinweis: Die Methode String.fromCodePoint( 102 ) würde z. B. 'f' zurückgeben.
*/
