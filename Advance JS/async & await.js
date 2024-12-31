// Aysnc and Await
// Async and Await are the new way to handle asyncronous code in javascript.
// Async functions are functions that return a promise. It allows you to write promise based code as if it were synchronous, but without blocking the execution thread. It operates asynchronously via the event-loop.
// Await is used to wait for a promise to resolve or reject. It can only be used inside an async function.
// Example:

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function fetchDataAsync() {
  try {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchDataAsync();
// Output:
// Fetching data...
// Data fetched successfully!

// In the above example, the fetchData function returns a promise that resolves after 2 seconds. The fetchDataAsync function is an async function that uses the await keyword to wait for the fetchData promise to resolve. This allows the code to appear synchronous while still being asynchronous.
