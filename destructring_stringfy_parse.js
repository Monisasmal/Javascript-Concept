// Array Destructuring

// Array destructuring is a feature in JavaScript that allows you to extract values from an array and assign them to variables in a more concise way.

const example = [1,2,3,5,6];
const[a,...rest] = example;
console.log(a);
console.log(...rest);

// swapping 2 number 

let x = 10, y = 20;
[x,y] = [y,x];
console.log(x);
console.log(y);

function getData(){
  return [40.456, - 80.345];
}
const [latitude, longitude] = getData();
console.log(latitude,longitude);

// O/p-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node destructring_this_stringfy_parse.js
// 1
// 2 3 5 6
// 20
// 10
// 40.456 -80.345
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT

// 1️⃣ JSON.stringify() – Convert Object to JSON String

// --> Used to convert a JavaScript object/array into a JSON string.

// --> Why? Useful when sending data over a network or storing it in localStorage.

const user = {
  name: "John",
  age: 25,
  city: "New York"
};
const jsonString = JSON.stringify(user, null, 2);
console.log(jsonString);

// O/P-->
// {
//   "name": "John",
//   "age": 25,
//   "city": "New York"
// }

// 2️⃣ JSON.parse() – Convert JSON String to JavaScript Object

// --> Used to convert a JSON-formatted string back into a JavaScript object.

// --> Why? Useful when receiving data from an API or localStorage.

const jsonData = '{"name":"John","age":25,"city":"New York"}';
const userObj = JSON.parse(jsonData);
console.log(userObj.name);
console.log(userObj.city);

// O/p -->
// John
// New York


// Storing & Retrieving Data from localStorage

// const user1 = { name: "Alice", score: 100 };

// localStorage.setItem("userData", JSON.stringify(user1));
// const storedData = JSON.parse(localStorage.getItem("userData"));
// console.log(storedData.name);
