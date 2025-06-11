// 1. To find vowels and its count in a given string?

function findVowel(str){
  let vowels=['a','e','i','o','u'];
  let count = 0;
  for(let letter of str){
    if(vowels.includes(letter)){
      count++;
    }
  }
  return count;
}
console.log(findVowel("moniiiiiiiiiiiiiiiiiiiiiii")); //24

// 2. To find character occurance for the string

function findOccurance(str, letter){
   let count = 0;
   for(let i = 0; i<str.length; i++){
    if(str.charAt(i) === letter){
      count++;
    }
   }
   return count;
}
console.log(findOccurance("moniiiiii",'i')); //6

// 3. To find a first pair whose sum is zero??

function findFirstZero(arr){
 for(let i =0; i<arr.length; i++){
  for(let j = i+1; j<arr.length; j++){
    if(arr[i] + arr[j] === 0){
      return [arr[i], arr[j]]
    }
  }
 }
 return null;
}
console.log(findFirstZero([3, 1, -1, 2, -3])); //[ 3, -3 ]

// 4. To find the largest pair of the 2 elements using ind2exing with unsorted elements??

function findLargest(numbers){
  const num = numbers.sort((a,b) => b-a);
  return num[0] +num[1];
}
const result =  findLargest([9,7,8,4,5,6,1,2,3]);
console.log(result); //17

// 5.  Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)

function missingElement(arr){
 let missingEle = [];
 let min = Math.min(...arr);
 let max = Math.max(...arr);
 for(let i = min; i<=max; i++){
  if(arr.indexOf(i) === -1){
    missingEle.push(i);
  }
 }
 return arr.concat(missingEle).sort((x,y)=> x-y);
}
console.log(missingElement([3, 5, 6, 9]));    //[3,4,5,6,7,8,9]

// Dry run

// 🔹 i = 3
// arr.indexOf(3) → 0 (exists)

// Not missing → do nothing.

// 🔹 i = 4
// arr.indexOf(4) → -1 (not found)

// → Push 4 to missingEle → missingEle = [4]

// 🔹 i = 5
// arr.indexOf(5) → 1 (exists)

// Not missing → do nothing.

// 🔹 i = 6
// arr.indexOf(6) → 2 (exists)

// Not missing → do nothing.

// 🔹 i = 7
// arr.indexOf(7) → -1

// → Push 7 → missingEle = [4, 7]

// 🔹 i = 8
// arr.indexOf(8) → -1

// → Push 8 → missingEle = [4, 7, 8]

// 🔹 i = 9
// arr.indexOf(9) → 3 (exists)

// Not missing → do nothing.

// ✅ Final Step:

// arr.concat(missingEle) 
// = [3, 5, 6, 9].concat([4, 7, 8]) 
// = [3, 5, 6, 9, 4, 7, 8]

// .sort((x, y) => x - y) 
// = [3, 4, 5, 6, 7, 8, 9]
// ✅ Final Output:


// 6. Find the missing no. in an array

function missing(arr){
  let x = 0;
  for(let i =0; i<arr.length; i++){
    x = x+1;
if(arr[i] != x){
  return(x);
}
  }
}
console.log(missing([1,2,3,4,5,7]));

// OR

function missing(arr6) {
  
  arr6.sort((a, b) => a - b);
  let start = arr6[0]; 
  for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] !== start) {
      console.log(`Missing number found: ${start}`);
      return start;
    }
    start++; 
  }
  console.log("No missing number found in the sequence.");
}

// Test cases
console.log("\nOutput:", missing([70, 72, 73, 76]));
// Output should be 71 (first missing in the sorted sequence)


// 7. Find first duplicate element from an array?

function findFirstDuplicate(arr){
  for(let i= 0; i<arr.length; i++){
    for(let j =i+1; j<arr.length; j++){
      if(arr[i] === arr[j]){
        return arr[i];
      }
    }
  }
  return null;
}
console.log(findFirstDuplicate([7, 8, 3, 5, 6, 3]));

// OR

function firstDuplicate(arr){
  const map = {}
  for(let i=0; i<arr.length; i++){
    if(map[arr[i]]){
      return arr[i];
    }
    map[arr[i]] = true;
  }
  return null;
}
console.log(findFirstDuplicate([7, 8, 3, 5, 6, 3]));

// OR

function duplicateElement(arr){
  arr.sort();
  for(let i =0; i<arr.length; i++){
    if(arr[i] === arr[i-1]){
      return arr[i];
    }
  }
  return null;
}
console.log(findFirstDuplicate([7, 8, 3, 5, 6, 3]));

// 8.  To find the largest elements fro the 2 dimensional array

function largestElem(arr){
  var max = [];
  for(let i =0; i<arr.length; i++){
    let tempMax = arr[i][0];
    for(let j = 0; j<arr[i].length; j++){
      let currentElem = arr[i][j];
      if(currentElem>tempMax){
        tempMax = currentElem
      }
    }
    max.push(tempMax);
  }
  return max;
}
console.log(largestElem([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]]))

9. // To check ending of the string with given character/s using custom


function endingWith(str, targrt){
if(targrt.length > str.length) return false;

for(let i =0; i<targrt.length; i++){
  if(str[str.length - targrt.length + i] !== targrt[i]){
    return false;
  }
  return true;
}
}
console.log(endingWith("hello", "lo"));
console.log(endingWith("openai", "na")); 

// 10. Print string n times using inbuilt function

function repeateNum(str, num){
if(num<1) return ""
return str.repeat(num)
}
console.log(repeateNum("hello ",7))



