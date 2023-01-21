/*  
    @author: Ed Brown
    @version: 1.0
    @date: Jan 15, 2023

    Getter and Setters in 'modern' javascript are used to override the assignment and selector
    syntax. Do not write special get set methods like in Java. 
*/

class Employee {

    #name ; // # for private in ES 2022
    #id ;

    static count = 0;

    constructor( name ) {
        this.name = name
        this.#id = Employee.nextid()

    }

    set name(newName) {
        this.#name = newName.trim()
    }

    get name() {
        return this.#name;
    }

    get id() {
        return this.#id;
    }

    static nextid(){
        return this.count++
    }

}

let bob = new Employee("Robert Guyam")
let jane = new Employee("  Jane Ribbons")

bob.name = "   Robert Alphonse Guyam  "; // specific setter methods not conventional in JS

console.log(bob.name, " id is ", bob.id)
console.log(jane.name, " id is ", jane.id)
