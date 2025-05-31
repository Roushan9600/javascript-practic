// Async/Await provides a more readable way to work with Promises. It allows you to write asynchronous code that looks like synchronous code. An async function always returns a Promise, and await pauses the execution until the Promise is resolved.

// Example Program:


function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
 
async function greet() {
  console.log("Hello");
  await delay(1000); // Waits for 1 second
  console.log("World");
}
 
greet();
// In this example:

// delay() is a function that returns a Promise that resolves after a specified number of milliseconds.
// greet() is an async function that logs “Hello”, waits for 1 second using await, and then logs “World”.

// Promises: Represent the eventual result of an asynchronous operation and can be handled using .then() and .catch().
// Async/Await: Syntactic sugar over Promises that makes asynchronous code look and behave like synchronous code, improving readability and maintainability.