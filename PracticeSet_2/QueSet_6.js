//1.  Check Armstrong Number
function Armstrong(num){
  const digit = num.toString().split('');
  const power = digit.length;
  const result = digit.reduce((accum, digit) => {
    return  accum + Math.pow(Number(digit),power)
  },0);
  return result === num;
}
console.log(Armstrong(123)); // false
console.log(Armstrong(153)); //true

// or

function isArmstrong(num){
  const digit = Array.from(String(num),Number);
  const power = digit.length;
  const sum = digit.map(d => d ** power).reduce((a,b) =>a+b, 0);
  return sum === num
}
console.log(isArmstrong(321)); //false
console.log(isArmstrong(153)); //true

// 2.  To find the second largest number

function secLargest(arr){
 return arr.sort((a,b) => b-a)[1];
}
console.log(secLargest(['1', '2', '3', '4', '9']));

// 3. To check whether particular word/number present in sentence or not 

function checkStatus(arr,value){
  let status = "Not Exist";
  for(let i=0; i<arr.length; i++){
    if(arr[i] === value){
      status = "Exist";
      break;
    }
  }
  return status;
}
console.log(checkStatus(['priya', 'riya', 'supriya'], 'priya'));

// 4. Star Pattern
for(let i =0; i<5; i++){
  let line = '';
  for(let j = i; j<5; j++){
   line += '*';
  }
  console.log(line);
}

// *****
// ****
// ***
// **
// *

// 5. Start Pattern1

for(let i =0; i<5; i++){
  let line = "";
  for(let j = 0; j<5; j++){
    line += "*";
  }
  console.log(line);
}

// *****
// *****
// *****
// *****
// *****

// 6. Star Pattern

for(let i = 1; i<=5; i++){
  let line = "";
  for(let j = i;j<=5; j++){
    line += j;
  }
  console.log(line);
}

// 12345
// 2345
// 345
// 45
// 5

// 7. star Pattern

for(let i = 1; i<=5; i++){
  let line = "";
  for(let j = 1; j<=i; j++){
    line += j;
  }
  console.log(line);
}

// 1
// 12
// 123
// 1234
// 12345

// 8.  To find the square root

 const num = [ 4, 9, 16, 25,];
 let result = num.map(Math.sqrt);
 console.log(result); //[ 2, 3, 4, 5 ]

//  9. Make alternate character to upper case

function alterUpperCase(str){
 let char = str.toLowerCase().split('')
 for(let i =0; i<char.length; i= i+2){
   char[i] = char[i].toUpperCase()
 }
 return char.join(''); 
}
console.log(alterUpperCase("manaswini")); //MaNaSwInI

// Or

let exmp = "manaswini"
exmp = exmp.split('')
.map((spel,index) => index % 2 === 0 ? spel.toUpperCase() : spel.toLowerCase()) 
.join("");
console.log(exmp); //MaNaSwInI


// 10. To find the negative values in an array or 2D Array
// for 1D array

const arr = [3, -1, 7, -5, 0, -2];
const negaiveValue = arr.filter((num) => num < 0)
console.log(negaiveValue); //[ -1, -5, -2 ]

// for 2D Array

const matrix = [
  [3, -1, 7],
  [-5, 0, -2],
  [4, -9, 2]
];

const SelectNegValue = matrix.flat().filter((num) => num < 0)
console.log(SelectNegValue); //[ -1, -5, -2, -9 ]

// 11. To count the negative values in an array or 2D Array

const arr11 = [3, -1, 7, -5, 0, -2];
// let count = 0;
const negaiveValue11 = arr.filter((num) => num < 0).length
console.log(negaiveValue11); //3




