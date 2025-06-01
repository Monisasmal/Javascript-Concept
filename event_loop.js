// Event Loop

// The Event Loop in JavaScript is a crucial mechanism that handles asynchronous operations and ensures non-blocking execution. Since JavaScript is single-threaded, meaning it can execute only one operation at a time, the event loop helps in managing multiple tasks efficiently.

// How the Event Loop Works
// The event loop continuously monitors and coordinates between different components:

// 1. Call Stack (Execution Stack):--
// -->..  This follows a Last In, First Out (LIFO) structure.
// -->.. Whenever a function is invoked, it is pushed onto the stack.
// -->.. When execution is complete, it is popped off the stack.


// 2. Web APIs (Browser APIs or Node.js APIs):--
// -->.. Certain functions (like setTimeout, fetch, DOM events, and Promises) are handled by the browser or Node.js runtime.
// -->.. These functions run asynchronously and do not block the main thread.

// 3. Callback Queue (Task Queue or Message Queue)
// -->.. Stores callback functions from asynchronous operations like setTimeout, setInterval, and event listeners.
// -->.. Uses First In, First Out (FIFO) order.

// 4. Microtask Queue (or Job Queue)
// -->.. Stores callbacks from Promises (.then, catch, finally) and MutationObservers.
// -->..Has higher priority than the callback queue.

// 5. Event Loop Mechanism
// -->.. The event loop checks if the Call Stack is empty.
// -->.. If empty, it first processes all microtasks.
// -->.. Then it picks tasks from the callback queue and executes them one by one.

console.log("Start");

setTimeout(() => {
  console.log("Timeout Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Callback");
});

console.log("End");

// O/p-->
// Start
// End
// Promise Callback
// Timeout Callback

// 2.

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
});

(async () => {
  console.log("Inside async function");
  await Promise.resolve();
  console.log("After await");
})();

console.log("End");

// O/p-->
// Start
// Inside async function
// End
// Promise 1
// After await
// setTimeout
// setImmediate


console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

Promise.resolve().then(() => {
  console.log("Promise 1");
});

process.nextTick(() => {
  console.log("process.nextTick 1");
});

(async () => {
  console.log("Inside async function");
  await Promise.resolve();
  console.log("After await");
})();

process.nextTick(() => {
  console.log("process.nextTick 2");
});

console.log("End");

// O/p-->
// Start
// Inside async function
// End
// process.nextTick 1
// process.nextTick 2
// Promise 1
// After await
// setTimeout
// setImmediate


// Priority Order in JavaScript Event Loop
// 1️⃣ Synchronous Code (Call Stack) (Highest)
console.log("Synchronous code");
// 2️⃣ process.nextTick() (Next Tick Queue)
process.nextTick(() => console.log("nextTick"));
// 3️⃣ Microtasks (Promises, queueMicrotask())
Promise.resolve().then(() => console.log("Promise"));
queueMicrotask(() => console.log("Microtask"));
// 4️⃣ Timers (setTimeout, setInterval)
// Executes after Microtasks.
setTimeout(() => console.log("setTimeout"), 0);
// 5️⃣ setImmediate() (Only in Node.js)
// Runs after timers (setTimeout) and I/O tasks.
setImmediate(() => console.log("setImmediate"));
// 6️⃣ I/O Operations (File System, Network, Database)
// Runs after setImmediate() in the event loop cycle.
const fs = require("fs");
fs.readFile("file.txt", () => console.log("File Read"));


// Complete Priority Order (Highest to Lowest)
// 1. Synchronous Code (Call Stack)
// 2. process.nextTick() (Next Tick Queue)
// 3. Microtasks (Promises, queueMicrotask())
// 4. Timers (setTimeout, setInterval)
// 5. setImmediate() (Node.js only)
// 6. I/O Operations (File System, Network)


