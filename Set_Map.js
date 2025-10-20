// Set → unique values only.

// Map → key-value pairs (keys can be any type).

let set = new Set([1,2,2,3]);
console.log(...set); // 1,2,3

let map = new Map();
map.set("name", "John");
map.set("age", 25);
console.log(map.get("name")); // John
