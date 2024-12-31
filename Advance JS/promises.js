// what is promises in JS

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

//  A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise of having a value at some point in the future.

//  A Promise is in one of these states:

//  pending: initial state, neither fulfilled nor rejected.

//  fulfilled: meaning that the operation completed successfully.

//  rejected: meaning that the operation failed.

//  settled: meaning that the Promise is either fulfilled or rejected, but not pending.

//  Syntax:
//  new Promise(executor);

//  Parameters:
//  executor: A callback function containing the resolve and reject functions. The executor is called immediately by the Promise implementation. The resolve and reject functions, when called, resolve or reject the promise, respectively. The executor is passed two arguments: resolve and reject.

//  Example:

const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
// Output: Operation successful

// In the above example, a new Promise is created with an executor function that takes two arguments, resolve and reject. If the operation is successful, the resolve function is called with the success message. If the operation fails, the reject function is called with the error message. The promise is then handled using the then and catch methods to log the success message or error message accordingly.

// promise chaining
// Promises can be chained together to handle multiple asynchronous operations in a sequential manner. Each then method returns a new promise, allowing you to chain multiple asynchronous operations together.

// Example:

const promise1 = new Promise((resolve, reject) => {
  resolve("First promise resolved");
});

promise1
  .then((message) => {
    console.log(message);
    return "Second promise";
  })
  .then((message) => {
    console.log(message);
    return "Third promise";
  })
  .then((message) => {
    console.log(message);
  }); // Output: First promise resolved, Second promise, Third promise

// In the above example, the first promise is resolved with the message "First promise resolved". The then method is used to handle the resolved value and return a new value. This chaining continues with subsequent then methods, allowing you to handle multiple asynchronous operations in a sequential manner.
