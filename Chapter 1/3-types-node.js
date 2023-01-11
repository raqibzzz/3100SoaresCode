
/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: October 13, 2021

    This short script shows the basic types of Javascript and 
    Node.js. 
*/

/*  Let's start with the three most basic types
    When you use var, you are instantiating a variable in the current scope. 
    This will also prevent access of variables named the same in higher scope, 
    within the current scope.
*/

var x = 5; //This is a Number type, and can be either an integer or a float
var y = 1.3; //This is a Number type
var z = "Node.js"; // This is a String type
var a = 'Javascript';//This is also a String
var b = true; //This is a Boolean type

console.log('1 Numbers: %d, %d', x, y);
console.log('2 My string variable value is %s', z);
console.log('3 My boolean value is %s', b);

/* 
    Now let's do some simple operations with Numbers.
*/

var a = 1, b = 2, c = 3;
var sum = a + b + 1;
console.log('4 Sum result is %d', sum);
var mult = sum * c;
console.log('5 Mult result is %d', mult);
var div = mult / b;
console.log('6 Div result is %d', div);
var mod = mult % 2;
console.log('7 Modulo result is %d', mod);
var v = '2.5';
var v2 = 2.0 * v; // automatic conversion from string to number is 5.
console.log('8 Automatic conversion result is '+v2);

// Main operations with Strings
// var str = "  Let's" + " learn" + " Node.js!  "; //Using the + operator will concatenate strings
var str = "  Let's".concat(" learn", " Node.js!   "); //This has the same effect of previous line
console.log("9", str);
console.log("10", str.length);//Shows the length of the string
// There are three main methods for extracting string's parts
var slice = str.slice(0, 7); //extracts part of a string and returns it in a new string
console.log("11", slice);
var substr = str.substring(0, 7) // the second parameter specifies the length of the extracted part
console.log("12", substr);  //substring is similar to slice but cannot accept negative indexes
var rpl = str.replace("Node.js", "Javascript");//it replaces a specified value with another value in a string
console.log("13", rpl); //this method replaces only the first match
// There are also some styling methods
console.log("14", str.toLowerCase()); //lower case all string
console.log("15", str.toUpperCase()); //upper case all string
console.log("16", str.trim()); //trim removes removes whitespace from both sides of a string

//By using const, the value of the variable can't be changed
const s = "My const string value.";
const cst = 10;

console.log('17 Const values: %s - %d', s, cst);
// If you try to change them, you will receive an error. Remove the comment below to check
// s = 'New string';

//A basic Object variable
var student = {
    firstName: 'Amilcar',
    lastName: 'Soares',
    class: 3100
};

console.log('18', student);
console.log('19 Print by field: %s', student.firstName); //attribute access

// Null and Undefined examples

var mynull = null;
console.log('20', mynull);
console.log('21', typeof mynull); // null is a type of Object

var myund;
console.log('22', typeof myund);
// or ...
var test = undefined;
console.log('23', test);
