// splice()😶

// --> Used to add, remove, or replace elements in an array.
// --> Modifies the original array.

// Syntax
// Array.splice(startIndex,deleteCount, AddItem1, AddItem2);

let removee = [1, 2, 3, 4, 5];
removee.splice(0,2,4);
console.log(removee);

let add = [1, 2, 5];
add.splice(2,0,3,6,7);
console.log(add);

let replacee = [1, 2, 99, 4, 5];
replacee.splice(2,1,3);
console.log(replacee);

// O/P-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> node slice_splice_split.js
// [ 4, 3, 4, 5 ]
// [ 1, 2, 3, 6, 7, 5 ]
// [ 1, 2, 3, 4, 5 ]
// PS C:\Users\user\OneDrive\Desk


// slice() (Does Not Modify Original)

// --> Returns a shallow copy of an array.
// --> Does not modify the original array.

// array.slice(startIndex, LastIndex);

let arr4 = [1, 2, 3, 4, 5];
let slicedArr = arr4.slice(1, 4); 
console.log(slicedArr); 
console.log(arr4); 

// O/P--> 
// [ 2, 3, 4 ]
// [ 1, 2, 3, 4, 5 ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>


// split() (Works on Strings)

// Splits a string into an array based on a given separator.
// Does not modify the original string.

// Syntax
// string.split(separator, limit);

let str = "javaScript is Fun";
let word = str.split(" ");
console.log(word);

let char = str.split("");
console.log(char);

let limit = str.split(" ",2);
console.log(limit);


// O/P-->
// [ 'javaScript', 'is', 'Fun' ]
// [
//   'j', 'a', 'v', 'a', 'S',
//   'c', 'r', 'i', 'p', 't',
//   ' ', 'i', 's', ' ', 'F',
//   'u', 'n'
// ]
// [ 'javaScript', 'is' ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 
