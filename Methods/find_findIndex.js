// Array Methods
// In JavaScript, find() and findIndex() are array methods used to search for elements based on a given condition. Here's how they work:

// 1. find()
// --> Returns the first element in the array that satisfies the condition.
// --> If no element matches, it returns undefined.

// Syntax
// Array.find(callback(curEle, index, arr), thisArgument);

const numbers = [10, 20, 30, 40, 50];
const result = numbers.find(ele => ele > 25);
console.log(result);

// 2. findIndex()
// -->  Returns the index of the first element that satisfies the condition.
// -->  If no element matches, it returns -1.

const number = [10, 20, 30, 40, 50];
const results = number.findIndex(ele => ele > 25);
console.log(results);


const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const user = users.find(u => u.name === 'Bob');
console.log(user);

const userIdx = users.findIndex(u => u.name === "Alice");
console.log(userIdx);

// O/P:------
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> node find_findIndex.js
// 30
// 2
// { id: 2, name: 'Bob' }
// 0
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 