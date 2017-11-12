/*jshint esversion: 6*/
const rdl = require('readline');

// input ist der String, den du über die Konsole eingeben wirst.
function aufgabe0(input) {
  console.log('Konsoleninput 0 war \"' + input + '\"');
  // Schreibe Code, das den ersten
}
function aufgabe1(input) {
  console.log('Konsoleninput 1 war \"' + input + '\"');
}
function aufgabe2(input) {
  console.log('Konsoleninput 2 war \"' + input + '\"');
}

/* Den folgenden Code bitte ignorieren. */

var rl = rdl.createInterface({
  input: process.stdin,
  output: process.stdout
});

var p = readline(func(0));
for (var i = 1; i < 3; i++) {
  wrap_func(i, func(i));
}
p.then((input) => {
  rl.close();
});

function readline(func) {
  return new Promise(function(resolve, reject) {
    rl.question('Gib Konsoleninput: ', (input) => {
      func(input);
      resolve(input);
    });
  });
}

// Must wrap this, otherwise the i in the for loop will arrive at end too soon.
function wrap_func(i, func) {
  p = p.then((input) => {
    return readline(func);
  });
}

function func(i) {
  switch (i) {
    case 0:
      return aufgabe0;
    case 1:
      return aufgabe1;
    case 2:
      return aufgabe2;
    default:
  }
}
