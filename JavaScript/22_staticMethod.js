// static method
// A static method is a method that belongs to the class itself and not to the instances of the class. Static methods are defined using the static keyword. Static methods are called on the class itself, not on an instance of the class.
// Static methods are useful for utility functions that are related to the class but do not require an instance of the class to be called.

class Math {
  static add(x, y) {
    return x + y;
  }
  static subtract(x, y) {
    return x - y;
  }
}
// The Math class is created with two static methods: add and subtract
console.log(Math.add(5, 3)); // 8
console.log(Math.subtract(5, 3)); // 2
// The static methods add and subtract are called on the Math class itself
// The add method is called with the arguments 5 and 3 and the result is logged to the console
// The subtract method is called with the arguments 5 and 3 and the result is logged to the console
