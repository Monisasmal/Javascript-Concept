// 🕒 Async Function

// Used for asynchronous operations with await.

async function fetchData(){
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data)
}

// ✅ Key Points:

// Always returns a Promise.

// Use await to handle async operations.