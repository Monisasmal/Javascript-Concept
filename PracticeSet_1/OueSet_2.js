// Q1.
function checkValue(value){
  var result = Array.isArray(value);
  console.log(result); //true
}
checkValue([1,2,3]); 

// Reason : Array.isArray() method is used to check if the provided value is an array.

// Q2.
function sum(a=5, b=7){
  return a+b;
}
console.log(sum(undefined, 20)); //25

// Q3.
console.log(10 + "5"); //105
console.log("5" + 10); //510

// Q4.
console.log(10 - "5"); //5
console.log("5" - 10); //-5

// Q5.
// console.log(printName()); // Refeerence Error
// const printName = () => {
//     return "Hi my name is Bob"
// }

// Reason : Arrow functions cannot be accessed before they are initialised.

// Q6.
console.log(printName()); // Hi my name is Bob
function printName(){
    return "Hi my name is Bob"
}

// Q7.
const userDetails = {
  firstName: "Moni",
  lastName: "Sasmal",
  age: 20,
  address: {
    city: "Hyderabad",
    country: "India",
  },
};

let cloneUserDetails = { ...userDetails };
//Updating original object
userDetails.age = 22;
userDetails.address.city = "Banglore";

console.log(cloneUserDetails.age); //20
console.log(cloneUserDetails.address.city); //Banglore


// Q8.
function hello(){
  console.log(name); //undefind
  // console.log(age); //Refference Error
  var name = "Alice";
  let age = 21;
  }
  hello();

// Q9.
const arr1 = [1,2,3];
const arr2 = [1,2,3];
const str = "1,2,3";

console.log(arr1 == str); //true
console.log(arr1 == arr2); //false

// 1.Reason for console.log(arr1 == str) : Javascript compiler performs type conversion. In this case, it converts the array arr1 and the string str to their string representations and then compares them.

// 2. Reason for console.log(arr1==arr2) : In Javascript arrays are objects and objects are compared by reference. In this case, arr1 and arr2 are pointing to 2 different memory locations

// Q10.
const a = {x : 1};
const b = {x : 1};
console.log(a === b);  //false
console.log(a.x === b.x) //true

// Q11.
const arr = [10, -1, 2];
arr.sort((a, b) => a - b);
console.log(arr); // [-1,2,10]

// Q12.
const arr5 = [11, 0, '', false, 2, 1];
const filtered = arr5.filter(Boolean);
console.log(filtered); //[11,2,1]

// Reason : filter(Boolean) removes all falsy values (0, "" (empty string), false, null, undefined, and NaN) from the array and keeps truthy ones.

// Q13.
var x = 0;
var y = 10;
if(x){
  console.log(x); // 0 is a falsy value so does not trigger console.log()
}
if(y){
  console.log(y); //10
}

// Q14.
const obj = {
  var1: 1,
  var2: 2
  };
  const { var1, var2 } = obj;
  console.log(var1, var2); //1,2

// Q15.
// const user = { 
//   name: "Manaswini", 
//   country: "India" 
//   };
//   const { name: fullname, country } = user;
//   console.log(fullname); //Manaswini
//   console.log(name); //Refference Error

// Q16.
// const person = {
//   firstName: 'manaswini',
// };
// const { firstName,lastName="sasmal" } = person;
// console.log(lastName);  //sasaml
// console.log(firstName); //manaswini

// Q17.
const person = {
  firstName: 'moni',
};
const { firstName="mama"} = person;
console.log(firstName); //moni

// Q18.
var ab = 10;
// let ab = 20;
// console.log(ab); //Syntax Error

// Q19.
const arr6 = ["A","B","C","D","E"]
console.log(Object.keys(arr6));  //[ '0', '1', '2', '3', '4' ]