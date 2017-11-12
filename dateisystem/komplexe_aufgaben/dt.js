/*jshint esversion: 6*/

// Wollen einen Dummytext erzeugen, der exakt n Bytes auf der Festplatte verbraucht.

var ds = require('fs');

exports.writen = function(dateiname, n) {
  var dummy_text = '';
  while (dummy_text.length < n) {
    dummy_text = dummy_text + 'a';
  }
  ds.writeFileSync(dateiname, dummy_text);
};

exports.writen = function(dateiname, n, puffer) {
  var dummy_text = '';
  var puffer_text = '';
  ds.writeFileSync(dateiname, '');

  while (puffer_text.length < puffer) {
    puffer_text = puffer_text + 'a';
  }

  for (var i = 0; i * puffer < n; i++) {
    ds.appendFileSync(dateiname, puffer_text);
  }

  var c = n % puffer;
  for (var i = 0; i < c; i++) {
    ds.appendFileSync(dateiname, 'a');
  }
};
