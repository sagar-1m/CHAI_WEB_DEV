// Encapsulation
// Encapsulation is an Object Oriented Programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse. Data encapsulation led to the important OOP concept of data hiding.

class BankAccount {
  #balance = 0; // private field  (ES2021)  (not accessible outside the class)
  deposit(amount) {
    this.#balance += amount;
    return this.#balance; // return updated balance
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.deposit(100)); // 100
console.log(account.getBalance()); // $ 100

// explain all the concepts in the above code snippet
// 1. The BankAccount class is created with a private field #balance that is initialized to 0. The private field #balance is not accessible outside the class. This is an example of encapsulation, data hiding, and security.
// 2. The deposit method takes an amount as a parameter and increments the private field #balance by the amount. The updated balance is returned. This is an example of encapsulation and data hiding.
// 3. The getBalance method returns the balance in the format "$ balance". This is an example of encapsulation and data hiding.
// 4. An object account is created from the BankAccount class. The deposit method is called with the argument 100 and the result is logged to the console. The getBalance method is called and the result is logged to the console. This is an example of encapsulation and data hiding.
