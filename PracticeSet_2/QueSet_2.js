// 1. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

function sortKey(arr,key){
  return arr.sort((a,b)=>a[key] - b[key]);
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 32},
  { name: 'Charlie', age: 25 }
];
const result = sortKey(people,"age");
console.log(result);

// 2. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.

function deepClone(obj){
  return JSON.parse(JSON.stringify(obj));
}
const original = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "traveling"],
  address: {
    city: "Paris",
    zip: 75000
  }
};
const result1 = deepClone(original);

result1.name = "Bob";
result1.hobbies.push("cooking");
result1.address.city = "Lyon";

console.log("Original:", original);
console.log("Clone:", result1);

// 3. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

function mergedSortArr(arr1,arr2){
  let merged = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      merged.push(arr1[i]);
      i++;
    }else{
      merged.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    merged.push(arr1[i]);
    i++;
  }

while(j < arr2.length){
  merged.push(arr2[j]);
  j++;
}
return merged;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const result2 = mergedSortArr(arr1,arr2);
console.log(result2);

// 4. Write a function that determines if two strings are anagrams of each other

function areAnagram(str1,str2){
const formatString = (str) => str.replace(/[^a-z0-9]/gi,'').split('').sort().join('');
return formatString(str1) === formatString(str2);
}
console.log(areAnagram("listen", "silent"));
console.log(areAnagram("hello", "world"));

// OR

function checkAnagram(){
  var a = "Army";
  var b="Mary";
  let str1 = a.toLocaleLowerCase().split('').sort().join('');
  let str2 = b.toLocaleLowerCase().split().sort().join('');
  if(str1 === str2){
    console.log("true");
  }else{
    console.log("false");
  }
}

// 5.  Implement a function to reverse a string without using the built-in reverse() method. 

function reverseStr(str){
  let reserve = "";
  for(let i = str.length-1; i>=0; i--){
    reserve += str[i];
  }
  return reserve;
}
console.log(reverseStr("hello"));

// 6. Given an array of numbers, write a function to find the largest and smallest numbers in the array. 

function findMinMax(arr){
  let min = arr[0];
  let max = arr[0];
  if(arr.length === 0){
    return null;
  }
  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min) min = arr[i];
    if(arr[i] > max) max = arr[i];
  }
  return {min, max};
}
const numbers = [5, 2, 9, 1, 7];
const result3 = findMinMax(numbers);
console.log(result3);

// OR

function findMinMax(arr) { 

  let min = Math.min(...arr); 

  let max = Math.max(...arr); 

  return [min, max]; 

}

// 7. Write a function that takes an array of integers as input and returns a new array with only the unique elements. 

function uniqueNum(arr){
  return [...new Set(arr)];
}
const nums = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueNum(nums));

// OR

function uniqueNum(arr){
  const ans = [];
  for(let i = 0; i<arr.length; i++){
    if(!ans.includes(arr[i])){
      ans.push(arr[i]);
    }
  }
  return ans;
}

// 8.  Implement a function to find the sum of all the numbers in an array.

function findSum(arr){
  return arr.reduce((sum,num)=> sum + num ,0);
}
const result4 = [1,2,3,4,5,6,7,8,9];
console.log(findSum(result4));

// 9. Given a string, write a function to count the occurrences of each character in the string. 

function count(str){
  const charCount = {};
  for(let char of str){
    charCount[char] = (charCount[char] || 0) + 1
  }
  return charCount;
}
const answer = "banana";
console.log(count(answer));

// 10. To find the first non-repeating character in a string using JavaScript?

function firstNonRepeatingChar(str){
  const charCount = {}
  for(let char of str){
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for(let char of str){
    if(charCount[char] === 1){
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("javascript"));