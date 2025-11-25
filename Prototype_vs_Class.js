// Prototype:---

// - In JavaScript, everything is built on prototypes (because JS is a prototype-based language).
// - Every object has an internal link to another object called its prototype.
// - Methods and properties are shared through this prototype chain.

function Person(name){
  this.name = name;
}
Person.prototype.sayHello = function(){
  return "Hello "+ this.name;
}
const p1 = new Person("moni");
console.log(p1.sayHello()); // Hello moni


// Class:

// - Classes in JavaScript (introduced in ES6) are basically syntactic sugar on top of prototypes.
// - They make code cleaner and more familiar (like Java, C++).
// - Under the hood, classes still use prototypes.

class person{
  constructor(name){
    this.name = name;
  }


sayHello(){
  return "Hello"+this.name;
}
}

const p2 = new Person("sasmal");
console.log(p2.sayHello());  // Hello, Sasmal