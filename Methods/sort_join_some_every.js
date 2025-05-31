// 1. some() → Checks if at least one element passes a condition

// --> Returns true if at least one element satisfies the condition. Otherwise, returns false.
// --> Does not modify the original array.

let numbers = [1, 3, 5, 8];
let isEven = numbers.some(num => num % 2 === 0);
console.log(isEven);

// O/P -->
// true
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// 2. every() → Checks if all elements pass a condition

// --> Returns true if all elements satisfy the condition. Otherwise, returns false.
// --> Does not modify the original array.

let number = [2, 4, 6, 8];
let checkEven = number.every(num => num %2 === 0);
console.log(checkEven);

// O/P-->
// true
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 

// 3. join() → Converts array to a string

// --> Joins all elements into a single string, separated by a specified delimiter.
// --> Does not modify the original array.

let words = ["Hello", "World", "JavaScript"];
let result = words.join("");
console.log(result);

// O/P-->
// HelloWorldJavaScript

// 4. concat() → Combines multiple arrays

// --> Returns a new array (does not modify original arrays).

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log(merged);
console.log(arr1);
console.log(arr2);

// O/P-->
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 

// 5. sort() → Sorts an array in place

// --> Modifies the original array.
// --> Sorts elements as strings by default.

let fruits = ["Banana", "Apple", "Mango"];
console.log(fruits.sort());

let numberr = [10, 5, 40, 25];
console.log(numberr.sort((a,b) => b - a));

// O/P-->
// [ 'Apple', 'Banana', 'Mango' ]
// [ 40, 25, 10, 5 ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// 6. reverse() → Reverses an array in place

// Modifies the original array.

let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

// O/P-->
// [ 5, 4, 3, 2, 1 ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>




