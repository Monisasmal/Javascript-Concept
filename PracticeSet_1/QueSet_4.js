// Q1.
let x = '{ "b": 1, "c": 2 }';
let y = JSON.parse(x);
console.log(typeof y);  // object

// Q2.
let x2 = 0.1 + 0.2;
let y2 = 0.3;
console.log(x2 == y2); //false

// Q3.
let x3 = false;
let y3 = "0";
let z3 = 0;

console.log(x3 == y3); //true
console.log(x3 == z3); //true
console.log(x3 === y3); // false
console.log(x3 === z3); // false


// --> When using ==, JavaScript converts both values to numbers:
// false → 0
// --> "0" → 0

// Q4.
let x4 = [];
console.log(Boolean(x4)); //true

// Q5.
let x5 = "hello";
let y5 = new String("hello");

console.log(x5 == y5); //true

// --> The == operator compares values after type conversion (type coercion).
// --> Here, x is a primitive string, while y is an object (String object).
// --> When comparing x == y, JavaScript converts y (the String object) into a primitive string, so it becomes "hello" == "hello", which evaluates to true.

console.log(x5 === y5);

// --> The === operator compares both value and type without type conversion.
// --> x is a primitive string, whereas y is an object.
// --> Since their types are different (string !== object), the result is false.

// Q6.
let x6 = true;
let y6 = false;
let z6 = x6 + y6 && x6 * y6;

console.log(z6); //0

// Q7.
function foo(a, b) {
  console.log(arguments[1]);
}
foo(3);

// O/p-->
// undefined

// Q8.
let x8 = "false";
let y8 = !x;

console.log(y8); //false

// --> x = "false"
// --> x is a string containing the text "false", but it's still a non-empty string, which is truthy in JavaScript.
// --> y = !x
// --> The ! (logical NOT) operator converts the value to a boolean first using JavaScript's truthy and falsy rules.
// --> Since non-empty strings are truthy, "false" is considered true in a boolean context.
// --> !x negates true, resulting in false.
// --> console.log(y);
// This prints false to the console.

// Q9.
let x9 = 1;
let y9 = "1";

console.log(++x, ++y); //2 2

// Q10.
let x10 = "b";
let y10 = "a";

console.log(x10 + y10 + + y10 + y10); //baNaNa

// Q11.
let x11 = [2];
let y11 = 2;

console.log(x11 == y11); //true

// Q12.
const a = { b: { c: 2 } };
const b = { ...a };
a.b.c = 3;

console.log(b.b.c);  //3
console.log(b.b); {c:3}

// Q13.
let x13 = { a: 1, b: 2 };
let y13 = { b: 3 };
let z13 = { ...x13, ...y13};

console.log(z13); //{ a: 1, b: 3 }

// Q14.
let x14 = [1, 2, 3];
let y14 = x14.map((num) => {
  x14.push(num + 3);
  return num + 1;
});
console.log(x14); //[1,2,3,4,5,6]
console.log(y14); //[2,3,4]

// Q15.
let x15 = { a: 1 };
let y15 = Object.assign({}, x15);

console.log(x15 === y15); //false

// Q16.
let x16 = [1, 2, 3, 5];

x16.forEach((e) => {
  if (e > 2 && e < 5) return;
  console.log(e);  // 1 2 5
});

// O/p-->e = 1 → Condition e > 2 && e < 5 is false, so it logs 1.
// --> e = 2 → Condition e > 2 && e < 5 is false, so it logs 2.
// --> e = 3 → Condition e > 2 && e < 5 is true, so return is executed.
// --> However, return inside .forEach() only exits the current iteration, it does not stop the loop!
// --> So, nothing is logged for 3.
// --> e = 5 → Condition e > 2 && e < 5 is false, so it logs 5.

// Q17.
for (let e of x16) {
  if (e > 2 && e < 5) break;
  console.log(e); //1 2
}

// Q18.
let x18 = 10;
let y18 = 20;

console.log("total = " + x18 + y18); //1020
console.log("total = " + (x18 + y18)) //30

// Q19.
let x19 = 5;
let y19 = 6;
x19 += x19 > y19 ? x19 : y19;

console.log(x19); //11
console.log(y19); //6

// Q20.
const arr = [1, 2, 3];
arr.forEach((num) => num * 2);

console.log(arr); [1,2,3]

// Q21.
const arr21 = [1, 2, 3];
 const result = arr21.forEach((num) => num * 2);

console.log(result); //undefind

// Q22.
const arr22 = [1, 2, 3];
const results = [];

arr21.forEach((num) => {
  results.push(num * 2);
});

console.log(results); //[ 2, 4, 6 ]




















