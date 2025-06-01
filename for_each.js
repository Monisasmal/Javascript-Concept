// forEach() Method in JavaScript

// The forEach() method is used to iterate over arrays and execute a function for each element. not return with an new array.

// Syntax

// array.forEach(function(curEle, index, array) {
  // code to execute for each element
// });


// Basic forEach() with an Array

const colors = ["red", "blue", 'marron']

colors.forEach (function(curEle){
console.log(curEle);
})

// Explanation
// 1. The function runs once for each element (Red, Green, Blue).
// 2. No need for a loop variable like i.

// Using Arrow Function

const exmp = [1, 2, 3, 4, 5];
 exmp.forEach(num => console.log(num*2));

//  Accessing ALL values

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index, arr) => {
    console.log(` ${index}: ${fruit} : ${arr}`);
});

// Summing All Values in an Array

const numbers = [5, 10, 15, 20];
let sum = 0;

numbers.forEach(num => sum += num);

console.log("Total Sum:", sum);


// Modifying Objects in an Array

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

users.forEach(user => user.age += 1); // Increments each user's age by 1

console.log(users);


// O/P:---  😍😍😎

// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node for_each.js
// red
// blue
// marron
// 2
// 4
// 6
// 8
// 10
//  0: Apple : Apple,Banana,Cherry
//  1: Banana : Apple,Banana,Cherry
//  2: Cherry : Apple,Banana,Cherry
// Total Sum: 50
// [
//   { name: 'Alice', age: 26 },
//   { name: 'Bob', age: 31 },
//   { name: 'Charlie', age: 23 }
// ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT>

const arr = [1, 2, 3];
const res = arr.forEach(num => num * 2);
console.log(res);

// O/p-->
// undefind

const exm = [1,2,3,4];
exm.forEach(num => console.log(num*2));

// O/p-->
// 2
// 4
// 6
// 8
