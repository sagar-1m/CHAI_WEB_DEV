class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  } // The constructor function Vehicle is created with three parameters: make, model, and year and the properties are assigned to the object created by the constructor function Vehicle
  start() {
    return `${this.make} is a car model of ${this.model} and was manufactured in ${this.year}`;
  }
}

class Car extends Vehicle {
  // The Car class extends the Vehicle class
  drive() {
    return `${this.make} is driving an inheritance from the Vehicle class`;
  }
}

let car1 = new Car("Toyota", "Corolla", 2018);
console.log(car1.start()); // Toyota is a car model of Corolla and was manufactured in 2018
console.log(car1.drive()); // Toyota is driving an inheritance from the Vehicle class

let VehicleOne = new Vehicle("Toyota", "Corolla", 2018);
console.log(VehicleOne.start()); // Toyota is a car model of Corolla and was manufactured in 2018
