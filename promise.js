// What is Promise in JS?

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// It has three states:

// Pending – Initial state, neither fulfilled nor rejected.

// Fulfilled – The operation was completed successfully.

// Rejected – The operation failed.

function orderFood(order){
  return new Promise((resolve, reject) =>{
    console.log(`your ${order} is preparing.......... `);

    setTimeout(() => {
      const isAvailable = Math.random() >0.3;
      if(isAvailable){
        resolve(`Your ${order} is ready`);
      }else{
        reject(`Sorry is ${order} is out of Stock`);
      }
    },2000)
  })
}

async function processOrder(){
  try{
    let response = await orderFood("pizza");
    console.log("💹", response);
  }catch(err){
    console.log("❌", err);
  }finally{
    console.log(" Thanks for Visting 😀");
  }
}

processOrder();

// O/p-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node promise.js
// your pizza is preparing
// 💹 Your pizza is ready
//  Thanks for Visting 😀
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node promise.js
// your pizza is preparing.......... 
// ❌ Sorry is pizza is out of Stock
//  Thanks for Visting 😀
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT>

// All Methods of JavaScript Promise 

// 1️⃣ new Promise()
// Creates a new Promise that either resolves or rejects.

const myPromise =  new Promise((resolve, reject)=>{
   const response = true;
   if(response){
    resolve("sucess");
   }else{
    reject("not Sucess");
   }
})
console.log(myPromise);

// O/p-->
// Promise { 'sucess' }


// 2️⃣ promise.then()

// -->  Executes when the Promise is resolved (fulfilled).
// -->  Can return another Promise for chaining.

myPromise.then((result) =>{
  console.log(result);
});


// O/p--
// sucess

// 3️⃣ promise.catch()
// --> Executes when the Promise is rejected (failed).


const failedPromise = new Promise((_, reject) => reject("Something went wrong! ❌"));

failedPromise.catch((error) => {
    console.log(error); 
});


// O/p-->
// Something went wrong

// 4️⃣ promise.finally()

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Promise Process Completed! 🎯"));

// O/p-->
//     sucess
// Promise Process Completed! 🎯


// 5️⃣ Promise.all()

// Runs multiple promises in parallel and waits for all to complete.
// If any one fails, it rejects immediately.

const p1 = Promise.resolve("Task 1 done.");
const p2 = new Promise((res,rej) => setTimeout(()=> res("Task2 is done"),2000));
const p3 = Promise.resolve("Task 3 is done");

Promise.all([p1,p2,p3])
.then((result) => console.log(result))
.catch((err) => console.log(err));

// O/p-->
// [ 'Task 1 done.', 'Task2 is done', 'Task 3 is done' ]

// 6️⃣ Promise.allSettled()
// Runs multiple promises in parallel but waits for all to complete (regardless of success or failure).

const p4 = Promise.resolve("Task A done");
const p5 = Promise.reject("Task B failed ❌");
const p6 = Promise.resolve("Task C done");
Promise.allSettled([p4,p5,p6])
.then((result)=> console.log(result));

// O/p-->
[
  { status: 'fulfilled', value: 'Task A done' },
  { status: 'rejected', reason: 'Task B failed ❌' },
  { status: 'fulfilled', value: 'Task C done' }
]

// 7️⃣ Promise.race()
// Resolves/rejects as soon as the first promise completes.

const p7 = new Promise((res)=> setTimeout(()=>res("fastestTask"),1000));
const p8 = new Promise((res)=> setTimeout(()=>res("lowestestTask"),1000));
Promise.race([p7,p8]).then((result)=> console.log(result));

// O/P-->
// fastestTask

// 8️⃣ Promise.any()

// --> Resolves as soon as one promise succeeds.
// --> Ignores rejections unless all fail.

const p9 = Promise.reject("Failed Task 1 ❌");
const p10 = new Promise((res) => setTimeout(() => res("First Successful Task"), 1500));
const p11 = Promise.reject("Failed Task 2 ❌");

Promise.any([p9, p10, p11]).then((result) => console.log(result)); 

// O/p-->
// First Successful Task