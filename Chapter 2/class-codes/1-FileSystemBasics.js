/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: November 14, 2021

    A script with the basic functionalities of the file system module 
*/

const fs = require('fs');

// Writing files synchronously
// If you re-run the script, it will replace the content of the former one
fs.writeFileSync('myFileSync.txt', '1 - File created by Amilcar!');

// If you run this script several times, it will always add more 10
// lines to the bottom of your file (appending). 
for (let i = 0; i < 10; i++){
    let str = '2 - Inserting '+i+' line of my loop!\n';
    fs.appendFileSync('myFileAppended.txt', str);
}

// Reading files synchronously
// This will read the file as an entire string.
var data_sync = fs.readFileSync('./myFileAppended.txt', {encoding:'utf8', flag:'r'});

// You may want to break the file base on a scape char, 
// such as \n (line break). The split operation over a string
// is an easy function that will achieve what we need here.
var lines = data_sync.split('\n');
for (let i = 0; i < lines.length-1; i++){
    console.log('Content in line %d:', i, lines[i]);
}

// The same effect can be achieved by using an asynchronous function from this module
// readFile('path/to/file', {options}, callback);
console.log('Reading async')
// A callback function to be executed after opening the file.
// According to the documentation, the function should have two
// parameters: error and data. If err is null, data was loaded. 
let process_file = function (err, data){
    // throws the error if something wrong happened
    if (err) throw err;
    // if there's no error, we can play with the data
    console.log(data);
};
fs.readFile('./myFileAppended.txt', {encoding:'utf8', flag:'r'}, process_file);

