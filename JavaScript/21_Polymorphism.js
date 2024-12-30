// Polymorphism: Many Forms
// Polymorphism is a feature of OOP that allows objects of different classes to be treated as objects of a common superclass.
// Polymorphism allows methods to be defined in the superclass and overridden by subclasses.
// Polymorphism is achieved through method overriding.
// Method overriding is when a subclass provides a specific implementation of a method that is already provided by its superclass.
// Polymorphism allows different classes to have methods with the same name but different implementations.

class Bird {
  fly() {
    return "The bird is flying";
  }
}
class Penguin extends Bird {
  fly() {
    return "The penguin cannot fly";
  }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly()); // The bird is flying
console.log(penguin.fly()); // The penguin cannot fly

// In the above code snippet:
// 1. The Bird class is created with a method fly that returns "The bird is flying".
// 2. The Penguin class extends the Bird class and overrides the fly method with a specific implementation that returns "The penguin cannot fly".
// 3. An object bird is created from the Bird class and the fly method is called. The result is logged to the console.
// 4. An object penguin is created from the Penguin class and the fly method is called. The result is logged to the console.
// 5. The Bird class and the Penguin class have a method with the same name fly but different implementations. This is an example of polymorphism and method overriding.
