// Browser storage allows web browsers to store data locally on the user’s device, providing two primary types: localStorage and sessionStorage.

// Tabular Comparisons:

// Feature	            localStorage	                        sessionStorage
// Data Stored	        Without expiration date	                For a single session or tab
// Data Deleted	    Explicitly by user or application	    When the user closes the tab/window or browser

// Text Diagram:

// Browser Storage
//   |
// localStorage            sessionStorage
//   |                       |
// Data without             Data for a single
// expiration date         session or tab
//   |                       |
// Explicitly deleted       Deleted when user
// by user or website      closes tab/window,
// or when browser         or when browser is closed
// is closed                |


// Basic Programs:
//1. Storing and Retrieving Data Using localStorage: 
//Store data
// localStorage.setItem('name', 'John Doe');
// // Retrieve data
// const names = localStorage.getItem('name');
// console.log(names); // "John Doe"


// 2. Storing and Retrieving Data Using sessionStorage:
// Store data
// sessionStorage.setItem('name', 'John Doe'); 
// // Retrieve data
// const name = sessionStorage.getItem('name');
// console.log(name); // "John Doe"

// 3. Removing Data from localStorage:
// localStorage.removeItem('name');

// 4. Removing All Data from localStorage:
// localStorage.clear();


// To Run These Programs:
// JavaScript:
// Create a .js file with the JavaScript code.
// Include this JavaScript file in an HTML file.
// Open the HTML file in a web browser to see the output in the console.



// <pre class="wp-block-syntaxhighlighter-code">&lt;!-- index.html --&gt;
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Browser Storage Example</title>
//     </head>
//     <body>
//         <a href="http://script.js">http://script.js</a>
//     </body>
// </html></pre>



// 1. Storing and Retrieving Data Using localStorage:
localStorage.setItem('name', 'John Doe');
const nameFromLocal = localStorage.getItem('name');
console.log('localStorage:', nameFromLocal); // "John Doe"

// 2. Storing and Retrieving Data Using sessionStorage:
sessionStorage.setItem('sessionName', 'Jane Doe');
const nameFromSession = sessionStorage.getItem('sessionName');
console.log('sessionStorage:', nameFromSession); // "Jane Doe"

// 3. Removing Data from localStorage:
localStorage.removeItem('name');

// 4. Removing All Data from localStorage:
// localStorage.clear();

//go to 33_javascript.html page and run the code to see the output in the console.