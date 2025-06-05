// reduce() Method 😫🥱

// The reduce() method is used to process an array and return a single value by applying a reducer function on each element. It is useful for operations like summing numbers, flattening arrays, grouping objects, and more.

// Syntax
// Array.reduce(callback(accu,curEle,index,arr),index);

// 1. callback: A function executed for each element in the array.
// 2. accumulator: Stores the accumulated result (updated in each iteration).
// 3. currentValue: The current element being processed.
// 4. index (optional): The index of the current element.
// 5. array (optional): The original array.
// 6. initialValue (optional but recommended): The starting value of the accumulator.

// Sum of Numbers

const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((accu,ele) => accu + ele, 0);
console.log(sum);

// Finding Maximum Value

const number = [5, 12, 8, 20, 7];
const findMax = number.reduce((accu,ele) => (ele > accu ? ele : accu), number[0]);
console.log(findMax);

// Counting Occurrences in an Array

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((accu,ele) =>{
  accu[ele] = (accu[ele] || 0) + 1;
  return accu;
},{});
console.log(count);

// Flattening an Array

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened);

// Grouping Data by Property

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" }
];

const exmp = users.reduce((accu,ele) =>{
  if(!accu[ele.role]) accu[ele.role] = [];
  accu[ele.role].push(ele.name);
  return accu;
},{});
console.log(exmp);

// O/P:--
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node reduce_method.js
// 150
// 20
// { apple: 3, banana: 2, orange: 1 }
// [ 1, 2, 3, 4, 5, 6 ]
// { admin: [ 'Alice', 'Charlie' ], user: [ 'Bob', 'David' ] }
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 