/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Nov 17, 2021

    This short script shows the basic for more complex
    objects and classes in Javascript and Node.js. 
*/

// An example of a more complex object with methods.
var person = { //This line can be replaced by new Object();
    name: "Amilcar",
    age: 34,
    gender: "Male",
    displayName: function() {
        console.log(this.name);
    },
    displayAge: function() {
        console.log(this.age);
    },
    displayGender: function() {
        console.log(this.gender);
    },
};
// Calling the properties
console.log("1 - Property(name): %s", person.name);
console.log("2 - Property(age): %s", person.age);
console.log("3 - Property(gender): %s", person.gender);

// Calling the methods
console.log("4 - Invoking methods from object person")
person.displayName();
person.displayAge();
person.displayGender();

// Generalizing the object person with a class Person
class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    displayName() {
        console.log(this.name);
    }
    displayAge() {
        console.log(this.age);
    }
    displayGender(){
        console.log(this.gender);
    }
    changeAge(age){
        this.age = age;
    }
  }
  
  // Usage examples
  let user = new Person("Amilcar", 34, "Male");
  console.log("5 - Invoking methods from the new object created by a class")
  user.displayName();
  user.displayAge();
  user.displayGender();
  user.changeAge(35);
  user.displayAge();

  class Professor extends Person {
      constructor(name, age, gender, subject){
          super(name, age, gender);
          this.subject = subject;
      }
      displaySubject() {
          console.log(this.subject);
      }
  }
  let prof = new Professor("Amilcar", 35, "Male", "Web Programming");
  console.log("6 - Inheritance example");
  prof.displayName();
  prof.displaySubject();


