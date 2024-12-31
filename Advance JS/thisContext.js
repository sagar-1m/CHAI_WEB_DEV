// this, bind, call, apply

// 1. this  - The this keyword refers to the object it belongs to. It has different values depending on where it is used:
// - In a method, this refers to the owner object.
// - Alone, this refers to the global object.
// - In a function, this refers to the global object.
// - In a function, in strict mode, this is undefined.
// - In an event, this refers to the element that received the event.
// - Methods like call(), and apply() can refer this to any object.
// Example:

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // Output: John Doe

// In the above example, this refers to the person object, so this.firstName and this.lastName refer to the properties of the person object.

// 2. bind - The bind() method creates a new function that, when called, has its this keyword set to the provided value. It allows you to set the value of this independent of how the function is called.
// Example:

const person2 = {
  firstName: "Jane",
  lastName: "Doe",
};

function fullName() {
  return this.firstName + " " + this.lastName;
}

const fullNameBound = fullName.bind(person2);
console.log(fullNameBound()); // Output: Jane Doe

// In the above example, the bind method is used to create a new function fullNameBound with this set to the person2 object.

// 3. call - The call() method calls a function with a given this value and arguments provided individually.
// Example:

const person3 = {
  firstName: "Alice",
  lastName: "Smith",
};

function greet(message) {
  return `${message}, my name is ${this.firstName} ${this.lastName}`;
}

console.log(greet.call(person3, "Hello")); // Output: Hello, my name is Alice Smith

// In the above example, the call method is used to call the greet function with this set to the person3 object and the message argument provided.

// 4. apply - The apply() method calls a function with a given this value and arguments provided as an array.
// Example:

const person4 = {
  firstName: "Bob",
  lastName: "Johnson",
};

function introduce(greeting, farewell) {
  return `${greeting}, my name is ${this.firstName} ${this.lastName}. ${farewell}`;
}

console.log(introduce.apply(person4, ["Hi", "Goodbye"])); // Output: Hi, my name is Bob Johnson. Goodbye

// In the above example, the apply method is used to call the introduce function with this set to the person4 object and the greeting and farewell arguments provided as an array.

// These methods (bind, call, apply) are useful for setting the value of this in functions and methods, allowing for more flexible and controlled behavior in JavaScript code.
