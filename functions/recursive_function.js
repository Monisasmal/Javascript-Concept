// A function that calls itself until a condition is met.

function factorial(n){
   if(n===0) return 1;
   return n * factorial(n-1);
}
console.log(factorial(10));

// ✅ Key Points:

// Useful for tasks like tree traversal, factorial, etc.