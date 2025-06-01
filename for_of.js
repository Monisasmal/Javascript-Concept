// for...of Loop in JavaScript

// The for...of loop is used to iterate over iterable objects, such as arrays, strings, Maps, Sets, etc. It allows direct access to values instead of keys (unlike for...in).

// Iterating Over an Array 😊😉😉

const colors = ["red", "green", "blue"];

for(let color of colors){
  console.log(color);
}

// Iterating Over a String


const word = "Javascript";

for(let letter of word){
  console.log(letter);
}


// Iterating Over a Map

const userData = new Map([
  ['name','moni'],
  ['age',35],
  ['area','BBSR']
]);

for(let[key,value] of userData){
  console.log(`${key} : ${value}`);
}

// Iterating Over a Set
const uniqueNumbers = new Set([1, 2, 3, 4, 5,4]);

for (let num of uniqueNumbers) {
    console.log(num);
}


// O/P :- 
// Node.js v18.17.1
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node for_of.js
// red
// green
// blue
// J
// a
// v
// a
// s
// c
// r
// i
// p
// t
// name : moni
// age : 35
// area : BBSR
// 1
// 2
// 3
// 4
// 5
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT>
