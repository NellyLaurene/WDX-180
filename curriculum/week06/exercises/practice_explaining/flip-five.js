'use strict';

/* Flip Five

  Data In:
    A string with 5 characters

  Data Out:
    Data that will come out is our 5 characters string but in a reverse order

  Test Cases:
    'abcde' --> 'edcba'
    'aa' --> 'nope, try again.'

*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
