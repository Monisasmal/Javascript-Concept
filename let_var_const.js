// Difference Between var, let, and const in JavaScript

// In JavaScript, var, let, and const are used for declaring variables. However, they have key differences in scope, reassignability, and hoisting.

// 1. var (Function-scoped, can be redeclared and reassigned)

// 1. Function-scoped (not block-scoped).
// 2. Can be redeclared and reassigned.
// 3. Hoisted with undefined.

function testVar(){
  if(true){
    var x = 10;
    console.log(x);
  }
  console.log(x);
}
testVar();

// Hoisting Example with var

console.log(v);
var v = 10;
console.log(v);

// 2. let (Block-scoped, cannot be redeclared)

// 1. Block-scoped (only accessible within the {} block it is declared in).
// 2. Cannot be redeclared within the same scope.
// 3. Can be reassigned.
// 4. Hoisted but not initialized (gives a ReferenceError if accessed before declaration).

function testLet(){
  if(true){
    let l = 20;
    console.log(l);
  }
  // console.log(l);  ❌ Reference Error
}
testLet();

// Hoisting Example with let

// console.log(l); 

// C:\Users\user\OneDrive\Desktop\JS CONCEPT\let_var_const.js:43
// ReferenceError: Cannot access 'l' before initialization

let l = 20;
console.log(l);

// 3. const (Block-scoped, cannot be redeclared or reassigned)

// 1. Block-scoped (same as let).
// 2. Cannot be redeclared or reassigned after initialization.
// 3. Hoisted but not initialized.

const PI = 3.1416;
console.log(PI); // 3.1416

// PI = 3.14; // ❌ TypeError: Assignment to constant variable.


// Objects & Arrays with const
// While primitive values cannot be changed, objects and arrays declared with const can be modified.

const person = { name: "John", age: 25 };
person.age = 30;  // Allowed ✅ (modifying property)
console.log(person.age); // 30

// person = { name: "Jane" }; // ❌ TypeError: Assignment to constant variable.


const numbers = [1, 2, 3];
numbers.push(4);  // Allowed ✅
console.log(numbers); // [1, 2, 3, 4]

// numbers = [5, 6, 7]; // ❌ TypeError: Assignment to constant variable.
