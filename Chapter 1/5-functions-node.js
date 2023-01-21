/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: October 13, 2021

    This short script shows the basic for functions in 
    Javascript and Node.js. 
*/

// The declaration of a function
function sayHello(name) {
    console.log('1 Hello %s!', name);
}

// using the function
sayHello('Amilcar');

// An example of a function that returns some value
function sum(n1, n2){
    return n1 + n2;
}
var x = 2, y = 3;
console.log('2 The sum of %d and %d is %d', x, y, sum(x, y))

// Another way to work with functions is to use function expressions
var division = function(num1, num2) {
    var total = num1 / num2;
    return total;
};
console.log('3 The division of %d and %d is %f', x, y, division(x, y));

// The difference between function declaration and function expression
// can be seen in the example below.

fDeclaration(); // Outputs: Hi, I'm a function declaration!
function fDeclaration() {
    console.log("4 Hi, I'm a function declaration!");
}
 
// Comment lines 41-44 to see the next example
// fExpression(); // Uncaught TypeError: undefined is not a function
// var fExpression = function() {
//     console.log("5 Hi, I'm a function expression!");
// }; 
// As you can see in the above example, the function expression threw an 
// exception when it was invoked before it is defined, but the function declaration executed successfully.


// Arrow functions
// function expression
const square = function (a) {
    return a * a;
};
// first arrow function
const squareArrow = (a) => {
    return a * a;
};
// simple arrow function
const squareArrowSimple = (a) => a * a;

console.log('6 - '+square(3));
console.log('7 - '+squareArrow(3));
console.log('8 - '+squareArrowSimple(3));

// An example of the main difference between regular
// functions and arrow functions
this.variable = 22;
let anObject = { 
    variable: "Object Level Variable", 
    arrowFunction: () => {
        console.log('9 - '+this.variable); //undefined
    },
    regularFunction(){ 
        console.log('10 - '+this.variable); 
    }, 
    regFunction(){ 
        var aFunc = () => {
            console.log('11 - '+this.variable); 
        }
        aFunc();        
    }
};
anObject.arrowFunction(); 
anObject.regularFunction();
anObject.regFunction();
