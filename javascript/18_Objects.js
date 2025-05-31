// An object is like a collection of named properties. Each property has a key (name) and a value. Values can be any type, including other objects or arrays.

// Example Program:


let person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "swimming", "traveling"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  }
};
 
console.log(person.name); // Output: "John"
console.log(person.hobbies[1]); // Output: "swimming"
console.log(person.address.city); // Output: "Anytown"

//Here, person is an object with properties like name, age, hobbies, and address. hobbies is an array within the object, and address is another object.