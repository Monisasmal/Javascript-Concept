// Execution Context in JavaScript

// In JavaScript, an Execution Context (EC) is an environment where JavaScript code is executed. It determines what variables and functions are accessible at a given point in the code.

// Types of Execution Contexts

// Global Execution Context (GEC):---

// --> Created when JavaScript starts execution.
// --> Contains global variables and functions.
// --> this in the global context refers to the window object (in browsers) or global (in Node.js).

// Function Execution Context (FEC)

// --> Created whenever a function is invoked.
// --> Each function has its own execution context.

// --> Contains:
// --> .. Local variables
// --> .. Function arguments
// --> .. The function's own execution scope

// Eval Execution Context

// --> Created when code inside eval() is executed (rarely used and not recommended).

// Phases of Execution Context:---------------
// Each execution context goes through two phases:-----------

// 1. Creation Phase (Memory Allocation)::--

// --> A Global Execution Context is created for the script.
// --> A new execution context is created for each function call.
// --> The variable environment is set up:
// --> ..  var variables are initialized as undefined.
// --> .. Function declarations are stored in memory.
// --> .. this keyword is set.
// --> Scope chain is established.

// 2. Execution Phase (Code Execution):---

// --> The JavaScript engine executes the code line by line.
// --> Assigns values to variables.
// --> Executes function calls and creates new execution contexts for them.

// Execution Context Stack (Call Stack):-- 

// --> JavaScript maintains an Execution Stack (Call Stack) to manage multiple execution contexts.
// --> The Global Execution Context is the first one pushed onto the stack.
// --> Function calls create new execution contexts, which are pushed onto the stack.
// --> When a function finishes execution, its context is popped from the stack.

function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
}

first();
console.log("Global Execution");



// Step-by-Step Execution:--

// 1. Global Execution Context (GEC) is created
// ....--> JavaScript starts execution.
// ....--> first and second functions are stored in memory.

// 2. first() is called
// ....--> A new Function Execution Context (FEC) for first() is created.
// ....--> Inside first(), console.log("First function") executes.

// 3. second() is called inside first()

// ....--> A new Function Execution Context (FEC) for second() is created.
// ....--> Inside second(), console.log("Second function") executes.
// ....--> second() finishes, and its execution context is popped from the Call Stack.

// 4. first() finishes execution

// ....--> Its execution context is removed from the Call Stack.

// 5. Back to Global Execution Context

// ....--> console.log("Global Execution") executes.

// Call Stack Flow::--->

// 1. Global Execution Context (GEC) -> first() is called.
// 2. first() Execution Context -> second() is called.
// 3. second() Execution Context -> executes and is popped.
// 4. first() Execution Context -> finishes and is popped.
// 5. Global Execution Context -> executes the remaining code.

// O/p-->
// First function
// Second function
// Global Execution