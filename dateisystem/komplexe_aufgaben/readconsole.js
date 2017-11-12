/* jshint esversion: 6 */

var rdl = require('readline');

var rl = rdl.createInterface({
  input: process.stdin,
  output: process.stdout
});

var string;

function aufgabe0(eingabe) {
  string = eingabe;
}
function aufgabe1(eingabe) {
  console.log(string.charAt(eingabe));
}
function aufgabe2(eingabe) {
  console.log(string.charAt(eingabe));
}

readline(0).then((eingabe) => {
  return readline(1); // apply next then on this returned promise
}).then((eingabe) => {
  rl.close();
});

function readline(aufgabe) {
  var p;
  switch (aufgabe) {
    case 0:
      p = new Promise(function(resolve, reject) {
        rl.question('Gib eine Zeichenkette ein ', (eingabe) => {
          aufgabe0(eingabe);
          resolve();
        });
      });
      break;
    case 1:
      p = new Promise(function(resolve, reject) {
        rl.question('Gib den Index ein, dessen ASCII du von der Zeichenkette haben willst ', (eingabe) => {
          aufgabe1(eingabe);
          resolve();
        });
      });
      break;
    default:
    console.log('Default log');
  }
  return p;
}
