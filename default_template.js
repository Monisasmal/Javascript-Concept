// 1. Template Literals (``)

// Template literals are a feature in JavaScript that allows embedding expressions inside string literals using backticks (`). They support multi-line strings, interpolations, and better readability.

const name = "Alice";
const age = 25;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

// 2. Default Parameters in Functions


// Default parameters allow you to set default values for function parameters when no argument is provided.

function greet(name = "moni"){
  return `Hello ${name}`;
}
console.log(greet());
console.log(greet("mama"));

// O/p-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node default_template.js
// Hello, my name is Alice and I am 25 years old.
// Hello moni
// Hello mama
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 

