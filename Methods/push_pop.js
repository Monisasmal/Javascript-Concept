// 1. push() → Adds elements to the end

// -->  Modifies the original array.
// -->  Returns the new length of the array.

let arrpush = [1,2,3];
arrpush.push(4,5);
console.log(arrpush);
console.log(arrpush.length);

// O/P-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> node push_pop.js
// [ 1, 2, 3, 4, 5 ]
// 5

// 2. pop() → Removes the last element

// --> Modifies the original array.
// --> Returns the removed element.

let arrpop = [1,2,3,4,5];
let removed = arrpop.pop();
console.log(arrpop);
console.log(removed);

// O/P-->
// [ 1, 2, 3, 4 ]
// 5
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// 3. shift() → Removes the first element

// --> Modifies the original array.
// --> Returns the removed element.


let arrshift = [1,2,3,4,5];
let remove = arrshift.shift();
console.log(arrshift);
console.log(remove);

// O/P-->
// [ 2, 3, 4, 5 ]
// 1
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 

// 4. unshift() → Adds elements to the beginning
// --> Modifies the original array.
// --> Returns the new length of the array.

let arrunshift = [2,3,4];
arrunshift.unshift(0,1);
console.log(arrunshift);
console.log(arrunshift.length)

// O/P-->
// [ 0, 1, 2, 3, 4 ]
// 5
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 
