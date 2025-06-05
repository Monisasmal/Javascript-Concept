// Shallow Copy
// A shallow copy creates a new object, but it only copies references for nested objects (not actual values). If the original object has nested objects or arrays, modifying them in the copied object will affect the original one.

let original ={
  name:'moni',
  age:'25',
  address:{
    city:'berhampur',
    pincode:700004
  }
}

let shallowCopy1 = Object.assign({},original);
let shallowCopy2 = {...original};

shallowCopy2.name = "mama";
shallowCopy1.address.city = "BBSR";

console.log(shallowCopy1.address.city);
console.log(original.address.city);
console.log(shallowCopy2.name);
console.log(original.name);

// O/p-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node shallowCopy_deepCopy.js
// BBSR
// BBSR
// mama
// moni

// Deep Copy:====

// A deep copy creates a completely new object with new references, ensuring that changes in the copied object do not affect the original object.

let originalDeep ={
  name:'moni',
  age:'25',
  address:{
    city:'berhampur',
    pincode:700004
  }
}

let deepCopy = structuredClone(originalDeep);
let deepCopy1 = JSON.parse(JSON.stringify(originalDeep));
deepCopy1.address.city = "cuttack"
deepCopy.address.pincode = 67009;
console.log(deepCopy.address.pincode);
console.log(originalDeep.address.pincode);
console.log(deepCopy1.address.city);
console.log(originalDeep.address.city);

// O/p-->
// 67009
// 700004
// cuttack
// berhampur
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 
