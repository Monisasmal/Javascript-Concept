// 1️⃣ setTimeout

// Executes a function once after a specified delay.

console.log("Before setTimeout");
 setTimeout(()=>{
  console.log("hey its setTimeout")
 },1000);
 console.log("After setTimeout");

//  O/p-->
// Before setTimeout
// After setTimeout
// hey its setTimeout
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node s

 let timer = setTimeout(()=>{
  console.log("it's about clearTimeOut");
 },2000);
 clearTimeout(timer); // cancel the timer

//  2️⃣ setInterval
// Executes a function repeatedly at a specified interval.

let count = 0;
let timeInerval = setInterval(()=>{
         count++;
         console.log(`excute ${count}`);
         if(count ===  5){
          clearInterval(timeInerval);
         }
},1000);

// O/p-->
// excute 1
// excute 2
// excute 3
// excute 4
// excute 5
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 

let intervalId = setInterval(()=>{
  console.log("its setInterval")
},1000);
setTimeout(()=>{
 clearInterval(intervalId);
 console.log("Interval cleard in setTimeOut")
},5000)

// O/p-->
// its setInterval
// its setInterval
// its setInterval
// its setInterval
// Interval cleard in setTimeOut
// PS C:\Users\user\OneDrive\Desktop\JS CONCEP