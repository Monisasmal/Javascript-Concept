// What is JAVAScript ??

// JavaScript is a high level interpreted Programming language primarily used for adding interactivity and dynamic behaviour of web pages. It is one of the core technologies of the web, alongside HTML (structure) and CSS (styling).

//  Key features of JS :-

// 1. Clientside Scripting: Runs in the browser to make web page interactive.Clientside.
// 2. Dynamically Typed: No need to define veriable types. 
// 3. Event-Driven: Excute the code According to the user actions. 
// 4. Asynchrounous and Singlethreded: Use Features like Promise, Async and  await for non blocking I/O. 

// JavaScript Data Types:- 

// JavaScript has two categories of data types:

// Primitive Data Types (Immutable, stored by value)
// Non-Primitive (Reference) Data Types (Stored by reference)

// 1. Primitive Data Types

// Number:-	Represents numbers (integers & decimals):-	let num = 42;
// String:-	Represents text enclosed in quotes:-	let name = "John";
// Boolean:	Represents true or false values:-	let isActive = true;
// Undefined:-	A variable declared but not assigned a value:-	let x; 
// Null:-	Represents an intentional empty value:-	let y = null;
// BigInt:-	Handles very large numbers beyond Number limits:-	let big = 9007199254740991n;
// Symbol:-	Unique and immutable identifiers:-	let sym = Symbol("id");

// 2. Non-Primitive (Reference) Data Types
// Object:-	Collection of key-value pairs:-	let obj = { name: "John", age: 25 };
// Array:-	Ordered collection of values:-	let arr = [1, 2, 3, 4];
// Function:-	A block of reusable code:-	function greet() { console.log("Hello"); }


// Difference Between == and === in JavaScript

// Both == (loose equality) and === (strict equality) are used to compare values in JavaScript, but they behave differently.

// == :-	Loose equality (Abstract comparison)	Compares values without considering types (performs type coercion).
// === :-	Strict equality (Type-sensitive comparison)	Compares values and types (no type coercion).

console.log(5 == "5");   // true  (type conversion: "5" → 5)
console.log(5 === "5");  // false (different types: number vs. string)

console.log(0 == false);  // true  (false is converted to 0)
console.log(0 === false); // false (number vs. boolean)

console.log(null == undefined);  // true  (special case)
console.log(null === undefined); // false (different types)




// Operators in JavaScript

// Operators in JavaScript are symbols that perform operations on values and variables. They are classified into different categories:

// 1. Arithmetic Operators
let a = 10, b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.3333 (Division)
console.log(a % b);  // 1  (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation)

a++;  
console.log(a); // 11 (Increment)

b--;
console.log(b); // 2 (Decrement)


// 2. Assignment Operators

let x = 5;

x += 3;  // x = x + 3
console.log(x); // 8

x -= 2;  // x = x - 2
console.log(x); // 6

x *= 2;  // x = x * 2
console.log(x); // 12

x /= 3;  // x = x / 3
console.log(x); // 4

x %= 3;  // x = x % 3
console.log(x); // 1

x **= 2;  // x = x ** 2
console.log(x); // 1


// 3. Comparison Operators

console.log(5 == "5");   // true (values are equal, type conversion happens)
console.log(5 === "5");  // false (strict comparison, different types)

console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 <= 9);   // false

console.log(null == undefined);  // true
console.log(null === undefined); // false


// 4. Logical Operators

let p = true, q = false;

console.log(p && q); // false (AND: both must be true)
console.log(p || q); // true (OR: at least one is true)
console.log(!p);     // false (NOT: negates the value)
console.log(!q);     // true


// 5. Bitwise Operators

let m = 5, n = 3;   // 5 = 101, 3 = 011

console.log(m & n);  // 1  (AND → 101 & 011 = 001)
console.log(m | n);  // 7  (OR  → 101 | 011 = 111)
console.log(m ^ n);  // 6  (XOR → 101 ^ 011 = 110)
console.log(~m);     // -6 (NOT → ~101 = -110)
console.log(m << 1); // 10 (Left shift → 101 << 1 = 1010)
console.log(m >> 1); // 2  (Right shift → 101 >> 1 = 10)


// 6. Ternary Operator (?:)

let age = 18;
let exm = (age >= 18) ? "Adult" : "Minor";
console.log(exm); // "Adult"

// 7. Type Operators

console.log(typeof "Hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof {});       // "object"
console.log(typeof []);       // "object" (Arrays are objects in JS)
console.log(typeof function() {}); // "function"

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true (because arrays are objects)


// difference between a++ and ++a

// 1. Post-Increment (a++)

// First, returns the current value of a.
// Then, increments a by 1.

let c = 5;
let result = c++;  // Assigns the current value of a (5) to result, then increments a

console.log(result); // 5 (original value of a)
console.log(c);      // 6 (a is incremented)

// 2. Pre-Increment (++a)

// First, increments a by 1.
// Then, returns the new value of a.

let d = 5;
let exmp = ++d;  // Increments b first, then assigns the new value (6) to result

console.log(exmp); // 6 (new value of b)
console.log(d);      // 6 (b is already incremented)


