//Synchronous Javascript code
// Synchronous JS code is executed line by line and it will wait for the current line to be executed  before moving to the next line of code.

console.log("explore1.js");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// explain the above synchronous code
// 1. console.log("explore1.js") will be executed first and it will print "explore1.js" in the console.
// 2. Then, the for loop will be executed and it will print the value of i from 0 to 9 in the console.
// 3. After the for loop is executed, the code will be completed.

// Asynchronous Javascript code
// Asynchronous JS code is executed line by line and it will not wait for the current line to be executed before moving to the next line of code.

// Example 1: setTimeout
console.log("explore1.js"); // 1

setTimeout(() => {
  console.log("setTimeout");
}, 2000); // 3

console.log("explore1.js end"); // 2
