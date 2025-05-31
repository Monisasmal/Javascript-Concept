// Callback Function

// A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation is completed.

// Why Use Callback Functions?

// ✔ Handles Asynchronous Operations (e.g., fetching data from an API).
// ✔ Allows Reusable Code by making functions more flexible.
// ✔ Improves Readability in event-driven code (e.g., setTimeout, setInterval).

function greet(name,callback){
  console.log(`Hello ${name}`);
  callback();
}
function hii(){
  console.log("hiiiiiiiiiiiiii");
}
greet('moni',hii);

// Callback Function Challenge 🚀

// Problem Statement:

// Write a function fetchUserData that simulates fetching user data from a server after 2 seconds. Once the data is received, it should call a callback function to display the user details.

function fetchedData(callback){
  console.log("Fetching user data...");

  setTimeout(()=>{
    const userData = { name: "John Doe", age: 28, city: "New York" };
    callback(userData);
  },2000);
}

function displayData(user){
  console.log("\nUser Info:");
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`City: ${user.city}`);
}
fetchedData(displayData);

// O/P:---
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> node callback_function.js
// Hello moni
// hiiiiiiiiiiiiii
// Fetching user data...

// User Info:
// Name: John Doe
// Age: 28
// City: New York
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions>