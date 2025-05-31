// Arrow Functions  ========>>>>

// Arrow functions (=>) in JavaScript provide a shorter syntax for writing functions compared to traditional function expressions. They are commonly used in modern JavaScript, especially in functional programming and callbacks.

// ✔ Arrow functions are a shorter way to write functions in JavaScript.
// ✔ They inherit this from their surrounding scope.
// ✔ They are useful in array methods (map, filter, reduce).
// ✔ They cannot be used as constructors (no new keyword).
// ✔ They do not have their own arguments object.



// Syntax

const result = (name) => { return `Hello ${name}`};
console.log(result('moni'));

// Arrow Function with One Parameter

const onePara = (num) => num * num;
console.log(onePara(5));

// Arrow Function with Multiple Parameters

const multiPara = (a,b,c) => a+b+c;
console.log(multiPara(1,3,6));

// Arrow Function Without Parameters

const noPara = () => `Hello Monii`;
console.log(noPara());

// rrow Function with Multiple Statements
const multiply = (a, b) => {
  let result = a * b;
  return result;
};
console.log(multiply(4, 3)); 

// O?P:---

// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> node arrow_functions.js
// Hello moni
// 25
// 10
// Hello Monii
// 12
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> 
