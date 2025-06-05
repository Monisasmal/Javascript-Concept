// In JavaScript, synchronous and asynchronous programming define how code execution flows.

// Synchronous 
// 1. Code executes line by line, in a blocking manner
// 2. If one operation takes time (e.g., a loop or network request), the rest of the code must wait.

console.log(1);
console.log(2);
console.log(3);

// Asynchronous 

// 1. Code execution does not block other operations.
// 2. Some tasks (like fetching data, reading files, or waiting for user input) happen in the background, and the rest of the code continues executing.
// 3. Uses callbacks, Promises, or async/await.

console.log("step 1");
setTimeout(()=>{
  console.log("after delay");
});
console.log("step 3");

// step 1
// step 3
// after delay
// PS C:\Users\user\OneDrive\Desktop
