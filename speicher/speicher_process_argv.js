/*
  Überlege, wie sehr die beiden folgenden Codesnippets snippet 1 bzw. snippet 2 den RAM beanspruchen werden. Konzentriere dich dabei wirklich nur auf den Code zwischen den Kommentaren

    // anfang snippet 1 ... // ende snippet 1

  bzw.

    // anfang snippet 2 ... // ende snippet 2

  und ignoriere(!) den restlichen Code.

  Teste, indem du mit der Konsole zu diesem Skriptverzeichnis navigierst, von dort

    node speicher.js eins

  bzw.

    node speicher.js zwei

  einbigst und mit einem Task-Manager deine Vermutung hinsichtlich des RAM prüfst.
*/

switch( process.argv[2] ) {

  case 'eins':

    // anfang snippet 1
    var text = '';
    while (text.length > -1 ) {
      text = text + 'a';
    }
    // ende snippet 1

    break;

  case 'zwei':

    // anfang snippet 2
    var text = '';
    while (text.length > -1 ) {
      text = 'a';
    }
    // ende snippet 2

    break;
}
