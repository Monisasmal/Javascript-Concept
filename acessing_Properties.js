// In JavaScript, accessing properties refers to retrieving the values stored in an object’s properties. You can access object properties in two main ways:

// 1. Dot Notation (.)
// Syntax
// Object.propertyName;

let person = {
  name:"mani",
  age:26
}
console.log(person.name); //mani
console.log(person.age); //26

// 2. Bracket Notation ([])
// This is useful when the property name is dynamic (stored in a variable) or contains special characters.

// object["propertyName"];

let persons = {
  "full name" : "mama",
  age:24,
  city: "BBSR"
}
let key = "city" 
console.log(persons["full name"]); //mama
console.log(persons.age); //24
console.log(persons[key]); //BBSR

let scores = {
  100: "Excellent",
  90: "Good",
  80: "Average"
};

console.log(scores[100]);  // Output: Excellent
console.log(scores["90"]); // Output: Good

// --> ✅ Use dot notation (.) for simple, fixed property names.
// --> ✅ Use bracket notation ([]) when:
// --> Property names contain spaces or special characters.
// --> Property names are stored in a variable.
// --> Property names are numbers.
// --> Property names are accessed dynamically (e.g., in a loop).

