// for...in Loop in JavaScript

// The for...in loop is used to iterate over the keys (properties) of an object.

// Syntax
// for (let key in object) {
  // code to execute for each key
// }


// Iterating Over an Object


const person = {
  name:'moni',
  age:25,
  city:'BBSR'
}

for(let key in person){
  console.log(`${key} : ${person[key]}`);
}

// Explanation
// 1. The for...in loop iterates over the keys (name, age, city).
// 2. person[key] gives the value of each key (Alice, 25, New York).

// Iterating Over an Array (Not Recommended)

const colors = ['red', 'green', 'blue'];

for(let key in colors){
  console.log(key,colors[key]);
}

// O/P - Node.js v18.17.1
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node for_in.js
// name : moni
// age : 25
// city : BBSR
// 0 red
// 1 green
// 2 blue
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 



