// what is closure in javascript
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, define a function inside another function and expose it.

// Example 1
function outerFunction() {
  const outer = "I see the outer variable!";
  function innerFunction() {
    console.log(outer);
  }
  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: I see the outer variable!

// explain the above code
// 1. The outerFunction is defined with a variable outer and an innerFunction.
// 2. The innerFunction has access to the outer variable, which is defined in the outerFunction.
// 3. The outerFunction returns the innerFunction.
// 4. The innerFunc variable is assigned the return value of outerFunction.
// 5. The innerFunc is called, which prints the value of the outer variable.

// explain lexical scoping in javascript
// Lexical scoping is a way to resolve variables in a programming language. In JavaScript, the lexical scope is defined by the location where a variable is declared. The lexical scope allows inner functions to access variables from the outer function.
