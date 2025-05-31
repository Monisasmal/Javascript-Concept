// 1️⃣ replace()

// --> Replaces the first occurrence of a substring or matches a regular expression.
// --> Returns a new string (does not modify the original).

let text = "I love JavaScript. JavaScript is fun!";
console.log(text.replace("JavaScript", "Python"));
console.log(text.replace(/javascript/i, "Python"));

// O/P-->
// I love Python. JavaScript is fun!
// I love Python. JavaScript is fun!
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 

// 2️⃣ replaceAll()
// Replaces all occurrences of a substring or regex match.

let sentence = "Hello world! Hello universe!";
console.log(sentence.replaceAll("Hello", "Hi"));
console.log(sentence.replace(/Hello/g, "Hi"));

// O/P-->
// Hi world! Hi universe!
// Hi world! Hi universe!
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// 3️⃣ charAt()

// --> Returns the character at a specific index.
// --> Index starts from 0.

let str = "JavaScript";
console.log(str.charAt(0));
console.log(str.charAt(4));
console.log(str.charAt(100));

// O/P-->
// J
// S

// 4️⃣ charCodeAt()

// Returns the Unicode code of the character at a specific index.

console.log("Hello".charCodeAt(0));
console.log("Moni".charCodeAt(2));

// O/P-->
// 72
// 110
// PS C:\Us

// 5️⃣ trim()

// Removes whitespace from the start and end of a string.

console.log("   Hello Moni   ".trim());

// O/p--<
// Hello Moni

// 6️⃣ Array.from()

// Converts an iterable (like a string, NodeList, Set, or Map) into an array.

let name = "Hello";
let charArray = Array.from(name);
console.log(charArray); 

let numbers = Array.from([1, 2, 3], x => x * 2);
console.log(numbers); 

// O/P-->
// [ 'H', 'e', 'l', 'l', 'o' ]
// [ 2, 4, 6 ]
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 