// When dealing with tasks that take some time to complete, such as fetching data from a server or reading a file, JavaScript uses Promises and Async/Await to handle these asynchronous operations. These features allow you to write code that handles these tasks without freezing the main thread.
// A Promise is an object that represents the eventual result of an asynchronous operation. It can be in one of three states:

// Pending: The operation is still ongoing.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// Example Program:


let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random();
    if (num > 0.5) {
      resolve(num);
    } else {
      reject("Error: Number is less than 0.5");
    }
  }, 1000);
});
 
promise
  .then((result) => {
    console.log(`Result: ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });



// In this example:

// A Promise is created that generates a random number after 1 second.
// If the number is greater than 0.5, the Promise is resolved with the number.
// If the number is less than or equal to 0.5, the Promise is rejected with an error message.
// .then() handles the resolved value, and .catch() handles any errors.

