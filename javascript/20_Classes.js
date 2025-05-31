// A class is like a blueprint for creating objects. It defines the properties (data) and methods (functions) that the objects will have.

// Example Program:


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
 
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  }
}
 
let john = new Person("John", 30);
john.greet(); // Output: "Hello, my name is John and I'm 30 years old"



//In this example:
// Person is a class with a constructor method that initializes the name and age properties.
// The greet method prints a greeting message.
// john is an instance of the Person class, created using the new keyword, and we call the greet method on it.