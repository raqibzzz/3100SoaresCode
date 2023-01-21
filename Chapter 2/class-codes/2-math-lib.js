/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: November 14, 2021

    A script with basic math functions
*/

module.exports.add = function(a, b){
    return a + b;
};

module.exports.subtract = function(a, b){
    return a - b;
};

module.exports.multiply = function(a, b){
    return a * b;
};

module.exports.divide = function(a, b){
    return a / b;
};

module.exports.isEven = function(a){
    if (a%2 == 0) return true;
    else return false;
};