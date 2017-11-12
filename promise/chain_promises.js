var rdl = require('readline');

var rl = rdl.createInterface({
  input: process.stdin,
  output: process.stdout
});

readline(0).then((eingabe) => {
  return readline(1);   // apply next then on this returned promise
}).then((eingabe) => {
  return readline(2); // apply next then on this returned promise
}).then((eingabe) => {
  return readline(3);   // apply next then on this returned promise
}).then((eingabe) => {  // frankly, can also return some promise directly here
  var promise = new Promise((resolve, reject) => {
    if( eingabe.length < 10 ) {
      const json = {
        ind_0: 'foo',
        ind_1: 561,
        ind_2: eingabe
      };
      resolve(json);
    } else {
      reject( new Error('Rejected!!!') );
    }
  });
  return promise;
}).then((json) => {
  console.log(json['ind_1']);
  rl.close();
});

function readline(n) {
  return new Promise(function(resolve, reject) {
    rl.question(n + '-te Eingabe: ', (eingabe) => {
      console.log(n + '-te Eingabe echo: ' + eingabe);
      resolve(eingabe);
    });
  });
}
