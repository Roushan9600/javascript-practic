// JavaScript provides mechanisms to handle errors that may occur during program execution. This helps prevent crashes and allows you to manage errors gracefully.

// 1. Try…Catch Statement

// The try...catch statement is used to handle errors. Code that might throw an error is placed inside the try block, and error handling code is placed inside the catch block.

// Example Program:


try {
  let num = "hello";
  num.toFixed(2); // This will throw an error because toFixed() is a method for numbers
} catch (error) {
  console.error(error); // Logs the error to the console
}
