// Named Functions 😁😃

// A named function in JavaScript is a function that has a specific name when it is declared. Named functions improve readability and debugging because errors will reference the function by name.

// Syntax:

// function functionName(parameter){
//   return value;
// }

function greet(name){
  return `Hello ${name}`;
}
console.log(greet('moni'));

// Calculate Total Price of a Shopping Cart

const cart = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Headphones", price: 50, quantity: 2 },
  { name: "Mouse", price: 25, quantity: 1 }
];

function cartCal(cartItem){
  let total = 0;
  for(let cart of cartItem){
    total += cart.price * cart.quantity
  }
  return total;
}
console.log("Total Price: $" + cartCal(cart));

// O/p:--

// Node.js v18.17.1
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> node named_function.js
// Hello moni
// Total Price: $925
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> 