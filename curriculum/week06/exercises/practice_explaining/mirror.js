'use strict';

/* Mirror

  Data In:
    A text

  Data Out:
    Data that will be outputed is our text but with ' | ' that will separate a mirrored text with the original text

  Test Cases:
    'NELLY' --> 
                'N' --> 'N | N'
                'E' --> 'EN | NE'
                'L' --> 'LEN | NEL'
                'L' --> 'LLEN | NELL'
                'Y' --> 'YLLEN | NELLY'
    '' --> 'enter some text to mirror'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
