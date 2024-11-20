'use strict';

/* Remove Spaces

  Data In:
    A text is entered

  Data Out:
    The text with spaces and the text when the spaces is removed

  Test Cases:
    'My name is Nelly' --> before: My name is Nelly
                           after: MynameisNelly
    null --> 'enter some text, all the spaces will be removed'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
