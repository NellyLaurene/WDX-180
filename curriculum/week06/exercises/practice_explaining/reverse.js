'use strict';

/* Reverse

  Data In:
    A text is entered

  Data Out:
    It will output our text that was entered but in reverse order

  Test Cases:
    'Nelly' -->
        'N' - 'N'
        'e' - 'eN'
        'l' - 'leN'
        'l' - 'lleN'
        'y' - 'ylleN'
      Output: Nelly -> ylleN
    null --> enter some text to reverse

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
