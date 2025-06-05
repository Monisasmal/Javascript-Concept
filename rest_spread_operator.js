// 1️⃣ Spread Operator (...)

// The spread operator (...) is used to expand elements of an iterable (like an array or object) into individual elements.

// Copying Arrays

let arr1 = [1,2,3,4,5];
let arr2 = [...arr1];
let arr3 = arr2;
arr3.push(6);
console.log(arr2);
console.log(arr1);
console.log(arr3); // shallow copy

// O/p-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node rest_spread_operator.js
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5, 6 ]

// Merging Arrays

let arrA = [1,2,3,7];
let arrB = [4,5,6,8];
let merge = [...arrA, ...arrB];
console.log(merge);

// O/p-->
[ 1, 2, 3, 7,
  4, 5, 6, 8]

// Spreading Strings into Characters

let word = "Helllllllo";
let character = [...word];
console.log(character);

// O/p-->
[
  'H', 'e', 'l', 'l',
  'l', 'l', 'l', 'l',
  'l', 'o'
]

// Without spread (Object.assign()):
let arr5 = {a:1, b:2, c:3};
let arr4 = Object.assign({d:4}, arr5);
console.log(arr4);
console.log(arr5);

// O/P-->
// { d: 4, a: 1, b: 2, c: 3 }
// { a: 1, b: 2, c: 3 }


// 2️⃣ Rest Operator (...)

// The rest operator (...) is used to gather multiple values into a single variable (array or object).

// Function Arguments (Rest Parameters)

function sum(...numbers){
  return numbers.reduce((accu,ele) => ele + accu, 0);
}
console.log(sum(1,2,23,6));
console.log(sum(45,78,0));

// O/p-->
// 32
// 123

// Extracting Values from Arrays
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);
console.log(...rest);


// O/P->
// 10
// 30 40 50


// Extracting Values from Objects

let person = { name: "John", age: 25, country: "USA" };
let{name, ...details} = person;
console.log(name);
console.log(details);

// O/p-->
// John
// { age: 25, country: 'USA' }
// PS C:\Users\user\OneDrive\Desktop\JS CONCEP

// Does Both Rest and Spread Operator Create a New Array? 🤔
// The answer is:
// ✅ The Spread Operator (...) creates a new array.
// ✅ The Rest Operator (...) collects values into a new array.

