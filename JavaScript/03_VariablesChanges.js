// show difference between var, let and const
var p = 10;
console.log(p); // 10
p = 20; // reassigning the value of p from 10 to 20 is allowed in var
console.log(p); // 20

let q = 10;
console.log(q); // 10
q = 20; // reassigning the value of q from 10 to 20 is allowed in let
console.log(q); // 20

const r = 10;
console.log(r); // 10
//r = 20; // TypeError: Assignment to constant variable.
//console.log(r);
