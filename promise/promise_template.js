/*jshint esversion: 6*/

var rdl = require('readline');

var rl = rdl.createInterface({
  input: process.stdin,
  output: process.stdout
});

var p = readline(func(0));
for (var i = 1; i < 3; i++) {
  wrap_func(i, func(i));
}
p.then((eingabe) => {
  rl.close();
});

function readline(func) {
  return new Promise(function(resolve, reject) {
    rl.question('Eingabe: ', (eingabe) => {
      func(eingabe);
      resolve(eingabe);
    });
  });
}

// Must wrap this, otherwise the i in the for loop will arrive at end too soon.
function wrap_func(i, func) {
  p = p.then((eingabe) => {
    return readline(func);
  });
}

function func(i) {
  switch (i) {
    case 0:
      return func0;
    case 1:
      return func1;
    case 2:
      return func2;
    default:
  }
}

function func0(eingabe) {
  console.log('0 ist ' + eingabe);
  // Code goes here
}
function func1(eingabe) {
  console.log('1 ist ' + eingabe);
  // Code goes here
}
function func2(eingabe) {
  console.log('2 ist ' + eingabe);
  // Code goes here
}
