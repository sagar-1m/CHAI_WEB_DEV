// Abstraction
// Abstraction is the concept of hiding the complex implementation details and showing only the necessary features of the object.

class CoffeeMachine {
  start() {
    // call DB
    // filter the data
    return "Coffee Machine is starting...";
  }
  brewCoffee() {
    // complex logic
    return "Brewing coffee...";
  }

  pressStartButton() {
    let message1 = this.start();
    let message2 = this.brewCoffee();
    return `${message1} ${message2}`;
  }
}

let myMachine = new CoffeeMachine();

console.log(myMachine.pressStartButton()); // Coffee Machine is starting... Brewing coffee...

// In the above code snippet:
// 1. The CoffeeMachine class is created with three methods: start, brewCoffee, and pressStartButton. The start method simulates the starting of the coffee machine. The brewCoffee method simulates the brewing of coffee. The pressStartButton method calls the start and brewCoffee methods and returns the messages.
// 2. An object myMachine is created from the CoffeeMachine class. The pressStartButton method is called and the result is logged to the console.
// 3. The complex implementation details of starting and brewing coffee are hidden from the user. The user only needs to call the pressStartButton method to start and brew coffee. This is an example of abstraction.
