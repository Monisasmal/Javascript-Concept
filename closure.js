// What is a Closure 

// A Closure is a javascript  feature that allows a function to remember and also access it's lexical scope even when it is executed outside of that scope.

// Understanding Closures
// When a function is declared inside another function, it inherits the outer function’s variables. If the inner function is returned or assigned to a variable, it retains access to those variables even after the outer function has finished executing.

function outerFunction(){
  let count = 0;

  function innerfunction(){
    count++;
    console.log(count);
  }
  return innerfunction;
}

const result = outerFunction();
result();
result();
result();

// How Does It Work?

// 1. outerFunction is called, creating a local variable count and defining innerFunction.

// 2. innerFunction is returned and assigned to result.

// 3. Even though outerFunction has finished executing, innerFunction still has access to count because of closure.

// 4. Each time result() is called, it updates and prints the value of count.


function multiplyer(factor){
  return function(num){
    return num * factor;
  }
}
const double = multiplyer(5);
const triple = multiplyer(6);

console.log(double(7));
console.log(triple(8));

// O/P-->
// 1
// 2
// 3
// 35
// 48
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> 