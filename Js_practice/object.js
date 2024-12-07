/* Object Creation Methods --> 

  * Using object literal.
  * Using new keyword
  * Using Object.create() method
  * Using Factory functions
  * Using Constructor functions

*/
  
// Using litral 

person = {
    name : "Dhanraj",
    Age : 19,
    Location : "India"
};

console.log(person)

// using new keyword --> We can use the new keyword along with the Object constructor 
//to create an empty object and then add properties and methods to it.

person1 = new Object()
person1.name = "Abc";
console.log(person1);

/* using Factory Function methode -->  A factory function can be defined as a function that creates an object and returns it.

Factory functions can contain inner values, methods & many more. 
They are just like normal functions but with a specific target i.e. to create objects.

*/

function createPerson() {
    return {
        name: "Aryan",
        age: 15,
        good : true
    };
}

let person3 = createPerson();
console.log(person3)

/* using cinstructer functttion --> The name of constructor function should be written in 'Pascal Notation'.
    In Constructor function we don't use return keyword to return an object. 
    Constructor function does nothing but initializes and defines the properties in the function.
*/ 

function ConstructorPerson() {

    this.firstName = "Mayank",
    this.lastName = "Pandey",
    this.age = 21,
    this.hobbies = ["sleeping", "writing", "playing"]
}

let person4 = new ConstructorPerson();
console.log(person4);
