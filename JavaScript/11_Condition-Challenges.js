// Checking if a number is greater than another number

let myNumber = 100;
let yourNumber = 10;
console.log("regular comparison");

if (myNumber > yourNumber) {
  console.log("My number is greater than your number");
} else {
  console.log("My number is less than your number");
}

// Checking if a string is equal to a another string

let myString = "100";
let yourString = "100";
console.log("regular comparison");

if (myString == yourString) {
  console.log("My string is equal to your string");
} else {
  console.log("My string is not equal to your string");
}

// Checking if a variable is a number or not

let myValue = 100;
console.log("regular comparison");

if (typeof myValue === "number") {
  console.log("My value is a number");
} else {
  console.log("My value is not a number");
}

// Checking if a boolean value is true or false

let myBoolean = true;
console.log("regular comparison");

if (myBoolean) {
  console.log("My boolean is true");
} else {
  console.log("My boolean is false");
}

// Checking if  a array is empty or not

let myArray = [1, 2, 3, 4, 5];
console.log("regular comparison");

if (myArray.length > 0) {
  console.log("My array is not empty");
} else {
  console.log("My array is empty");
}
