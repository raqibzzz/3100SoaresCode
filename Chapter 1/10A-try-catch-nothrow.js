/*  
    @author: Ed Brown
    @version: 1.0
    @date: 2023

    This short script shows a basic example
    of a try/catch block in  Node.js. 

    Convert a value into an error - JavScript has an Infinity value.
*/

let num = 123;
let string = "The number is "

// console.log(string + num.toUpperCase())


try {
    console.log(string + num.toUpperCase()) // could be complex code - unexpected problem.
} catch (e){
    console.log("Unknown")
}
