// 1. Object
let username = {
  firstName: "Sagar",
  lastName: "Gupta",
  age: 25,
  isAdult: true,
  hobbies: ["coding", "reading", "writing"],
};
console.log(username); // {}
console.log(typeof username); // object

const user = {
  name: "Sagar",
  age: 25,
  "FAther Name": "Ramesh",
};
console.log(user); // { name: 'Sagar', age: 25 }
console.log(user.name); // Sagar
user.name = "Sagar Gupta";
console.log(user.name); // Sagar Gupta
user["name"] = "Sagar";
console.log(user.name); // Sagar
user.sirName = "Chopra";
console.log(user); // { name: 'Sagar', age: 25, sirName: 'Chopra' }
console.log(user["FAther Name"]); // Ramesh

let Today = new Date();
console.log(Today); // 2021-08-16T11:33:01.000Z

// 2. Array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
