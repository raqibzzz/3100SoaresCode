/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Jan 5, 2021

    This short script shows the basic for the loop statements in 
    Javascript and Node.js. 
*/

// A simple while statement
var i = 1;
console.log('1 - While statement...')
while (i <= 5) {    
    console.log(i);
    i++;
}

// A do-while statement producing the same result of 
// the previous snippet
console.log('2 - Do-while statement...')
i = 1;
do {    
    console.log(i);
    i++;
} while (i <= 5)

// A for example with the same result
console.log('3 - for statement...')
for(var i = 1; i <= 5; i++) {
    console.log(i);
}

// An example of a for iterating over an array
var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"]; 
// Loop through all the elements in the array 
console.log('4 - Looping through array')
for(var i = 0; i < fruits.length; i++) {
    console.log("The fruit in position %d is %s.", i, fruits[i]);
}

// Examples of for-in statements
// An object with some properties 
var person = {name: "Amilcar", surname: "Soares", age: "34"};
// Loop through all the properties in the object  
console.log('5 - Looping with for-in through an object')
for (var prop in person) {  
    console.log(prop + " = " + person[prop]); 
}
// The same can be done for an array
console.log('6 - Looping with for-in through an array')
for(var f in fruits) {  
    console.log("The fruit in position %d is %s.", f, fruits[f]);
}

// Examples of for-of statements
// Iterating over array
var letters = ["a", "b", "c", "d", "e", "f"];
console.log('7 - Looping with for-of over an array')
for(let l of letters) { // binds l to the scope of for
    console.log(l);
}