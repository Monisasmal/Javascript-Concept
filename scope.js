// Scope

// In JavaScript, scope refers to the accessibility and visibility of variables in different parts of the code. JavaScript has the following types of scope:

// 1. Global Scope:-- 
// --> A variable declared outside any function or block has global scope.
// --> It can be accessed anywhere in the script.
// --> Global variables are attached to the window object in browsers.

let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Accessible inside function
}

showGlobal();
console.log(globalVar); // Accessible outside function


// 2. Local (Function) Scope:-->

// --> A variable declared inside a function is local to that function.
// --> It cannot be accessed outside the function.

function localScope(){
  let exmp ="Moniiiiiiiiii";
  console.log(exmp);
}
localScope();
// console.log(exmp); // refereence Error

// 3. Block Scope (with let and const):--

// --> Variables declared with let or const inside {} (a block) are block-scoped.
// --> They exist only within that block.
// --> var does NOT have block scope, only let and const do.

{
  let greet = "Hello mama";
  console.log(greet);
}
// console.log(greet); // Reference Error

// 4. Lexical (Closure) Scope:--
// --> Inner functions can access variables from outer functions (lexical environment).
// --> Used in closures.

function outerFunction(){
  let user = "Hello javascript";
  function innerFunction(){
    console.log(user);
  }
  innerFunction();
}
outerFunction();

function counter(){
  let count = 0;
  // console.log(count);
  function increment(){
    console.log(count);
    count++;
    console.log(count);
    console.log(count);
    console.log(count);
    // console.log(count);

  }
  return increment;
}
const incre = counter();
incre();
incre();

// O/p-->
// 0
// 1
// 1
// 1
// 1
// 2
// 2
// 2
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 

// 5️⃣ Module Scope (ES6 Modules):--

// --> Variables inside a module are not accessible globally unless exported.
// --> We use export and import to share variables/functions between files.