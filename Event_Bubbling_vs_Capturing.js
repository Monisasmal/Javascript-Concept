// Bubbling (default): Event travels from child → parent → ancestor.

<div id="parent" style="padding:30px; background:lightblue;">
  parent
  <button id="child">Child</button>
</div>

document.getElementById("parent").addEventListener("click", () =>{
  console.log("parent clicked")
},false); 

document.getElementById("child").addEventListener("click", () =>{
  console.log("child Clicked");
},false);


// Capturing : Event travel from parent - child

<div id="parent">
  Parent
  <button id="child">Child</button>
</div>

document.getElementById("parent").addEventListener("click",()=>{
  console.log("parent");
},true);
document.getElementById("child").addEventListener("click",()=>{
  console.log("parent clicked")
},true);
