// 🌱 1. What is a Constructor?

// 👉 A constructor is a special function used to create and initialize objects.
// It’s like a blueprint maker that helps us make many copies (objects) with similar properties.


// 🧱 2. Real-life Example First (to make it super clear)

// Think of a “Student” form in a school:

// You fill name, age, and grade for each student.

// The form design stays the same, but the data changes.

// 🟢 In JavaScript, that form is like a constructor function.



// Used to create objects with the new keyword.

function Person(name,age){
  this.name = name;
  this.age = age;
}
const user = new Person("Manaswini", 26);
console.log(user.name);

// ✅ Key Points:

// Used before ES6 class syntax.

// Arrow functions cannot be constructors.


// The Modern Way (Using Class in ES6)

class student{
  constructor(name,age,grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

const s1 = new student("Manaswini", 23, "A");
console.log(s1);

// Why We Use Constructor?
// | Purpose                                     | Explanation                                                   |
// | ------------------------------------------- | ------------------------------------------------------------- |
// | ✅ To **create many similar objects easily** | Instead of writing object manually each time.                 |
// | ✅ To **initialize values automatically**    | Properties get assigned right when the object is created.     |
// | ✅ To **organize code using classes**        | Especially useful in OOP-style JavaScript (React, Node, etc). |
