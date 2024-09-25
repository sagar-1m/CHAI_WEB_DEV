// Number

// 1. Number
let score = 100;

console.log(score); // 100
let anotherscore = new Number(100); // Number {100} // new keyword is used to create an object of Number class in JavaScript which is a wrapper class for primitive number data type.
// console.log(anotherscore); // [Number: 100]

console.log(typeof score); // number
console.log(typeof anotherscore); // object

// 2. Boolean
let isTrue = true;
let anotherTrue = new Boolean(true); //not recommended to use this way

console.log(isTrue); // true
// console.log(anotherTrue); // [Boolean: true]

console.log(typeof isTrue); // boolean
console.log(typeof anotherTrue); // object

// 3. null and undefined
let firstName; // undefined is a type and value both in JavaScript which is assigned to a variable that is not assigned any value.
console.log(firstName); // undefined

// console.log(lastName); // ReferenceError: lastName is not defined
// lastName is not defined in the code. It is not declared anywhere in the code. So, it will throw an error.

let middleName = null; // null is a type in JavaScript which is assigned to a variable that is explicitly assigned no value.
console.log(middleName); // null

let lastName = undefined; // undefined is a type in JavaScript which is assigned to a variable that is explicitly assigned no value.
console.log(lastName); // undefined

// 4. String
let name = "Sagar";
console.log(name); // Sagar

// double quotes ("") are used to define a string in JavaScript.

let anotherName = "Sagar";
console.log(anotherName); // Sagar

// single quotes ('') can also be used to define a string in JavaScript.

let oldGreet = "Hello, " + name + "!";
console.log(oldGreet); // Hello, Sagar!

// concatenation of strings using + operator is allowed in JavaScript but it is not recommended to use this way. It is recommended to use template literals.

let newGreet = `Hello, ${name}!`;
console.log(newGreet); // Hello, Sagar!

// template literals are used to concatenate strings in JavaScript. It is recommended to use this way. It is more readable and easy to use. It is introduced in ES6. It is also called as string interpolation. It is enclosed in backticks (`) instead of single quotes ('') or double quotes (""). It is used to embed expressions in strings.

// 5. Symbol
let symbol1 = Symbol("symbol1");
let symbol2 = Symbol("symbol2");

console.log(symbol1); // Symbol(symbol1)
console.log(symbol2); // Symbol(symbol2)

console.log(symbol1 === symbol2); // false
