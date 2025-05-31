// indexOf()------>

// The indexOf() method is used to find the first occurrence of a specified element in an array or string.
 

// Syntax
// array.indexOf(searchElement, fromIndex);

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.indexOf(30)); 
console.log(numbers.indexOf(100)); 

let nums = [1, 2, 3, 2, 5];

console.log(nums.indexOf(2)); 
console.log(nums.indexOf(2, 2));  //(search starts from index 2)

let text = "JavaScript is awesome";

console.log(text.indexOf("is")); 
console.log(text.indexOf("Python"));

// O/P-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> node indexOf_case_include.js
// 2
// -1
// 1
// 3
// 11
// -1
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods

// Feature            |  indexOf()
// Returns	          |  Index of first match, or -1 if not found
// Searches           |	 Left to right
// Case-sensitive?    |	 ✅ Yes
// Works on	          |  Arrays & Strings
// Mutates original?  |	 ❌ No


//  toUpperCase() & toLowerCase()

// Syntax

// String.toUppercase();
// String.toLowercase();

let upCase = "convert to uppercase";
console.log(upCase.toUpperCase());

let lowCase = "CONVERT TO LOWER CASE";
console.log(lowCase.toLowerCase());


// match()

// The match() method is used to search for a pattern in a string using a regular expression and returns an array of matches.

// Syntax

// String.match(regex);

let sentence = "Hello Manaswini";
let vowel = sentence.match(/[aeiou]/gi);
console.log(vowel);

// O/p:--
// [ 'e', 'o', 'a', 'a', 'i', 'i' ]

// Part	                 |  Meaning
// / ... /	             |  Defines a regular expression.
// [aeiou]	             |  Matches any vowel (a, e, i, o, u). The square brackets [] define a character set, meaning any                         one of these characters will match.
// g (global)            |	Finds all matches in the string instead of stopping at the first match.
// i (case-insensitive)  |	Makes it case insensitive, so it matches both uppercase and lowercase vowels (A, E, I, O, U).


// Check if a word exists

let sentence2 = "i love Programming";
let result1 = sentence2.match(/love/);
let result2 = sentence2.match(/hate/);

console.log(result1);
console.log(result2);

// O/P:--
// [ 'love', index: 2, input: 'i love Programming', groups: undefined ]
// null

// matchAll()
// The matchAll() method returns an iterator containing all matches of a regular expression, including capture groups.

// Syntax
// String.matchAll(regex);

let data = "Price: $30, Discount: $5, Total: $25";
let regex = /\$(\d+)/g;
let matches = Array.from(data.matchAll(regex));
console.log(matches);

// O/P:-- 
// [
//   [
//     '$30',
//     '30',
//     index: 7,
//     input: 'Price: $30, Discount: $5, Total: $25',
//     groups: undefined
//   ],
//   [
//     '$5',
//     '5',
//     index: 22,
//     input: 'Price: $30, Discount: $5, Total: $25',
//     groups: undefined
//   ],
//   [
//     '$25',
//     '25',
//     index: 33,
//     input: 'Price: $30, Discount: $5, Total: $25',
//     groups: undefined
//   ]
// ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 

// Part	     | Meaning
// / ... /	 | The slashes define the start and end of a regular expression.
// \$	       | Matches the dollar sign ($). The backslash (\) is used to escape it because $ has a special meaning in regex (it usually represents the end of a string).
// (\d+)     |	Capturing group that matches one or more digits (\d+).
// g (flag)  |	Global flag—finds all matches instead of stopping at the first match.

