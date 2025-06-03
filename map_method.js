// map() Method  😊😊😉

// The map() method is used to iterate over an array and apply a function to each element, creating a new array with the transformed elements. It does not modify the original array.

// Syntax
// array.map(callback(currentValue, index, array), thisArg);

// 1. callback: A function executed for each element in the array.
// 2. currentValue: The current element being processed.
// 3. index (optional): The index of the current element.
// 4. array (optional): The original array being processed.
// 5. thisArg (optional): A value to use as this inside the callback function.

// I. Doubling Numbers

const number = [1,2,3,4,5];
const double = number.map(function(ele){
  return ele*2;
})
console.log(double);

// II. Extracting Specific Properties from Objects

const user = [
  {name:'moni', age:24},
  {name: 'mama', age:28},
  {name: 'nigu', age: 26}
]

const names = user.map(ele => ele.name);
console.log(names);

// III.  Mapping Indexes

const fruits = ["apple", "banana", "cherry"];

const result = fruits.map((ele,index) => `${index + 1} - ${ele}`);
console.log(result);

// O/p:-- 

// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node map_method.js
// [ 2, 4, 6, 8, 10 ]
// [ 'moni', 'mama', 'nigu' ]
// [ '1 - apple', '2 - banana', '3 - cherry' ]
