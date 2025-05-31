// Inheritance allows one class (child or subclass) to inherit properties and methods from another class (parent or superclass). This promotes code reuse and establishes a hierarchy.

// Example Program:


class Animal {
  constructor(name) {
    this.name = name;
  }
 
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
 
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
 
let d = new Dog("Rufus");
d.speak(); // Output: "Rufus barks"


let a= new Animal("Rufus");
a.speak(); // Output: "Rufus makes a noise"


//extends keyword ka use hota hai ek class ko doosri class se inherit karne ke liye JavaScript me.

// In this example:

// Animal is a parent class with a speak method.
// Dog is a subclass that extends Animal and overrides the speak method.
// d is an instance of the Dog class, and calling speak shows the overridden behavior.


// Classes: Provide a way to define objects with properties and methods. They act as blueprints for creating instances.
// Inheritance: Allows one class to inherit from another, enabling code reuse and creating a hierarchical relationship between classes.