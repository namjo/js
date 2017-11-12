var ds = require('fs');
var schlaf = require('sleep');

ds.writeFileSync('write.txt', '');
while (true) {
  console.log('schreibe ein a.\n');
  ds.appendFileSync('write.txt', 'a');
  schlaf.msleep(1000);  // 1000 Millisekunden warten, weil sonst zu schnell in Datei geschrieben wird: Datei wird zu groß, also Festplatte unnötig voll!
}
