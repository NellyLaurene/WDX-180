// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('______', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let text = readString('last')

  // --- create a greeting ---
  let greetingText = 'Hello '+text+' !!'

  // --- display the greeting ---
  displayString('greeting', greetingText)
});
