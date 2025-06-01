// filter() Method 😁😄😃

// The filter() method is used to iterate over an array and return a new array containing only the elements that satisfy a given condition.

// array.filter(callback(currentValue, index, array), thisArg)

// I. Filtering Even Numbers

const number = [1, 2, 3, 4, 5, 6, 7];
const evenNumber = number.filter((num) => num % 2 === 0);
console.log(evenNumber);

// II. Filtering Objects Based on Property

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

const adults = users.filter((user) => user.age >= 18);
console.log(adults);

// III.  Filtering Strings

const words = ["apple", "banana", "grape", "kiwi"];
const shortWords = words.filter((word) => word.length <= 4);
console.log(shortWords);

// IV. Filtering Based on an Index

const numbers = [10, 20, 30, 40, 50];
const filteredNumbers = numbers.filter((num, index) => index % 2 === 0);
console.log(filteredNumbers);

// V. Returning Formatted Strings

const numberr = [10, 20, 30, 40, 50];
const filterNumber = numberr
  .map((Element, index) => `${index}: ${Element}`)
  .filter((_, idx) => idx % 2 === 0);
console.log(filterNumber);


// O/P: --
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node filter_method.js
// [ 2, 4, 6 ]
// [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 } ]
// [ 'kiwi' ]
// [ 10, 30, 50 ]
// [ '0: 10', '2: 30', '4: 50' ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 