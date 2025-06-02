// ES6 (ECMAScript 2015) introduced several powerful features to JavaScript, making code more concise and expressive. Key features include arrow functions, template literals, destructuring, and the spread operator.


// Feature	                Description	                                                    
// Arrow Functions	        A shorthand way of writing functions	                       
// Template Literals	    A way of embedding variables and expressions in strings	       
// Destructuring	        A way of extracting data from arrays and objects	
// Spread Operator	        A way of spreading the elements of an array or object	              

// Text Diagram:

// ES6+ Features
//   |
//   |-- Arrow Functions      Template Literals       Destructuring      Spread Operator
//   |         |                    |                    |                     |
//   |  Shorthand syntax      Embed variables        Extract data        Spread elements
//   |  for functions        and expressions        from arrays         of arrays/objects
//   |          |                    |                    |                     |
//   |    () => {}             `Hello ${name}`    const { name, age }  [...arr1, ...arr2]
//                                            = obj


// Basic Programs:
// Arrow Functions:

// Traditional function
// function add(x, y) {
//   return x + y;
// }
// // Arrow function
// const add = (x, y) => x + y;
// console.log(add(2, 3)); // 5

// //Template Literals:
// const name = 'John Doe';
// console.log(`Hello ${name}!`); // "Hello John Doe!"


// //Destructuring:
// const person = {
//   name: 'John Doe',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA',
//     zip: '12345'
//   }
// };
 
// // Extracting data from an object
// const { name, age, address: { city } } = person;
// console.log(name); // "John Doe"
// console.log(age); // 30
// console.log(city); // "Anytown"
 
// const numbers = [1, 2, 3, 4, 5];
 
// // Extracting data from an array
// const [first, second, ...rest] = numbers;
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]


//Spread Operator:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// const arr3 = [...arr1, ...arr2, 6, 7];
// console.log(arr3); // [1, 2, 3, 4, 5, 6, 7]
 
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const obj3 = { ...obj1, ...obj2, e: 5 };
// console.log(obj3); // {a: 1, b: 2, c: 3, d: 4, e: 5}



// Running the Examples:
// Save the JavaScript code in a .js file and execute it using Node.js. Here’s how you can set it up:

// script.js:

const add = (x, y) => x + y;
console.log(add(2, 3)); // 5
 
const name = 'John Doe';
console.log(`Hello ${name}!`); // "Hello John Doe!"
 
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
 
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const arr3 = [...arr1, ...arr2, 6, 7];
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7]
// Open the terminal in Visual Studio Code and navigate to the folder where the script.js file is located. Run the file using the following command:

// 1
// node script.js