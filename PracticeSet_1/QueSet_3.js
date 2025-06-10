// Q1.
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

// --> a is an empty object: {}.
// --> b and c are separate objects with different key values.
// --> When assigning a[b] = 123;, JavaScript converts the object b to a string because object keys in JavaScript objects are always strings or symbols.
// --> The default string conversion for an object is "[object Object]".
// --> So, the assignment is essentially a["[object Object]"] = 123;.
// --> When assigning a[c] = 456;, the same conversion happens:
// --> a["[object Object]"] = 456;.
// --> This overwrites the previous value (123) with 456.
// --> When we log console.log(a[b]);, it is equivalent to console.log(a["[object Object]"]);, which returns 456.

// Q2.
let x = new Map();  // Creates an empty Map
let y = { key: "b" };  // Creates an object b
let z = { key: "c" };  // Creates another object c

x.set(b, 123);  // Stores 123 with object b as the key
x.set(c, 456);  // Stores 456 with object c as the key

console.log(x.get(b)); // 123
console.log(x.get(c)); // 456

// --> Here, b (an object) is used as a key, and 123 is stored as its value.
// --> Since Map stores keys by reference (not by string conversion like {}), b remains a unique key.
// --> The object c is used as a key, and 456 is stored as its value.
// -->Since c is a different object (different reference from b), it does not overwrite b's value.

// Q3.

let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key); //new value another value new value

// Q4.
const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const d = obj.b;

obj.b(); //foo
d(); //Undefined

// --> When the method obj.b is called directly on obj, the output will be "foo". This is because this refers to the object that the method is called on, and obj.a is equal to "foo".

// --> When the variable c is assigned the value of obj.b, it is a reference to the function itself and not the object obj. When c is called, it is not called on an object, so this will not refer to obj and the value of this.a is undefined. As a result, the output when calling c() will be undefined.

// Q5.

const x5 = { foo: 1 };
const y5 = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x5)); //2
console.log(addFoo(y5)); //3

// Q6.
const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// Q/p--> after 1 s print
// 5
// 5
// 5
// 5
// 5

// Q7.
const arr7 = [1, 2, 3, 4, 5];

arr7.forEach(function (element) {
  console.log(element);
});

// O/p--> 1,2,3,4,5

// Q8.
let x8 = 1;

if (function f() {}) {
  x8 += typeof f;
}

console.log(x8);  // 1undefined

// Q9.
let a9 = {
  x: 1,
  y: 2,
};
let b9 = a9;
a9.x = 5;
console.log(a9); //{ x: 5, y: 2 }
console.log(b9); //{ x: 5, y: 2 }

// Q10.
let x10 = [1, 2, 3];
let y10 = [1, 2, 3];
let z10 = y10;

console.log(x10 == y10); //false
console.log(x10 === y10); //false
console.log(z10 == y10); //true
console.log(z10 == x10); //true

// Q11.
let x11 = [1, 2, 3];
let y11 = x11; 
let z11 = y11;

console.log(x11 == y11);  // true
console.log(x11 === y11); // true
console.log(z11 == y11);  // true
console.log(z11 == x11);  // true

// Q12.
var x12 = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x12++;
    console.log(x12);
  }, 1000);
}

// O/p--> 1 2 3 4 5

// Q13.
let a13 = { x: 1 };
let b13 = { x: 2 };
let c13 = { x: 3 };
let d13 = { x: 4 };
let e13 = { x: 5 };
let arr13 = [a13, b13, c13, d13, e13];

arr13.forEach((obj) => (obj.x = obj.x * 2));

console.log(a13.x, b13.x, c13.x, d13.x, e13.x); //2 4 6,8 10

// Q14.
let num = 0;

function test() {
  var num = 1;
  return num;
}

console.log(test()); //1
console.log(num); //0

// Q15.
let obj15 = { name: "John", age: 25 };
let newObj = { ...obj15, age: 30 };

console.log(obj15.age); // 25
console.log(newObj.age); //30

// Q16.
const add = (a = 1, b = 2) => a + b;
console.log(add()); //3
console.log(add(5)); //7
console.log(add(undefined, 10)); //11

// Q17.
const name = "John";
const age = 25;

const user = { name, age };
console.log(user); //{ name: 'John', age: 25 }

// Q18.
const arr18 = [1, 2, 3];
const [a18, b18, c18] = arr18;

console.log(a18); //1
console.log(b18); //2
console.log(c18); //3

// Q19.
console.log(typeof null); //object
console.log(typeof undefined); //undefind
console.log(null === undefined); //false
console.log(null == undefined); //true

// Q20.
let x20 = { b: 1, c: 2 };
let y20 = Object.keys(x20);
console.log(y20.length); //2

