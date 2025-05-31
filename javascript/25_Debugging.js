// Debugging involves identifying and fixing issues in your code. JavaScript offers several tools and techniques for debugging, which are similar in purpose to those available in Java.

// 1. Using console.log()
// The console.log() method is a simple way to output variable values and track the flow of your code.

// 2. Browser Developer Tools
// Modern browsers come with developer tools that help with debugging. You can set breakpoints, step through code, and inspect variables.
// How to Use Developer Tools:
// Open the browser’s developer tools (usually by pressing F12 or Ctrl+Shift+I).
// Go to the “Sources” tab to set breakpoints.
// When the code execution hits a breakpoint, you can inspect the state of variables and control the flow of execution.

// 3. Visual Studio Code Debugging
// If you’re using Visual Studio Code, you can set breakpoints directly in the editor. Run the code in debug mode to stop execution at breakpoints and inspect variables.
// How to Set Breakpoints in VS Code:
// Click on the left-hand side of the line number where you want to set a breakpoint.
// Start debugging by running the code in debug mode.
// The execution will pause at the breakpoint, allowing you to inspect and step through the code.
// Example Program:


let num1 = 10;
let num2 = 2;
 
try {
  if (num2 === 0) {
    throw new Error("Divide by zero error"); // Custom error message
  }
  let result = num1 / num2;
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(error); // Logs the error to the console
}


//asdfghjkljhfdsdfghj