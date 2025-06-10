// Q1.
console.log(2 + 3 + "7"); // 57

// Q2.
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// O/p-->
3;
3;
3;

// Q3.
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// O/p-->
0
1
2

// Q4.
setTimeout(() => {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}, 2000);

// O/p==> after 2 sec
0
1
2
3
4

// Q5.
// var a = 10;
// (function () {
//   console.log(a);
//   var a = 5;
// })();

// O/p-->
undefined

// Q6. 
// var x = 5;
// (function () {
//   console.log(x);
// })();

// O/p-->
5


// Q7.
console.log(3 > 2 > 1);

// O/p-->
false

// Q8.
var name = "Alice";
console.log(`Hello, ${name}!`);
name = "Bob";

// O/p-->
// Hello Alice

// Q9.
console.log(1 + "1" - 1);  //10
console.log([]+[]); // empty

// Q10.
let arr = [1, 2, 3, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);

// O/p-->
[]

// Q11.
// x = 10;
// console.log(x);  //10
// var x;  


// Q12.
// let a = { x: 1, y: 2 }
// let b = a;
// b.x = 3;
// console.log(a); //{x:3,y:2}
// console.log(b);  //{x:3,y:2}

// Q13.
for(let i = 0; i < 10; i++){
  setTimeout(function(){
    console.log("value is " + i);
},2000)
}

// O/p-->
// value is 0
// value is 1
// value is 2
// value is 3
// value is 4
// value is 5
// value is 6
// value is 7
// value is 8
// value is 9

// Q14.
// let f = "8";
// let a = 1;
// console.log((+f)+a+1); //10

// Q15.
let a = 10;
if(true){
   let a = 20;
   console.log(a, "inside"); //20, "inside"
}
console.log(a, "outside"); // 10, "outside"

// Q16.

const arr1 = [1, 2, 3, 4];
const arr2 = [6, 7, 5];
// const result = [...arr1, ...arr2];
// console.log(result); // [1,2,3,4,6,7,5]

// Q17.
console.log({} == {});  //false
// console.log({} === {}); //false;

// Q18.
// let x = 5;
// let y = x++;
// console.log(y); //5
// console.log(x); //6

// Q19.
let x = 5;
let y = ++x;
console.log(y); //6
console.log(x); //6

// Q20.
const array = [8, 18, 28, 38];
const result = array.map(element => element + 2)
               .filter((element) => element > 25);
console.log(result);  //[30,40];
