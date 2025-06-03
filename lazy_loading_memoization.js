// Lazy Loading
// Lazy loading in JavaScript is a performance optimization technique where resources (such as images, scripts, or components) are loaded only when they are needed, rather than all at once when the page loads. This helps improve initial page load speed and reduces unnecessary data transfer.

// --> Images – Load images only when they come into the viewport.
// --> Modules (Code Splitting) – Load JavaScript modules on demand.
// --> Components (React/Vue/Angular) – Load UI components only when they are required.

{/* <img src="image.jpg" alt="Lazy Image" loading="lazy"> */}


// Code Spliting:---
// Code splitting is a technique in JavaScript that allows you to split your application code into smaller bundles (chunks) and load them on demand instead of loading everything at once. This improves performance by reducing the initial load time.

// Why Use Code Splitting?
// -->Faster Load Time → Only necessary code is loaded initially.
// --> Efficient Resource Usage → Unused code isn't downloaded until needed.
// --> Better User Experience → Reduces lag and improves page responsiveness.

// Memoization :------------
// Memoization in JavaScript is an optimization technique used to improve the performance of expensive function calls by storing their results and returning the cached result when the same inputs occur again.

// How Memoization Works:---
// 1. A function is wrapped in such a way that it stores previously computed results in a cache (usually an object or Map).
// 2. When the function is called with a particular input, it first checks if the result is already cached.
// 3. If found, it returns the cached result, avoiding recomputation.
// 4. If not found, it computes the result, stores it in the cache, and then returns the result.

// withoutMemoization
function fibonacci(n){
  if(n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(40));

// WithMemoization
function memoizationFib(){
  let cache = {}
  return function fib(n){
    if(n in cache) return cache[n];
    if(n <= 1){
      return n;
    }
    cache[n]  = fib(n-1)+fib(n-2);
    return cache[n];
  }
}
const fib = memoizationFib();
console.log(fib(40));

