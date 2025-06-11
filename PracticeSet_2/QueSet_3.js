// 1. Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

Array.prototype.last = function() {
  return this.length > 0 ? this[this.length-1] : -1 ;
};

const arr1 = [1, 2, 3];
console.log(arr1.last()); // Output: 3

const arr2 = [];
console.log(arr2.last()); // Output: -1

const json = '[10, 20, 30]';
const parsedArr = JSON.parse(json);
console.log(parsedArr.last()); // Output: 30

// 2. To Be Or Not To Be
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function(val) {
  return {
      toBe: function(expect){
          if(val === expect){
              return true;
          }else{
              throw new Error("Not Equal");
          }
      },
      notToBe: function(expect){
          if(val !== expect){
              return true;
          }else{
              throw new Error("Equal");
          }
      }
  }
};
console.log(expect(5).toBe(5)); //true 

console.log(expect(5).notToBe(7)); //true

// 3. Counter II
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(init) {
  let current = init;
  return {
      increment: function(){
          return ++current;
      },
      decrement: function(){
          return --current;
      },
      reset: function(){
          current = init;
          return current;
      }
  }
  
};
const counter = createCounter(9)
console.log(counter.increment()); //10
console.log(counter.reset()); //9
console.log(counter.decrement()); //8

// 4.  Join Two Arrays by ID
// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

var join = function(arr1, arr2) {
    const mergedArr = {};
    arr1.forEach(item =>{
        mergedArr[item.id] = {... item}
    })
    arr2.forEach(item =>{
        mergedArr[item.id] = {...(mergedArr[item.id] || {}), ...item}
    });
    const joinedArray = Object.values(mergedArr).sort((a,b)=>a.id-b.id);
    return joinedArray;
    
};
arr4 = [{"id": 1,"x": 1},{"id": 2,"x": 9}]
arr5 = [{"id": 3,"x": 5}]
console.log(join(arr4,arr5));

// 5. Remove Duplicate characters from String
function removeDuplicate(str){
    return str.split('').filter((item,index,arr)=>
        arr.indexOf(item) === index
    ).join('');
}
console.log(removeDuplicate("javascript")); //javscript


// 6. Write a JavaScript function that takes a sentence as input and returns a new sentence where each word is reversed, but the word order remains the same.

function eachReverseWord(str){
return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log(eachReverseWord("india is my Country"));  //aidni si ym yrtnuoC

// 7. Swapping of 2 numbers with third variable

let a=10;
let b=20;
let c;
   c=a;
   a=b;
   b=c;
console.log (a,b,c);

// 8. Swapping of 2 numbers without third variable
 let x = 10;
 let y = 20;
 x = x+y;
 y = x-y;
 x = x-y;
 console.log(x,y);

//   2. Using Destructuring (ES6) – Most Elegant Way
let a3 = 5;
let b3 = 10;

[a, b] = [b, a];

console.log("a =", a); // 10
console.log("b =", b); // 5

//  9.  To find longest word from a string

function findLongest(str){
let words = str.split(' ');
let longest = '';
for(let word of words ){
    if(word.length > longest.length){
        longest = word;
    }
} 
return longest.length;
}
console.log(findLongest("Hellllllllllllllo Moni")); //17

// OR

function longestWord(str){
    let arr = str.split(" ");
    let longest = "";
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length > longest.length){
          longest = arr[i];
        }
    }
    return longest;
}
console.log(longestWord("Moooooooni is a Gooooooooooooood Girl"));  //Gooooooooooooood

// 10. To find longest common string from array of strings

function longestCommonString(){
    let Array = ["go","google","gosh" ];
    let  arr = Array.sort((a,b) => a.length-b.length);
    let result = "";
    for(let i = 0; i<arr[0].length; i++){
        if(arr[0][i] === arr[arr.length-1][i]){
            result += arr[0][i]
        }
    }
    return result;
}
console.log(longestCommonString()); //go

// Original Array: [ 'go', 'google', 'gosh' ]
// Sorted Array by length: [ 'go', 'gosh', 'google' ]
// Comparing characters of: go and google

// Checking index 0:
// arr[0][0] = 'g'
// arr[last][0] = 'g'
// Match found! Updated result: g

// Checking index 1:
// arr[0][1] = 'o'
// arr[last][1] = 'o'
// Match found! Updated result: go

// Final Result: go



// 11. Write a program that prints the numbers from 1 to 20. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
// For numbers which are multiples of both three and five, print "FizzBuzz"
for (var i=1; i <= 20; i++)
    {
        if (i % 15 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz");
        else if (i % 5 == 0)
            console.log("Buzz");
        else
            console.log(i);
    }




