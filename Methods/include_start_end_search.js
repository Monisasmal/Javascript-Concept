// 1️⃣ includes()

// --> Checks if a string contains a specific substring.
// --> Returns true or false.
// --> Case-sensitive.

let text = "Hello JavaScript World!";
console.log(text.includes('Hello'));
console.log(text.includes("python"));

// O/P-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> node include_start_end_search.js
// true
// false

// 2️⃣ startsWith()

// --> Checks if a string begins with a specific substring.
// --> Returns true or false.
// ==> Case-sensitive.
// ==> Can accept a position index to check from a specific location.

let message = "Welcome to coding!";
console.log(message.startsWith("Welcome"));
console.log(message.startsWith("to"));
console.log(message.startsWith("coding", 11));

// // O/P-->
// true
// false
// true
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 

// 3️⃣ endsWith():---

// --> Checks if a string ends with a specific substring.
// --> Returns true or false.
// --> Case-sensitive.
// --> Can accept a length parameter to check within a specific length.

let filename = "document.pdf";
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith("document"));
console.log(filename.endsWith("document", 8));

// O/P-->
// true
// false
// true
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// 4️⃣ lastIndexOf()

// --> Returns the last occurrence index of a substring in a string.
// --> If not found, returns -1.
// --> Case-sensitive.

let sentence = "JavaScript is amazing, and JavaScript is powerful!";
console.log(sentence.lastIndexOf("JavaScript"));
console.log(sentence.lastIndexOf("Python"));

// O/P-->
// 27
// -1
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// 5️⃣ search()

// --> --> Searches for a pattern (string or regular expression) in a string.
// --> Returns the first match's index or -1 if not found.

let paragraph = "I love coding in JavaScript!";
console.log(paragraph.search("coding")); 
console.log(paragraph.search(/JavaScript/));
console.log(paragraph.search("Python"));

// O/P-->
// 7
// 17
// -1
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// 6️⃣ substring()

// --> Extracts a part of a string between two indices.
// --> The second parameter is optional (if omitted, extracts till the end).
// --> Does not modify the original string.
// --> If the start index is greater than the end index, it swaps them.

let str = "JavaScript";
console.log(str.substring(0, 4)); 
console.log(str.substring(4)); 
console.log(str.substring(5, 2)); 
console.log(str.substring(3, 3)); 

// O/p-->
// Java
// Script
// vaS

