// What is this in JavaScript?

// In JavaScript, this refers to the object that is executing the current function. Its value depends on where and how the function is called.

// 1️⃣ Global Context

console.log(this); // In browsers: `window`, In Node.js: `global`

// "use strict";
 console.log(this); // undefined

//  function show(){
//   console.log(this);
//  }
//  show(); // In browsers: `window`, In Node.js: `global`

//  "use strict";
//  function show(){
//   console.log(this);
//  }
//  show(); // undefined

//  this Inside an Object Method

const person = {
  name : "moni", 
  greet(){
    console.log(this.name); // `this` refers to `person`
  }
}
person.greet();

// Op-->
// moni

// this Inside a Constructor Function
// When using a constructor function, this refers to the new object being created.

function persons(name){
  this.name = name;
}
const user = new persons("mama");
console.log(user.name);

// O/p-->
// mama

// this Inside an Arrow Function

// Arrow functions do not have their own this. Instead, they inherit this from their surrounding scope.

const obj = {
  name: 'moni',
  greet: function(){
    const arrowFun = () =>{
      console.log(this.name);
    }
     arrowFun();
  }
}
obj.greet();

// O/p-->
// moni

// Scenario: Managing a Shopping Cart 🛒

const shoppingCart = {
  item:[],
  addItem(name,price){
    this.item.push({name,price});
    console.log(`${name} add to the cart`)
  },
  calculateCart(){
    return this.item.reduce((total,item) => total+item.price,0 );
  },
  showCart(){
    console.log("Shopping Cart:");
    this.item.forEach((items)=>{
      console.log(`${items.name} - ${items.price}`);
    })
    console.log(`Total price ${this.calculateCart()}`);
  }
}
shoppingCart.addItem("laptop", 30000);
shoppingCart.addItem("Mobile", 15000);
shoppingCart.showCart();

// O/p-->
// laptop add to the cart
// Mobile add to the cart
// Shopping Cart:
// laptop - 30000
// Mobile - 15000
// Total price 45000
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 
