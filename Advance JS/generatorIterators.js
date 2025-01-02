// Generators
// They are functions that can be paused and resumed  at a later time and can be used to create iterators in a simpler way.
// They are created using the function* syntax and yield keyword.
// yield keyword is used to pause and resume a generator function.  It is used to pause the execution of a generator function and to yield control back to the caller.
// The yield keyword actually returns an object with two properties, value and done. Value is the yielded value and done is a boolean indicating whether the generator has yielded its last value.
// The generator function can be called like a normal function but it returns an iterator object.

// Iterator
// An iterator is an object which implements the next method. next method returns an object with two properties, value and done. Value is the yielded value and done is a boolean indicating whether the generator has yielded its last value.
// The iterator object can be called like a normal function but it returns an iterator object.

// Example
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generators can be used to create infinite sequences.
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const iterator = infiniteSequence();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
