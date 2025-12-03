// async → script loads parallel, executes immediately.

// defer → script loads parallel, executes after HTML parsing.

// ✅ What happens normally?
// When browser sees a <script> tag:
// HTML parsing stops ❌
// Download JS ✅
// Run JS ✅
// Then continue HTML ✅
// Result → Page loads slow, because script blocks rendering.


// 🚀 async vs defer (Easy Brain Trick)

// | Feature         | async                                | defer                                   |
// | --------------- | ------------------------------------ | --------------------------------------- |
// | Download JS     | ✅ Parallel                           | ✅ Parallel                              |
// | HTML Parsing    | ✅ Continues                          | ✅ Continues                             |
// | When JS Runs?   | Immediately when downloaded          | After HTML is fully parsed              |
// | Execution order | Not guaranteed ❌                     | Guaranteed ✅                            |
// | Best for        | independent scripts (analytics, ads) | scripts needed for page (React, app.js) |




// 🧪 Live Example like Browser Situation
// ✅ Using async
//<script async src="analytics.js"></script>

// Real Life example
// Google Analytics, Facebook Pixel, Ads script

// Why async?
// These scripts don’t affect page content, so run whenever ready.

// ✅ Using defer

// Real Life example
// Your React app, navbar, buttons, DOM logic.

// Why defer?
// JS needs HTML ready first.

// Load HTML 📄 + Download JS 🌐 together
// Finish HTML ✅
// Then run JS ✅ (order maintained)


// ❌ Without async/defer (slow)

//<script src="big-file.js"></script>

//<p>Content shows late ❌</p>
