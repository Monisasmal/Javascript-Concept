// Higher-Order Functions

// A higher-order function (HOF) is a function that takes another function as an argument or returns a function as its output.

// ✅ Code Reusability → Reduces redundancy.
// ✅ Cleaner & More Readable Code → No need for loops, just pass functions.
// ✅ Functional Programming → Encourages modular code with functions like .map(), .filter(), .reduce().

// Higher-Order Function Taking a Function as an Argument

const numbers = [1, 2, 3, 4, 5];

const square = numbers.map(function(num) {
  return num * num;
})
console.log(square);

// Higher-Order Function Returning a Function
// A function that returns another function is also a higher-order function.

function multiplyer(fact){
  return function(num){
    return num*fact
  }
}
const double = multiplyer(5);
const triple = multiplyer(6);

console.log(double(4));
console.log(triple(5));

// O/P:--
// Node.js v18.17.1
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> node higherorder_functions.js
// [ 1, 4, 9, 16, 25 ]
// 20
// 30
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> 