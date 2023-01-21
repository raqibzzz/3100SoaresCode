/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: November 14, 2021

    A script with an example of how to use a third-party
    module in node.js
*/

const validator = require('validator');

console.log('1 - Is this email amilcarsj@mun.ca valid? ' + validator.isEmail('amilcarsj@mun.ca'));
console.log('2 - Is this email amilcarsj@mun@somewhere.ca valid? ' + validator.isEmail('amilcarsj@mun@somewhere.ca'));
console.log('3 - Is this url http://www.cs.mun.ca/~asoaresjunio/ valid? ' + validator.isURL('http://www.cs.mun.ca/~asoaresjunio/'));
console.log('4 - Is this url httpX://www.cs.mun.ca/~asoaresjunio/ valid? ' + validator.isURL('httpX://www.cs.mun.ca/~asoaresjunio/'));

