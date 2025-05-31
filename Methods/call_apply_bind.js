// 1. call()

// --> Invokes a function immediately.
// --> The first argument is the this context.
// --> The following arguments are passed individually.

function greeting(greet,punchuation){
  console.log(`${greet} ${this.name} ${punchuation}`);
}
const person = {name:'moni'};
greeting.call(person, 'hello', '!');

// O/P-->
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> node call_apply_bind.js
// hello moni !
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// apply()

// Works like call, but arguments are passed as an array.

function greet(greeting){
  console.log(`${greeting} ${this.name}`);
}
const persons = {name:'mama'};
greet.apply(persons,['hello']);

// O/P-->
// hello mama
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods>

// 3. bind()

// --> Returns a new function with the specified this context.
// --> Does not invoke the function immediately.

const greetAlice = greeting.bind(persons,'hey','!!');
greetAlice();

// O/p-->
// hey mama !!
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT\Methods> 