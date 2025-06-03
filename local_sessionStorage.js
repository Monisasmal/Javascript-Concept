// Local Storage and Session Storage in JavaScript

// Both Local Storage and Session Storage are part of the Web Storage API and allow you to store key-value pairs in a web browser. They are used to persist data on the client side.

// 1. Local Storage:--------------
// Local Storage provides a way to store data in the browser with no expiration time. The data remains available even after the page is reloaded or the browser is closed and reopened.

// --> Data persists permanently until manually removed by the user or through JavaScript.
// --> Stored data is accessible only within the same origin (protocol + domain + port).
// --> Storage limit: About 5-10 MB per domain.
// --> Only stores strings (must convert objects to JSON).

localStorage.setItem("userName","moni");
console.log(localStorage.getItem("userName"));
localStorage.removeItem("userName");
localStorage.clear();


// 2. Session Storage:--------------------
// Session Storage is similar to Local Storage, but the data is only stored for the duration of the page session. Once the browser tab or window is closed, the data is automatically deleted.

// --> Data is stored only for the session (deleted when the tab or window is closed).
// --> Stored data is accessible only within the same session and origin.
// --> Storage limit: Similar to Local Storage (5-10 MB).
// --> Only stores strings (objects need to be converted to JSON).

sessionStorage.setItem("userName","mama");
console.log(sessionStorage.getItem("userName"));
sessionStorage.removeItem("userName");
sessionStorage.clear();



