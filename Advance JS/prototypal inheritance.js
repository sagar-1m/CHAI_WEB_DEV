// Prototypal Inheritance
// Inheritance: one object gets access to the properties and methods of another object
// Prototypal Inheritance: objects inherit from other objects
// Every object has a prototype property, which makes prototypal inheritance possible in JavaScript
// The prototype property is a reference to another object

// Example 1: Creating Objects with Prototypal Inheritance
// Create a Person object with a name property and a greet method using prototypal inheritance
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const person1 = new Person("Alice");
console.log(person1.greet()); // Output: Hello, my name is Alice

// Explain the above code

// 1. The Person function is defined with a name parameter, which sets the name property of the object.
// 2. The greet method is added to the Person prototype, which allows all instances of Person to access the greet method.
// 3. An instance of Person is created with the name "Alice" using the new keyword.
// 4. The greet method is called on the person1 instance, which returns a greeting with the name "Alice".
