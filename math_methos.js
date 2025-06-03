// 1. Basic Math Methods

console.log(Math.abs(-10)); //10
console.log(Math.abs(5)); //5

console.log(Math.sign(-5)); //-1
console.log(Math.sign(6)); // 1
console.log(Math.sign(0)); //0

console.log(Math.round(4.6)); //5
console.log(Math.round(4.4)); // 4 

console.log(Math.floor(5.9)); //5
console.log(Math.floor(-3.2)); //-4

console.log(Math.ceil(3.1)); //4
console.log(Math.ceil(-4.2));  //-4

console.log(Math.trunc(4.9)); // 4 (remove the decimal part only)
console.log(Math.trunc(-4.9)); // -4

console.log(Math.pow(2, 3)); //8
console.log(Math.pow(5, 5)); //3125

console.log(Math.sqrt(16)); //4
console.log(Math.sqrt(64)); //8

console.log(Math.cbrt(27)); //3
console.log(Math.cbrt(125)); //5

console.log(Math.max(10, 20, 5)); // 20
console.log(Math.max(-1, -5, -10)); // -1

console.log(Math.min(10, 20, 5)); // 5
console.log(Math.min(-1, -5, -10)); // -10

console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); //// Random number between 0-10

function getRandom(min,max){
  return Math.floor(Math.random() * (max-min+1))+min;
}
console.log(getRandom(10,100)); //71

console.log(Math.log10(100)); // 2
console.log(Math.log10(1000)); // 3

console.log(Math.log2(8)); // 3
console.log(Math.log2(16)); // 4

function calculateArea(radius) {
  return Math.floor(Math.PI * Math.pow(radius, 2));
}
console.log(calculateArea(5));