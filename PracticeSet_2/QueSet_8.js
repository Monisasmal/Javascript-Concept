// 1. several methods can convert an array to a string

// toString():----
const arr = [1,2,3,4,5];
console.log(arr.toString());

// join():---
const arr1 = ['a', 'b', 'c'];
console.log(arr.join());       
console.log(arr.join('-'));    
console.log(arr.join(' | '));  

// JSON.stringify():---
const arr2 = [1,2,3,4];
console.log(JSON.stringify(arr));

// 2. string to an array using several built-in methods

// split():---
const str = "apple,banana,grape";
console.log(str.split(","));

// Array.from():---
const str1 = "hello";
console.log(Array.from(str1));

// Spread Operator ([...]):----
const str2 = "test";
const arr3 = [...str2];
console.log(arr3); 

// JSON.parse():----
const jsonStr = '["a", "b", "c"]';
const arr4 = JSON.parse(jsonStr); 
console.log(arr4);


