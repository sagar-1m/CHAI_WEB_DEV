/*
1. Write a function named `makeTea` that takes one parameter called `teaType` and returns a string like `"Making green tea"` when called with `"green tea"`.
Store the result in a variable called `teaMessage`.
*/
function makeTea(teaType) {
  // teaType is the parameter of the function makeTea
  return `Making ${teaType}`;
  // The function returns a string "Making green tea" when called with "green tea"
}
let teaMessage = makeTea("green tea");
// The function makeTea is called with the argument "green tea" and the result is stored in the variable teaMessage
console.log(teaMessage); // Making green tea

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. inside this fucntion, create another fucntion named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` inside `orderTea` and store the result in a variable called `confirmation`.
*/
function orderTeas(teaType) {
  function confirmOrder() {
    // Nested function confirmOrder is created inside the orderTeas function
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}
let confirmation = orderTeas("chai");
console.log(confirmation); // Order confirmed for chai

/*
3. Write a arrow function named `calculateTotal` that tales two parameters: `price` and `quantity`. The function should return the total cost by multiplying the price and quantity.
Store the result in a variable called `total`.
*/
let calculateTotal = (price, quantity) => price * quantity;
// Arrow function calculateTotal takes two parameters: price and quantity and returns the total cost by multiplying the price and quantity
let total = calculateTotal(5, 2);
console.log(total); // 10

/*
4. Write a function named `processTeaOrder` that makes another function, `makeTea`, as a paramter and calls it with the argument `"black tea"`. 
Return the result of the `makeTea` function.
*/
//higher order function
function processTeaOrder(makeTea) {
  // makeTea is the parameter of the function processTeaOrder
  return makeTea("black tea");
  // The function makeTea is called with the argument "black tea" and the result is returned by the function processTeaOrder
}
let order = processTeaOrder(makeTea);
// The function processTeaOrder is called with the argument makeTea and the result is stored in the variable order
console.log(order); // Making black tea

/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a string like `"Making green tea"`.
Store the result in a variable called `teaMaker` and call the function with the argument `"green tea"`.
*/
function createTeaMaker() {
  return function (teaType) {
    // The returned function takes one parameter, teaType and returns a string "Making green tea" when called with "green tea"
    return `Making ${teaType}`;
    // The returned function returns a string "Making green tea" when called with "green tea"
  };
}
let teaMaker = createTeaMaker();
// The function createTeaMaker is called and the result is stored in the variable teaMaker
let message = teaMaker("green tea");
// The function teaMaker is called with the argument "green tea" and the result is stored in the variable message
console.log(message); // Making green tea
