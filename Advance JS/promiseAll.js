// use promiseAll to fetch data from multiple sources using async/await

// Solution
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comments fetched successfully!");
    }, 4000);
  });
}

async function fetchDataAsync() {
  try {
    console.log("Fetching data...");
    const [data, comments] = await Promise.all([
      fetchData(),
      fetchCommentData(),
    ]);
    console.log(data);
    console.log(comments);
    console.log("All data fetched successfully!");
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchDataAsync();

// Output:
// Fetching data...
// Data fetched successfully!
// Comments fetched successfully!
// All data fetched successfully!

// In the above example, the fetchData function and fetchCommentData function return promises that resolve after 2 seconds and 4 seconds, respectively. The fetchDataAsync function uses the await keyword with Promise.all to wait for both promises to resolve. This allows the code to fetch data from multiple sources in parallel and handle the results once all promises have  been resolved.
