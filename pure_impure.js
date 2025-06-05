// Pure vs Impure Functions in JavaScript
// In JavaScript, pure functions and impure functions refer to how functions interact with their environment and whether they produce side effects.

// Pure Function:----
// 1. Produce the same output for same Input
// 2. it has no side effect(dose not midify external veriable, DOM, API call)

function add(a,b){
  return a+b;
}
console.log(add(2,3));
console.log(add(2,3)); // never change

// Impure Function

// 1. It return different output for same Input
// 2. Has side aEffect

let count = 1;
function increment(){
  count++;
  return count;
}
console.log(increment()); //2
console.log(increment()); //3 different o/p for same function call

// function changeColor(color){
//   document.body.style.backgroundColor = color;
// }
// changeColor("pink"); //It changes the global document (side effect).