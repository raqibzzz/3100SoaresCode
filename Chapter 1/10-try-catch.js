/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Nov 17, 2021

    This short script shows a basic example
    of a try/catch block in  Node.js. 

    Convert a value into an error - JavScript has an Infinity value.
*/

function divide(a, b) {
    try {
       if (b == 0) {
            throw new Error("Divide by zero error." ); 
       } else {
            return a / b;
       }
    } catch (e) {
        console.error(e);
    }
}
divide(10, 0);
