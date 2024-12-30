// code snippets for prototypes in JavaScript

//to access prototype of an object, use object.__proto__ or Object.getPrototypeOf(object)
let computer = { cpu: "i7", ram: "16GB" };
// console.log(computer.__proto__); // {}  (empty object)

let lenovo = {
  brand: "Lenovo",
  model: "ThinkPad",
  __proto__: computer, // computer object is the prototype of lenovo object (inheritance)
};
console.log(lenovo.__proto__); // { cpu: 'i7', ram: '16GB' }  (object with cpu and ram properties)

let genericCar = { tyres: 4 };
let bmw = { brand: "BMW" };
Object.setPrototypeOf(bmw, genericCar); // genericCar object is the prototype of bmw object (inheritance)
console.log(`bmw`, Object.getPrototypeOf(bmw)); // {}  (empty object)
