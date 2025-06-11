// 1. Find first repeating character with its index from an array

const arr = ['a', 'b', 'c', 'a', 'd'];
const seen = new Set();
for(let i =0; i<arr.length; i++){
  if(seen.has(arr[i])){
    console.log(`${arr[i]} at index ${i}`);
    break;
  }
  seen.add(arr[i]);  //a at index 3
}

// Or

function firstRepeatingIndex(arr){
  let count = {};
  for(let i = 0; i < arr.length; i++){
    if(count.hasOwnProperty(arr[i])) {
      console.log("character:", arr[i]);
      console.log("first index:", count[arr[i]]);
      return count[arr[i]];
    } else {
      count[arr[i]] = i;
    }
  }
  return -1; 
}

firstRepeatingIndex([1, 0, 2, 3, 4, 4, 5, 7, 7]); //character: 4  ,first index: 4


// 2. To find the maximum repetation of the character in a string  

function MaxChar(str){
  let charMap = {};
  let maxChar = '';
  let maxCount = 0;

  for(let char of str){
    charMap[char] =(charMap[char] || 0) + 1;
    if(charMap[char] > maxCount){
      maxChar = char;
      maxCount = charMap[char]
    }
  }
  return { charracter: maxChar, count:maxCount}
}
console.log(MaxChar("Javascript")); //{ charracter: 'a', count: 2 }

// Or

function maxFrequency(str){
  let uniqueChar = new Set(str);
  let maxCount = 0;
  let maxChar = '';
  uniqueChar.forEach(char => {
    let count = str.split('').filter((c) => c === char).length;
    if(count > maxCount){
      maxCount = count;
      maxChar = char;
    }
  });
  return {character: maxChar, count:maxCount};
}
console.log(MaxChar("Sucessess")); //{ charracter: 's', count: 4 }

// 3. Create a new array by adding one to each elements of the existing array

function pluseOne(arr){
let output = []
for(let i =0; i<arr.length; i++){
  output.push(arr[i]+1);
}
return output;
}
console.log(pluseOne([1,2,3,4,5]));  //[ 2, 3, 4, 5, 6 ]

// OR

function plusOne(arr) {
  return arr.map(num => num + 1);
}
console.log(plusOne([1, 2, 3, 4, 5]));  //[ 2, 3, 4, 5, 6 ]

// Array.from(arrayLike, mapFn, thisArg)

// Or

const arr3 = [1, 2, 3, 4, 9];
const result = Array.from(arr3, x => x + 1);
console.log(result); // [ 2, 3, 4, 5, 10 ]

// 4. Sort an array of an element by parity means even then odd elements

function sortByParity(arr){
  let even = [];
  let odd = [];
  let result =[];
  for(let i =0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i]);
    }
    else{
      odd.push(arr[i]);
    }
  }
  result = even.concat(odd);
  return result;
}
console.log(sortByParity([0,1,2,3,4,5,6,7,8,9])); // [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]

// OR

function sortByParity(arr) {
  return arr.filter(x => x % 2 === 0).concat(arr.filter(x => x % 2 !== 0));
}
console.log(sortByParity([0,1,2,3,4,5,6,7]));  //[ 0, 2, 4, 6, 1, 3, 5, 7]

// 5. Adding an elements to the array when elements are consecutive numbers in JS

function groupConsecutive(arr){
if(arr.length === 0) return [];
const result = [];
let group = [arr[0]];
for(let i = 1; i<arr.length;i++){
  if(arr[i] === arr[i-1]+1){
    group.push(arr[i]);
  }else{
    result.push(group);
    group = [arr[i]];
  }
}
result.push(group);
return result;
}

const grouped =  groupConsecutive([1, 2, 3, 5, 6, 10, 11, 12, 15]);
console.log(grouped);
const sum = grouped.map(group => group.reduce((a,b)=>a+b,0));
console.log(sum);

// Dry Run

result = [];
group = [1]; // Start with the first element

// i = 1 → arr[1] = 2
// 2 === 1 + 1 → ✅ Consecutive

// group = [1, 2]

// i = 2 → arr[2] = 3
// 3 === 2 + 1 → ✅ Consecutive

// group = [1, 2, 3]

// i = 3 → arr[3] = 5
// 5 !== 3 + 1 → ❌ Not Consecutive

// Push [1, 2, 3] to result

// Start new group → group = [5]

// result = [[1, 2, 3]]

// i = 4 → arr[4] = 6
// 6 === 5 + 1 → ✅ Consecutive

// group = [5, 6]

// i = 5 → arr[5] = 10
// 10 !== 6 + 1 → ❌ Not Consecutive

// Push [5, 6] to result

// group = [10]

// result = [[1, 2, 3], [5, 6]]

