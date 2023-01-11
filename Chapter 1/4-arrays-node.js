/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: October 13, 2021

    This short script shows the basic for Arrays manipulation in 
    Javascript and Node.js. 
*/

// Array declaration
var aIntVals = [1, 2, 3];
var aFloatVals = [4.3, 2.7, 3.1, 1.9];
var aColors = ['red', 'green', 'blue', 'white', 'black']; 

//Access and print the variable lengths 
console.log('1 The array lengths are: %d, %d and %d.', aIntVals.length, aFloatVals.length, aColors.length)

// Access an element from an array
console.log('2 Accessing the 2nd element of the int array: ', aIntVals[2]);
console.log('3 Accessing the 3rd element of the str array: ', aColors[3]);

// Join all elements
var jStr = aColors.join( ', ' ); 
console.log('4 The string with all vals is: ' + jStr);

// Removing the last element from the array
console.log('5 State of the array before the removal.', aFloatVals)
var removed = aFloatVals.pop();
console.log('6 Item removed was ', removed);
console.log('7 State of the array after removal: ', aFloatVals);

// Removing an element to a specific position using splice
console.log('8 State of the array before the removal.', aColors);
// Splice: startIndex, numElemsToRemove
// Removing from the 3rd element (indexed by 2), a single element
aColors.splice(2, 1);
console.log('9 State of the array after the removal.', aColors);

// Adding an element to the end of the array
console.log('10 State of the array before the push.', aIntVals);
aIntVals.push(4);
console.log('11 State of the array after the push.', aIntVals);

// Adding an element to a specific position using splice
console.log('12 State of the array before the insertion.', aColors);
// Splice: startIndex, numElemsToRemove, [toAdd]
aColors.splice(2, 0, 'purple');
console.log('13 State of the array after the insertion.', aColors);

// Reversing the array
console.log('14 State of the array before the reverse.', aColors);
aColors.reverse();
console.log('15 State of the array after the reverse.', aColors);

// sorting the array
console.log('16 State of the array before the sorting.', aFloatVals);
aFloatVals.sort();
console.log('17 State of the array before the sorting.', aFloatVals);
