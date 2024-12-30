// A constructor function is a function that is used to create objects with a specific blueprint or type.
// The constructor function is called with the new keyword to create a new object.
//the this keyword refers to the object that will be created by the constructor function.

function Person(name, age) {
  this.name = name; // this refers to the object that will be created by the constructor function Person
  this.age = age;
}
// The constructor function Person is created with two parameters: name and age
let person1 = new Person("John", 30);
// The object person1 is created using the constructor function Person with the arguments "John" and 30
// The new keyword is used to create a new object from the constructor function Person

let person2 = new Person("Sara", 25);
// The object person2 is created using the constructor function Person with the arguments "Sara" and 25

console.log(person1); // Person { name: 'John', age: 30 }
console.log(person2); // Person { name: 'Sara', age: 25 }

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is ${this.type} tea`;
  }; // The describe method is added to the object created by the constructor function Tea
}
let tea1 = new Tea("green");
let tea2 = new Tea("black");
console.log(tea1.describe()); // This is green tea
console.log(tea2.describe()); // This is black tea

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `The ${this.species} makes a sound`; // The sound method is added to the prototype of the constructor function Animal
};
let dog = new Animal("dog");
let cat = new Animal("cat");
console.log(dog.sound()); // The dog makes a sound
console.log(cat.sound()); // The cat makes a sound

//checking error for new keyword
function Drink(type) {
  if (!new.target) {
    throw new Error("Drink must be called with the new keyword");
  }
  this.type = type;
}
let drink1 = new Drink("coffee");
console.log(drink1); // Drink { type: 'coffee' }
// let drink2 = Drink("tea"); // Error: Drink must be called with the new keyword
// The error is thrown because the Drink function is called without the new keyword (Drink("tea"))
// console.log(drink2); // undefined
