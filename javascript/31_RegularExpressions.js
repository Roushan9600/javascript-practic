// <!-- Regular expressions (regex or regexp) are patterns used to match combinations of characters within strings. They are particularly useful for search and replace operations. In JavaScript, regular expressions are objects that can be created using either the literal notation or the RegExp constructor.



// Tabular Comparisons:

// Feature	JavaScript	Core Java
// Literal Notation	/pattern/	Pattern.compile("pattern")
// Constructor Notation	new RegExp('pattern')	Pattern.compile("pattern")
// Case-Insensitive	/pattern/i	Pattern.compile("pattern", Pattern.CASE_INSENSITIVE)
// Global Matching	/pattern/g	Matcher.find()
// Multiline Matching	/pattern/m	Pattern.compile("pattern", Pattern.MULTILINE)


// Text Diagram:

// String
//   |
// RegExp Object
//   |
// Pattern Matching
// Basic Programs: 

//1. Matching a String Using a Regular Expression:-->
const pattern = /hello/;
const str = 'Hello, World!';
const result = pattern.test(str);
console.log(result); // false

// <!-- 2. Using the exec() Method to Find Matches: -->


// const pattern = /hello/g;
// const str = 'Hello, World! Hello, JavaScript!';
// let result;
// while ((result = pattern.exec(str)) !== null) {
//     console.log(result[0]);
// }
// Output: "Hello" "Hello"


//3. Replacing Text Using a Regular Expression:
// const pattern = /hello/gi;
// const str = 'Hello, World! Hello, JavaScript!';
// const newStr = str.replace(pattern, 'Hi');
// console.log(newStr); // "Hi, World! Hi, JavaScript!"