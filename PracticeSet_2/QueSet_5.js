// 1. Truncate the string

function turncate(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num);
}
console.log(turncate("Hello World", 5)); //Hello

// 2.  Converting one dimensional array into n dimensional array using slice

function convertDimensional(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(convertDimensional(["a", "b", "c", "d", "e", "f", "g"], 3));  

// O/P-->  [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g' ] ]

// OR  using splice

function DimensionConvert(arr, size) {
  const example = [];
  while (arr.length > 0) {
    example.push(arr.splice(0, size));
  }
  return example;
}

console.log(DimensionConvert(["a", "b", "c", "d", "e", "f"], 3)); //[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

// 🧪 Dry Run

// Initial inputs:
// arr = ["a", "b", "c", "d", "e", "f"]
// size = 3
// example = []

// 🔁 1st Iteration:
// arr.splice(0, 3) → returns ["a", "b", "c"] and removes those from arr.
// arr becomes → ["d", "e", "f"]
// example.push(["a", "b", "c"])
// example becomes → [["a", "b", "c"]]

// 🔁 2nd Iteration:
// arr.splice(0, 3) → returns ["d", "e", "f"]
// arr becomes → []
// example.push(["d", "e", "f"])
// example becomes → [["a", "b", "c"], ["d", "e", "f"]]

// 🔁 Loop Ends:
// arr.length is now 0 → exit loop.


// 3.  To find only truthy values

function TruthyValue(arr) {
  return arr.filter((item) => {
    return item;
  });
}
console.log(TruthyValue(["priya", 0, "", false, null, undefined, "ate", 9])); //[ 'priya', 'ate', 9 ]

// 4.  Checking all letters of second words should present in first word

function checkLetter(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      return false;
    }
  }
  return true;
}
console.log(checkLetter(["hello", "he"])); //true

// OR

function letterPresent(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  for (let letter of second) {
    if (first.indexOf(letter) == -1) {
      return false;
    }
  }
  return true;
}
console.log(letterPresent(["hello", "hi"])); //false

// 5. Unique values only from 2 arrays

function uniqueValue(arr1, arr2) {
  const uniqueValues = [...new Set([...arr1, ...arr2])];
  return uniqueValues;
}
console.log(uniqueValue([1, 2, 3, 4], [5, 3, 7, 2])); //[ 1, 2, 3, 4, 5, 7 ]

// dry run
// Combine arr1 and arr2 → [...arr1, ...arr2]
// Create a Set from it to remove duplicates → new Set([...]) Set { 1, 2, 3, 4, 5, 7 }
// Spread the Set back into a new array → [...Set] -> [ 1, 2, 3, 4, 5, 7 ]

// OR

function valueUnique(arr1, arr2) {
  const uniqueValue = [
    ...arr1.filter((x) => !arr2.includes(x)),
    ...arr2.filter((x) => !arr1.includes(x)),
  ];
  return uniqueValue;
}
console.log(valueUnique([1, 2, 3, 4], [4, 3, 7, 2])); //[1,7]

// 6. To calculate the sum of all numbers from the start to the end number given in an array

function calSum(arr) {
  const start = Math.min(...arr);
  const end = Math.max(...arr);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
console.log(calSum([2, 9]));

// 7. Spiral Matrix Printing | Print the elements of a matrix in spiral form

function SprialMetrix(matrix) {
  const result = [];
  if (!matrix.length) return result;
  let top = 0; //(first row index)
  let bottom = matrix.length - 1;  //(last row index)
  let left = 0; //  (first column index)
  let right = matrix[0].length - 1;   //(last column index)

  while (top <= bottom && left <= right) {
    // for left to right

    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // for top to bottom

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // right to left

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    //bottom to top

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(SprialMetrix(matrix));

// 💡 Dry Run (step-by-step result content)
// Round 1: → 1 2 3 4
//           ↓ 8 12 16
//           ← 15 14 13
//           ↑ 9 5
// Round 2: → 6 7
//           ↓ 11
//           ← 10

// ✅ Final result: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// 8.  Find SUM, PRODUCT AND AVERAGE of the numbers?
// sum
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((accum, cur) => {
  return accum + cur;
});
console.log(sum); //15

// product
let product = arr.reduce((accum, cur) => {
  return accum * cur;
});
console.log(product); //120

// Average
let avg = arr.reduce((accu, cur, idx, arr) => {
  total = accu + cur;
  if (idx === arr.length - 1) {
    return total / arr.length;
  }
  return total;
});
console.log(avg); //3

// 9. Convert 2D/3D array into 1D using reduce function and inbuilt function i.e flat
const arr9 = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];

const result = arr9.reduce((accum, curr)=>{
  return accum.concat(curr)
})
console.log(result);



// OR
console.log(arr9.flat());

// 10.  Reverse of a number

function reverseNumber(num){
  return (parseInt(Math.abs(num).toString().split('').reverse().join('')) * Math.sign(num));
}
console.log(reverseNumber(120));  //21
console.log(reverseNumber(321)); //123

// Or

function reverseDigit(num){
  let isNegative = num < 0;
  num = Math.abs(num);
  let reverse = 0;
  while(num > 0){
   let digit = num %10;
   reverse = reverse*10 + digit;
   num = Math.floor(num/10);
  }
  return isNegative ? -reverse : reverse
}
console.log(reverseDigit(567));  //765
console.log(reverseDigit(-980)); //-89



