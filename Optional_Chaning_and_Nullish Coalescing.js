// ✅ 1. Optional Chaining (?.)

// Optional chaining lets you safely access nested object properties without throwing an error if something is undefined or null.

// 🔥 Problem without optional chaining
user.profile.address.city

// If profile is missing → ❌ TypeError: Cannot read property 'address' of undefined

// ✅ Solution with optional chaining
user?.profile?.address?.city

// If any part is undefined → the whole expression returns undefined instead of crashing.

// 👉 When to use?

// When accessing deep nested objects, API data, or optional values.

const user = {
  name: "John",
  profile: null
};

console.log(user?.profile?.email); // undefined (no error)



// ✅ 2. Nullish Coalescing (??)

// The ?? operator returns the right side value only when the left side is:
// --> null
// --> undefined

// 🔥 Why useful?

// Sometimes values like 0, "" (empty string), or false are valid, but JavaScript treats them as falsy.
// || (OR) treats falsy values as empty → undesired.

let count = 0;

console.log(count || 10);  // 10  (wrong for our case)
console.log(count ?? 10);  // 0   (correct)


let username = null;

console.log(username ?? "Guest"); // "Guest"
