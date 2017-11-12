/* jshint esversion: 6 */

const rdl = require('readline');

var rl = rdl.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Gib Klartext ein: \n', (eingabe) => {
  var geheimtext = encrypt(eingabe);
  console.log(geheimtext);
  rl.close();
});

/*
  Das Programm encrypt bekommt einen String klartext als Parameter und soll jedes einzelne Zeichen von klartext 
 */
function encrypt(klartext) {
  var i = 0;
  var shiftedText = '';
  while( i < klartext.length ) {
    var c = klartext.codePointAt(i);
    if ( 65 <= c && c <= 122 ) {
      var shiftedChar = String.fromCharCode(c + 1);
      if ( c == 122 ) {
        shiftedChar = String.fromCharCode(65);
      }
      shiftedText = shiftedText + shiftedChar;
    } else {
      shiftedText = shiftedText + klartext.charAt(i);
    }
    i++;
  }
  console.log(shiftedText);
}
