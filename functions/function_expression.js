// Function Expression 

// A function expression is a way to define a function in JavaScript inside an expression. Unlike function declarations, function expressions don’t have a name (in anonymous functions) or can be assigned to a variable.

// Syntax

// const result = function(Parameter) {
//   return result
// }

// 1. The function is assigned to a variable.
// 2. The function can be anonymous (without a name).
// 3. The function can be called using the variable name.

// Function Declaration

function result(name){
  return `Hello ${name}`
}
console.log(result('moni'));


// Function declarations are hoisted (available before they are defined).

// Function Expression

const expee = function(name){
  return `hello ${name}`;
}
console.log(expee('moni'));

// Function expressions are not hoisted, so they must be defined before calling them.

// O/P:----

// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> node function_expression.js
// Hello moni
// hello moni
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> 
