const person ={
  firstName:"Manaswini",
  lastName:"Sasmal",
  fullName:function(){
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(person.fullName()); //Manaswini Sasmal

// Built-in Object Methods
//1.  Object.keys(obj):---  Returns an array of the object's keys.

const user = { name: "Limma", age: 25, country: "India" };
console.log(Object.keys(user)); //[ 'name', 'age', 'country' ]

// 2. Object.values(obj) : Returns an array of the object's values.

console.log(Object.values(user)); //[ 'Limma', 25, 'India' ]

// 3. Object.entries(obj):--- Returns an array of key-value pairs.
console.log(Object.entries(user)); //[ [ 'name', 'Limma' ], [ 'age', 25 ], [ 'country', 'India' ] ]

// 4.Object.assign(target, source):---  Copies properties from one object to another.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); //{ a: 1, b: 2 }

// 5. Object.freeze(obj):-- Prevents modifications to an object.
const obj5 = {x:10};
console.log(obj5.x); //10
obj5.x = 30;
Object.freeze(obj5);
obj5.x= 20;
console.log(obj5); //{x:30}

// 6. Object.seal(obj):-- Prevents adding/removing properties but allows modification of existing properties.
const obj6 = {x:30};
console.log(obj6); //{x:30}
Object.seal(obj6);
obj6.x = 40;
obj6.z = 50;
console.log(obj6); //{x:40}

// 7. Object.hasOwnProperty(prop):--  Checks if an object has a specific property.(return true or false).
console.log(user.hasOwnProperty("name")); //true
console.log(user.hasOwnProperty("mail")); //false

// 8. Object.create(proto, properties):-- Creates a new object with the given prototype and optional properties.
const personPrototype = {
  greet(){
    return `Hello, my name is ${this.name}`
  }
}
const result = Object.create(personPrototype);
result.name = "Manaswini";
console.log(result.greet()); //Hello, my name is Manaswini

// 9. Object.defineProperty(obj, prop, descriptor) :-- Defines a new property on an object with specific characteristics (e.g., writable, enumerable, configurable).

const user9 = {};
Object.defineProperty(user9, "name", {
  value:"moni",
  // value1:25,
  writable:false,
  enumerable:true,
  configurable:false
})
console.log(user9.name); // moni
// console.log(user9.age)
user9.name = "mama";
console.log(user9.name); //moni(can't modify)

// 10. Object.is(value1, value2):---  Compares two values and checks if they are exactly the same (similar to ===, but more accurate for NaN and -0).

console.log(Object.is(25,25)); //true
console.log(Object.is(NaN,NaN)); //true
console.log(Object.is(0,-0)); //false

// 11. Object.fromEntries(entries):--  Converts an array of key-value pairs back into an object.
const entries = [["name", "Alice"], ["age", 30]];
const obj11 = Object.fromEntries(entries);
console.log(obj11); //{ name: 'Alice', age: 30 }




