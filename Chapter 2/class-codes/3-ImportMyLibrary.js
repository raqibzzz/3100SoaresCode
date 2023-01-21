/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: November 14, 2021

    A script with an example of how to import your custom script
*/
var math = require("./2-math-lib.js");

console.log("Addition:", math.add(1,2));
console.log("Subtraction:", math.subtract(5,3));
console.log("Multiplication:", math.multiply(4,8));
console.log("Divide:", math.divide(80,7));
console.log("isEven:", math.isEven(1));