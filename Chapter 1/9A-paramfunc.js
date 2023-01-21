/*  
    @author: Ed Brown
    @version: 1.0
    @date: Jan 15, 2023

    Call backs are often provided as parameters, so here is a simple example
    of using a function as a parameter in the sort array method. Node.js. 
*/


let list1 = "A fine day for fools to play".split(' ');

console.log("The list: ", list1);
list1.sort();
console.log("Sorted:: ", list1)

function lencompare(a, b){
    return b.length - a.length;
}

list1.sort(lencompare)
console.log("sorted by length:: ", list1)

list1.sort( (a,b) => a.length - b.length )
console.log("sorted by reverse length:: ", list1)

list1.sort( (a,b) => a.slice(-1).charCodeAt() - b.slice(-1).charCodeAt() )
console.log("sorted by last character:: ", list1)


