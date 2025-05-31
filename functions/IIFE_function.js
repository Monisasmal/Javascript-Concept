// IIFE (Immediately Invoked Function Expression) 

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined.

(function(){
  console.log("Hey i ma IIFE")
})();

// IIFE with Parameters

(function(name){
  console.log(`Hello ${name}`)
})('moni');

// IIFE Returning a Value

const result = (function(){
return "i m a returning IIFE"
})();
console.log(result);

// O/p:---

// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> node IIFE_function.js
// Hey i ma IIFE
// Hello moni
// i m a returning IIFE
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> 


// IIFE Challenge: Create a Countdown Timer!

// Challenge Description:
// Write an IIFE function that starts a countdown from 5 to 1 and logs each number every second. After reaching 1, it should log "Time's up!" and stop.

(function countDown(){
  console.log("Start the Count down....")
  let count = 5;

  const timer = setInterval(()=>{
    console.log(count);
    count--;
    if(count === 0){
      console.log("times up");
      clearInterval(timer);
    }
  },1000)

})();

// O/P:--
// Start the Count down....
// 5
// 4
// 3
// 2
// 1
// times up
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\functions> 