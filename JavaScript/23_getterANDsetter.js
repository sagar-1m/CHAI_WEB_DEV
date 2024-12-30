// Getter and Setter in JavaScript
// In JavaScript, getters and setters are used to define the properties of an object. Getters are used to get the value of a property, and setters are used to set the value of a property.
// Getters and setters are used to access and modify the properties of an object. Getters and setters are defined using the get and set keywords.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;
  }
  get salary() {
    return `You are not allowed to access the salary of ${this.name}`;
  }

  set salary(value) {
    if (value < 0) {
      throw new Error("Salary cannot be negative");
    }
    this._salary = value;
  }
}
let employee = new Employee("John", 50000);
console.log(employee.name); // John
console.log(employee.salary); // You are not allowed to access the salary of John
