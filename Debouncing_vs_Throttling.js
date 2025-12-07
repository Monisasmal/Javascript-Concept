// 🕐 Debounce

// 👉 Wait untill the user stop doing something, then run the function.
// - Search Box 
//  - Imagine you’re typing in Google: c, ca, car.
//  - Without debounce → it makes 3 API calls (slow).
//  - With debounce → it waits until you stop typing for (say 500ms), then makes only 1 API call.

function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=> fn.apply(this,args),delay);
  }
};
function search(){
console.log("Searching for", value);
}
const debounceSearch = debounce(search,500);
debounceSearch("c");
debounceSearch("ca");
debounceSearch("car");

// Only "car" will print after 500ms


// 🕒 Throttle

// 👉 Run the function at most once in a given time, no matter how many times it’s called.

// - Example: Scroll event
//   - Imagine you scroll a page → it fires events hundreds of times per second.
//   - Without throttle → your code lags (too many calls).
//   - With throttle → it executes once every 1 second maximum.


  function throttle(fn, limit){
    let flag = true;
    return function(... args){
      if(flag){
        fn.apply(this,args);
          flag = false;
          setTimeout(()=> flag = true, limit);
        }
      }
    }
  function logScroll(){
    console.log("Scrolled at:", Date.now());
  }

  window.addEventListener("scroll", throttle(logScroll, 1000));
