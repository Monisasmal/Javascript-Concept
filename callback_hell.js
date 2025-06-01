// Callback Hell in JavaScript

// Callback Hell (also known as Pyramid of Doom) occurs when multiple asynchronous functions are nested inside each other, making the code difficult to read and maintain. It happens when callbacks are used excessively, leading to deeply nested structures.

// --> Example of Callback Hell

// 1. Let's assume we have a scenario where we need to perform multiple asynchronous operations in sequence:

// 2. Fetch user data.

// 3. Get the user's order details.

// 4. Process the payment.

// 5. Send a confirmation email.

function fetchUser(userId, callback){
  setTimeout(()=>{
    console.log("user data is fetched");
    callback({userId, name:"moni"});
  },1000)
}
function getOrderDetails(user, callback){
  setTimeout(()=>{
    console.log(`order details fetched for ${user.name}`);
    callback({orderId:1, amount:250})
  },1000)
}
function processPayment(order,callback){
  setTimeout(()=>{
    console.log(`your payment of $${order.amount} processed`)
    callback("payment done")
  },1000)
}
function sendComformation(email, callback){
  setTimeout(()=>{
    console.log(`comformation email sent to${email}`);
    callback('email send');
  },1000)
}

fetchUser(1,(user)=>{
  getOrderDetails(user, (order)=>{
    processPayment(order,(paymentStatus)=>{
      sendComformation("mani@gmail.com",(comformation)=>{
        console.log("order placed sucessfullly");
      })
    })
  })
});


// Why is this a Problem?

// 1. Hard to Read – The code becomes difficult to follow due to deep nesting.

// 2. Difficult to Maintain – Making changes or handling errors becomes complex.

// 3. Error Handling Issues – Managing errors at each nested level is cumbersome.

// Using Promises to Avoid Callback Hell

function fetchUser(userID){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("user data Fetched")
    resolve({userID, name:"mama"});
    },1000)
    
  })
}
function getOrderDetails(user){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`order details fetched for ${user.name}`)
      resolve({orderId:12, amount:240})
    },1000)
  })
}
function processPayment(order){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`pymnet of order ${order.amount} processed`);
      resolve("payment sucessfull")
    },1000)
  })
}
function sendComformation(email){
 return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log(`email sent to ${email}`);
    resolve("sent email")
  })
 })
}

fetchUser(1)
.then(getOrderDetails)
.then(processPayment)
.then(()=> sendComformation("mani@gamil.com"))
.then(()=> console.log("Order placed sucessfully"))
.catch((err)=> console.log(`error: ${err}`));

// Better representation of using try catch and finally

async function processOrder(){
  try{
  let user = await fetchUser(1);
  let order = await getOrderDetails(user);
  await processPayment(order);
  await sendComformation("mama@gmaili.com");
  console.log("order placed sucessfully");
  } catch(err){
    console.log(`Error:${err}`)
  }
};
processOrder();

// O/p-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node callback_hell.js
// user data Fetched
// order details fetched for mama
// pymnet of order 240 processed
// email sent to mama@gmaili.com
// order placed sucessfully
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 