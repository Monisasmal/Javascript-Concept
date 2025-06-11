// Q1. 1. Write a JavaScript function to calculate the sum of two numbers.  


function addtwo(a,b){
  return a+b;
}
console.log(addtwo(4,5)); //9

// Q2. Write a JavaScript program to find the maximum number in an array. 
 
function findMax(arg){
  return Math.max(...arg);
}
console.log(findMax([2,3,5,6]));  //6

// Q3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(str){
 return str === str.split("").reverse().join("");
}
console.log(isPalindrome("NAN")) //true;
console.log(isPalindrome("hii")); //false

// OR

function checkPalindrome(){
  const string = "anmna"
  let arr= string.split('').reverse().join('')
  if (string==arr){
      console.log("Palindrome")
  }
  else{
      console.log("Not Palindrome")
  }
}
checkPalindrome();


// Q4. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function evenNumber(numbers){
return numbers.filter(num => num%2 === 0)
}
console.log(evenNumber([2,3,4,5,6]));

// Q5.  Write a JavaScript program to calculate the factorial of a given number. 

function factorial(number){
  if(number === 0 || number ===1) return 1;
  else{
    return number*factorial(number-1);
  }
}
console.log(factorial(5)); //120
console.log(factorial(0)); //1

// Q6. Write a JavaScript function to check if a given number is prime. 

function isPrime(num){
  if(num <= 1) return false;
  for(let i = 2; i<= Math.sqrt(num); i++){
    if(num % i === 0) return false
  }
  return true;
}
console.log(isPrime(5)); //true
console.log(isPrime(4)); //false

// print prime in between 2 - 100
 
function isPrime(num){
if(num <= 1) return false;
for(let i = 2; i<= Math.sqrt(num); i++){
  if(num %i === 0) return false;
}
return true;
}
console.log("Prime numbers from 2 to 100:");

for(let i = 2; i <= 100; i++){
  if(isPrime(i)){
    console.log(i);
  }
}

// Q7. Write a JavaScript program to find the largest element in a nested array. 
 
function findLargestNestedArray(arr){
  let max = -Infinity;
  function findMax(ele){
   if(Array.isArray(ele)){
    ele.forEach(findMax);
   } else if(typeof ele === 'number'){
    if(ele > max){
      max = ele;
    }
   }
  }
   findMax(arr);
   return max;
}

const nestedArray = [3, [5, [7, 2], 10], [1, 15], 29];
console.log("Largest Element:", findLargestNestedArray(nestedArray));

// Dry Run of findLargestNestedArray([3, [5, [7, 2], 10], [1, 15], 29])
//
// Initial max = -Infinity
//
// Step 1: findMax([3, [5, [7, 2], 10], [1, 15], 29]) → Array → Loop through
// ├─ findMax(3) → number → 3 > -Infinity → max = 3
// ├─ findMax([5, [7, 2], 10]) → Array
// │  ├─ findMax(5) → number → 5 > 3 → max = 5
// │  ├─ findMax([7, 2]) → Array
// │  │  ├─ findMax(7) → number → 7 > 5 → max = 7
// │  │  └─ findMax(2) → number → 2 < 7 → no change
// │  └─ findMax(10) → number → 10 > 7 → max = 10
// ├─ findMax([1, 15]) → Array
// │  ├─ findMax(1) → number → 1 < 10 → no change
// │  └─ findMax(15) → number → 15 > 10 → max = 15
// └─ findMax(29) → number → 29 > 15 → max = 29
//
// ✅ Final max = 29


// Q8. Write a JavaScript program to find the smallest element in a nested array. 

function findSmallestNestedArray(arr){
  let min = Infinity;
  function findMin(ele){
    if(Array.isArray(ele)){
      ele.forEach(findMin);
    }else if(typeof ele === 'number'){
     if(ele < min){
      min = ele;
     }
    }
  }
  findMin(arr);
  return min;
}

const nestedArraymin = [3, [5, [7, 2], 10], [1, 15], 29];
console.log("Smallest Element:", findSmallestNestedArray(nestedArraymin));

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 

function getfibonacci(n){
 if(n <= 0) return [];
 if(n === 1) return [1];
 if(n === 2) return[0,1];

 const fib = [0,1];
 for(let i =2; i<n; i++){
  fib.push(fib[i-1] + fib[i-2]);
 }
 return fib;
}
console.log(getfibonacci(6));

// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function littleCase(str){
return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}
const input = "hElLo wORld! thIs is a TiTlE cASe tEsT.";
const titleCase = littleCase(input);
console.log(titleCase);

// OR



