// Hoisting 😊🤨

// Hoisting in JavaScript is a behavior where variable and function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase before code execution. This means you can use variables and functions before they are declared in the code.

greet();
function greet(){
  console.log("Hello Moni");
}
// Variable Declarations (var, let, const)

// --> var is hoisted but initialized with undefined.
// --> let and const are hoisted but not initialized (they remain in the "Temporal Dead Zone" until declared).


console.log(a);
var a = 20;
console.log(a);

// What is Temporal Dead Zone?

// console.log(ab); // Refference Error
let ab= 60;
console.log(ab);


// 1	Hoist let ab -->  Variable ab exists but is uninitialized (TDZ starts).
// 2	console.log(ab)	--> ❌ ReferenceError (TDZ is active).
// 3	ab = 60;	--> ✅ ab is now initialized, TDZ ends.
// 4	console.log(ab);--> 	✅ Prints 60.

// console.log(abc); //Refference Error
const abc = 80;
console.log(abc);


// console.log(sayHello);   //Refference Error
const sayHello = function(){
  console.log("hello");
}
sayHello();

// console.log(arrow); //Refference Error
let arrow = () =>  console.log('arrow function')
arrow();

// O/p-->
// Hello Moni
// undefined
// 20
// 60
// 80
// hello
// arrow function
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT>

