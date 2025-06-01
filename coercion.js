// Coercion:------------
// Coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. It happens when JavaScript tries to perform operations between different data types.

// 2 type of Coercion
// 1. Implicit Coercion (Type conversion happens automatically):--
// JavaScript automatically converts a value from one type to another when needed.

// 2. Explicit Coercion (Type conversion is manually done by the developer):---
// Developers can manually convert types using functions like Number(), String(), or Boolean().

console.log("5" + 3); ////53
console.log("5" - 2); //3
console.log(Number("123")); //123
console.log(String("123")); //"123"
console.log("5" - true);  // 4 (true is converted to 1 → "5" - 1 = 4)
console.log("10" - undefined);  // NaN (undefined cannot be converted to a number)
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)
console.log(Boolean(null)); // false
console.log(null == undefined); // true
