// 👉 Definition:

// Event Deligation is a technique in javascript where instead of adding an event listner to every child element, you attach a single event listner to thier parent. The event bubble Up and u handle it in one place.


// ✅ Why use it?

// Performance → fewer event listeners (instead of 1000 buttons, just 1 listener on parent).
// Dynamic elements → works even if new child elements are added later.


// 🔹 Example without event delegation:

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click",() =>{
    console.log("Button Clicked", btn.innerText);
  })
})

// 🔹 Example with event delegation:

document.getElementById("buttonContainer").addEventListener("click",(e) => {
  if(e.target.tagName === 'BUTTON'){
  console.log("button logged", e.target.innerText);
  }
})
