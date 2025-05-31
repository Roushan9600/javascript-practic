
//These are used to select one block of code to execute based on the value of an expression. It’s similar to Java’s switch statements.
// switch (expression) {
//   case value1:
//     // code to execute if expression equals value1
//     break;
//   case value2:
//     // code to execute if expression equals value2
//     break;
//   default:
//     // code to execute if no cases match
// }
// Example Program:


let day = "Monday";
 
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is neither Monday nor Tuesday");
}