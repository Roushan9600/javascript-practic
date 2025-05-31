// Global Scope: Variables declared outside of functions are accessible anywhere in your code.

// Local Scope: Variables declared inside a function are only accessible within that function.

// Example Program:


let globalVar = "Hello, World!"; // Global variable
 
function printLocal() {
  let localVar = "Hello, Local!"; // Local variable
  console.log(globalVar); // Accessible here
  console.log(localVar);  // Accessible here
}
 
printLocal(); // Output: "Hello, World!" "Hello, Local!"
console.log(globalVar); // Output: "Hello, World!"


console.log(localVar); // Throws ReferenceError: localVar is not defined