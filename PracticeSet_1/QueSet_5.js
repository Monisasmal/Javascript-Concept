// 1.
 console.log(Math.max([2,3,4,5]));  //NaN
// but
console.log(Math.max(...[2,3,4,5]));  5

// Because Math.max() expects a list of numbers, not an array.

// 2.
let a = [];
let b = [];
console.log(a==b); //false
console.log(a===b); //false
//Explaination : Here we are comparing memory location, not an array. Memory location of 2 arrays are not same.

// 3.
let a3 = [];
let b3 = a3;
console.log(a3==b3); //true
console.log(a3===b3); //true
//Explaination : Here we are assigning a to b, where memory location is now same.

// 4.
const data = ["piya", "priya", "supriya"];
const [y] = data;
console.log(y); //"piya"
//Explaination : We are doing destructuring here. y is representing the first index only

// 5.
let data5 ={name:"priya"}
let data1={city:"ABC", name: "supriya"}
data5 = {...data5, ...data1} //merge 2 objects
console.log(data5); // { name:"supriya", "city": "ABC"}

// 6.
let data6 = ["piya", "priya", "supriya"];
delete data6[1];
console.log(data6); //["piya",,"supriya"] //["piya",empty,"supriya"]
console.log(data6.length); //3
//Explaination : Whenever element deleted from an object it will create a empty space. Array length will always reain same.

// 7.
let a7=2;
setTimeout(()=>{
  console.log(a7); //100
},0)
console.log(a7=100);
//Explaination : Here we are using zero time interval. setTimeout is async function so it will execute at last. Firstly all the sync code will get execute. so that's why 100 is assigned to a.

// 8.
// How to find Operating system name?
// navigator.plateform we can use it. //win32


// 9.
function fruit(){
  // console.log(name); //undefined
  // console.log(price); //Error
  var name = "priya";
  let price = 1000;
}
fruit()
//Explaination : Hoisting concept used here. Error because in LET declaration first then only we can use it. but in var we can use brfore its declaration.

// 10.
for(var i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) // 3,3,3
}
//Explaination : Var is a global variable. Firstly Sync code get executed then async code will start to execute. so i value incremented from 0 to 3 when pointer reaches to setTimeout so it will print 3 thrice time.

// 11.
console.log(+true); //1
console.log(typeof +true); //number
//Explaination : if we write + in front of anything then it will convert into a number.


// 12.
let a12 = 3;
let b12 = new Number(3);
console.log(a12 == b12); //true
console.log(a12 === b12); //false
console.log(typeof b12); //object
//Explaination : === will give false because a will give number but b will give an object.
