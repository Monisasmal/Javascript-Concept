// 👉 Definition:

// Curring is a technique in javascript where a function with multiple argument is transformed into  sequence of functions, each taking a argument at a Time.

// Why use currying?

// Reusability → You can create specialized functions.
// Readability → Makes code expressive in functional programming.
// Partial application → You can “preload” some arguments and reuse later.

// Example 1: Normal function

function sum (a,b,c){
return a+b+c;
}
console.log(sum(2,3,4));

// Example 2: Curried version

function sum(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
console.log(sum(2)(3)(4));

// Using Arrow Functions (shorter)

const sum = a => b => c => a+b+c;
console.log(sum(1)(2)(3));