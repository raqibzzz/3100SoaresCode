/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: October 7, 2021

    This short script shows the main differences between 
    var and let.
*/

var v1 = "variable 1";
let v2 = "variable 2";
  
console.log('1', v1, v2); // here both v1 and v2 are accessible
  
{   
    console.log('2', v3); //v3 exists, but it is undefined    
    var v3 = "variable 3"
    let v4 = "variable 4";
    console.log('3', v3, v4); // still, v3 and v4 are accessible
}
  
console.log('4', v3); // now v3 is available and has value
console.log('5', v4); // but v4 generates a ReferenceError
