// What is an Anonymous Function?

// An anonymous function is a function that does not have a name when it is defined. Instead of using a function declaration with a name, it is often assigned to a variable or used as an argument in another function.

const greet = function(name){
  return `hello ${name}`;
}
console.log(greet('moni'));

// Anonymous Function as a Callback

setTimeout(function(){
  console.log('message run after 3 sec');
},3000);

// Anonymous Function in Array Methods

const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(function(num){
  return num*num;
});
console.log(square);

// Immediately Invoked Function Expression (IIFE)

(function(){
  console.log("this is a IIFE")
})();

// Arrow Functions: Modern Anonymous Functions.

const result = (name) => `hello ${name}`;
console.log(result('moni'));



// O/P:--

// S C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> node anonymous_functions.js
// hello moni
// [ 1, 4, 9, 16, 25 ]
// this is a IIFE
// hello moni
// message run after 3 sec
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> 