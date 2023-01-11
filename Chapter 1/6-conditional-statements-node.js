/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Jan 5, 2021

    This short script shows the basic for the conditional 
    statements in Javascript and Node.js. 
*/

// Conditional statements
// Simple if example
var x = 5, y = 5;
if (x == y){
    console.log('1 - variables vals are equal');
}

// If - Else statement
y = 5;//you can play with this variable here
if (x != y){
    console.log('2 - variables vals are different');
} else {
    console.log('3 - variables vals are equal');
}

// if - else if - else example
x = 6; //you can play with this variable here
if (x < y){
    console.log('4 - x is smaller than y');
} else if ( x == y){
    console.log('5 - variables vals are equal');
} else {
    console.log('6 - x is greater than y');
}

// Example of a switch command
var str = 'Mangoes';

switch (str) {
    case 'Oranges':
      console.log('7 - Oranges are $0.59 a pound.');
      break; // Always use the break command when finishing a block. 
    case 'Mangoes': // It will enter in the next block here, that's why the break is essential.
    case 'Papayas':
      console.log('8 - Mangoes and papayas are $2.79 a pound.');      
      break;
    default:
      console.log('9 - Sorry, we are out of %s.', str);
  }
