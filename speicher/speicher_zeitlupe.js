/*
  Das Module system-sleep bietet u. a. die Möglichkeit, die Programmausführung um eine gewisse Anzahl Millisekunden einzuschläfern. Genauer würde

    var schlaf = require('system-sleep');
    schlaf(n);

  das Programm um n Millisekunden verzögern. 1,000 Millisekunden = 1 Sekunde

  Wähle n so, dass in zehn Sekunden nicht mehr als 1 MB RAM beansprucht wird. Prüfe diesen Sachverhalt mit einem Task-Manager.

  Bemerkung:

  In Node 8 kann man das bessere Module sleep verwenden. Hier kann man sogar auf Mikrosekunden heruntergehen. 1,000,000 Mikrosekunden = 1 Sekunde

    var schlaf = require('sleep');
    schlaf.sleep(n);        //  Warte n Sekunden
    schlaf.msleep(n);       //  Warte n Millisekunden
    schlaf.usleep(n);       //  Warte n Mikrosekunden

  Beachte hier die Punkt-Notation.
*/

var schlaf = require('system-sleep'); // node 6
// var schlaf = require('sleep');     // node 8

var text = '';
while (text.length > -1 ) {
  text = text + 'a';
  schlaf(1);        // node 6. Unterbreche Programmausführung für ... Millisekunden.
  // schlaf.usleep(1); // node 8. Unterbreche Programmausführung für ... Mikrosekunden.
}