// i = 6 → arr[6] = 11
// 11 === 10 + 1 → ✅

// group = [10, 11]

// i = 7 → arr[7] = 12
// 12 === 11 + 1 → ✅

// group = [10, 11, 12]

// i = 8 → arr[8] = 15
// 15 !== 12 + 1 → ❌

// Push [10, 11, 12] to result

// group = [15]

// result = [[1, 2, 3], [5, 6], [10, 11, 12]]

// Push remaining group = [15] to result

// result = [[1, 2, 3], [5, 6], [10, 11, 12], [15]]

// Then: sum = grouped.map(...)
// Now we map each group to the sum of its elements:

// [1, 2, 3] → 1 + 2 + 3 = 6

// [5, 6] → 5 + 6 = 11

// [10, 11, 12] → 10 + 11 + 12 = 33

// [15] → 15


// 6. Move all the zeroes at the end of an elements

function zeroAtEnd(arr){
  let index = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] != 0){
      arr[index] = arr[i];
      index++;
    }
  }
  while(index <arr.length){
    arr[index] = 0;
    index++;
  }
  return arr;
}

console.log(zeroAtEnd([0, 1, 0, 3, 12]));

// --> This modifies the array in place.
// --> Time complexity: O(n).
// --> Space complexity: O(1) (no extra array created).

// Or

function moveZeroToEnd(arr){
  const nonZero = arr.filter(num => num !== 0);
  const zero = arr.filter(num => num === 0);
  return [...nonZero,...zero];
}
console.log(moveZeroToEnd([0,1,0,4,0,9,0,60,99]));

// --> Time complexity: O(n).
// --> Space complexity: O(n) due to creation of new arrays.

// 7. Create a function to calculate the sum of all the numbers in a jagged array

function sumJaggedArray(arr){
  let sum = 0;
  for(let item of arr){
    if(Array.isArray(item)){
      sum += sumJaggedArray(item);
    }else if(typeof  item === 'number'){
      sum += item;
    }
  }
  return sum;
}
console.log(sumJaggedArray([1, [2, 3], [4, [5, 6]], 7, 8]));  //36

// Eg:--

[
  1,
  [2, 3],
  [4, [5, 6]],
  7
]
// sum = 0
// Item: 1
//    It's a number → sum = 0 + 1 = 1

// Item: [2, 3]
//     It's an array → make a recursive call:
//     sumJaggedArray([2, 3])
//     Inside [2, 3]:
//     sum = 0
//     2 is number → sum = 2
//     3 is number → sum = 5
//     Return 5 to parent
//     Back to main call → sum = 1 + 5 = 6

// Item: [4, [5, 6]]
//     It's an array → make a recursive call:
//     sumJaggedArray([4, [5, 6]])
//     Inside [4, [5, 6]]:
//     sum = 0
//     4 is number → sum = 4
//     [5, 6] is an array → recursive call:
//     sumJaggedArray([5, 6])
//     Inside [5, 6]:
//     sum = 0
//     5 is number → sum = 5
//     6 is number → sum = 11
//     Return 11
//     Back to [4, [5, 6]] → sum = 4 + 11 = 15
//     Return 15 to parent
//     Back to main → sum = 6 + 15 = 21

// Item: 7
//   --It's a number → sum = 21 + 7 = 28


// 8. Number of days between 2 dates calculation

date2 = '2025-05-23', date1= '2025-05-01'
function dayBtwDate(date1,date2){
  const days = (new Date(date2)-new Date(date1))/(1000 * 60 * 60 * 24)
  return days;
}
console.log(dayBtwDate(date1,date2));

// 9. Convert Array into object:-
const arr9 = ["John", "Peter", "Sally", "Jane"];
const updatedArr = {...arr9};
console.log(updatedArr);  //{ '0': 'John', '1': 'Peter', '2': 'Sally', '3': 'Jane' }

// OR

const arr10 = ['a', 'b', 'c'];
const obj = Object.assign({}, arr10);
console.log(obj); // {0: "a", 1: "b", 2: "c"}

// OR

const arr11 = [['name', 'Alice'], ['age', 25]];
const obj1 = Object.fromEntries(arr11);
console.log(obj1); // { name: 'Alice', age: 25 }

// 10. Write a function called stringCompression that performs basic string compression using the counts of repeated characters.

function stringCompression(str){
if(!str || typeof str !== 'string' || str.length === 0){
  console.log('Please enter a Valid String');
  return;
}
let result = '';
let count = 1;
for(let i =0; i<str.length; i++){
  if(str[i] === str[i+1]){
    count++;
  }else{
    result += str[i]+count;
    count = 1;
  }
}
return result;
}
console.log(stringCompression(''));
console.log(stringCompression('aaaabb'));
console.log(stringCompression('ccchhbbdwwc'));



