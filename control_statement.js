//  In JavaScript, control statements manage the flow of execution in a program. 

// 1. Conditional Statements 😀😆

  // I. if Statement

  let  age = 18;
  if(age >= 18){
    console.log("UR Elegible for vote👍");
  }

  // II. if-else Statement

  let num = 10;
  if(num%2 === 0){
    console.log("even Number");
  }else{
    console.log("odd Number");
  }

  // III. if else-if else Statement

  let mark = 80;
  if(mark >= 90){
    console.log("A grade");
  }else if(mark >= 80){
    console.log("B grade");
  }else{
    console.log("C grade");
  }

  // IV. Switch Case

  let day = 3;
  switch(day){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuseday");
    break;
    case 3: console.log("Wednesday");
    break;
    default:
      console.log("Invalid Day");
  }

  // 2. Looping Statements

  // I. for Loop

  for(let i = 0; i<=5; i++){
    console.log(i);
  }

  // II. While loop

  let i = 0;
  while(i<=5){
    console.log(i);
    i++;
  }

  // III. do-while Loop

  let j = 1;
  do{
    console.log(j);
    j++
  }while(j <= 5);
  

  // 3. Jump Statements

  // I. Break Statement(Exits a loop early)

  for(let i = 0; i<=5; i++){
    if(i === 3){
      console.log(i);
      break;
    }
    console.log(i);
  }

  // II. continue Statement (Skips an iteration)

  for(let i = 0; i<=5; i++){
    if(i === 3){
     
      continue;
    }
    console.log(i);
  }

  // III. return Statement (Exits from a function)

  function checkNuber(num){
    if(num<0){
        return "Negative Number";
     
    }
    return "Positive number";
  }
  console.log(checkNuber(-5));



  // 4. Exception Handling

  // try-catch-finally Statement

  try{
    let result = 10/0;
    console.log(result);
  }catch(err){
    console.log('showing error' + err)
  }finally{
    console.log("Evenry time ut should execute");
  }


//   O/P:---😂🤣

//   PS C:\Users\user\OneDrive\Desktop\JS CONCEPT> node control_statement.js
// UR Elegible for vote👍
// even Number
// B grade
// Wednesday
// 0
// 1
// 2
// 3
// 4
// 5
// 0
// 1
// 2
// 3
// 4
// 5
// 1
// 2
// 3
// 4
// 5
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 4
// 5
// Negative Number
// Infinity
// Evenry time ut should execute
// PS C:\Users\user\OneDrive\Desktop\JS CONCEPT>
