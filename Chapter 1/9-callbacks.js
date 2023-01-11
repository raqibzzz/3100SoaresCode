/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Nov 17, 2021

    This short script shows a basic example
    of a callback in Javascript and Node.js. 
*/

// Callback function example
var f1 = function(a, callback){
    let b = a + 1; //process something partially
    return callback(b); //executes the function passed as 
                        //a callback passing the result in b
                        //as argument
};
var other_func = function(c){ 
    return c + 1;
}

var res = f1(0, other_func);

console.log(res);
