/*
  Verzweigungen werden in der Programmierung benutzt, um gewisse Anweisungen nur dann auszuführen, falls [engl. if] eine bestimmte Bedingung erfüllt ist.

  In JavaScript schreibt man eine Verzweigung so:

  if ( Bedingung erfüllt ) {

    anweisung_1;
    ...
    anweisung_n;

  }

  Optional kann man dem if-Block einen else-Block folgen lassen, um dem Programm mitzuteilen, was passieren soll, wenn man die Bedingung nicht erfüllt ist.

  if ( Bedingung erfüllt ) {

    anweisung_1;
    ...
    anweisung_n;

  } else {

    alternative_anweisung_1;
    ...
    alternative_anweisung_k;

  }

*/

/*
  Aufgabe:
  Welche Ausgaben liefern folgende Codesnippets?

  Hinweise:

    ==  testet auf Gleichheit
    !=  testet auf Ungleichheit
    <   testet, ob links echt kleiner ist als rechts
    <=  testet, ob links kleiner oder gleich ist wie rechts
    >   ...
    >=  ...
*/

// a)
if ( 2 == 3 ) {
  console.log('gleich');
} else {
  console.log('ungleich');
}

// b)
var a = 12;
if (a > 9) {
  console.log('a ist echt größer als 9');
} else {
  console.log('a ist nicht echt größer als 9, d.h. a ist echt kleiner oder genau gleich 9.');
}

// c)
var text = 'foo';
if ( 'foo' == text ) {
  console.log('Das war ein f mit zwei o\'s');
  console.log('Diese Zeichenkette kommt mehrmals vor');
} else {
  console.log('Das war etwas anderes');
  console.log('Diese Zeichenkette kommt mehrmals vor');
}

// d) Ändere die Codesnippets jeweils an einer einzigen Stelle, sodass der jeweils andere Fall ausgeführt wird.
// e) Extrafrage: Überlege dir, was man tun könnte, um den Quelltext in c) kürzer zu schreiben.
