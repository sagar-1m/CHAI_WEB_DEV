var score = 102;
console.log(score); // 102
console.log(typeof score); // number

let name = "Sagar";
console.log(name); // Sagar
console.log(typeof name); // string

let isTrue = true;
console.log(isTrue); // true
console.log(typeof isTrue); // boolean

let a = null;
console.log(a); // null
console.log(typeof a); // object

let b;
console.log(b); // undefined
console.log(typeof b); // undefined

let c = [1, 2, 3, 4, 5];
console.log(c); // [ 1, 2, 3, 4, 5 ]
console.log(typeof c); // object

let d = { name: "Sagar", age: 25 };
console.log(d); // { name: 'Sagar', age: 25 }
console.log(typeof d); // object

let e = function () {
  console.log("Hello, Sagar!");
};
console.log(e); // [Function: e]
console.log(typeof e); // function

let f = new Date();
console.log(f); // 2021-08-16T11:33:01.000Z
console.log(typeof f); // object

let g = Symbol();
console.log(g); // Symbol()
console.log(typeof g); // symbol

let h = BigInt(123456789);
console.log(h); // 123456789n
console.log(typeof h); // bigint

let i = 10n;
console.log(i); // 10n
console.log(typeof i); // bigint

let j = 10.5;
console.log(j); // 10.5
console.log(typeof j); // number

let k = "10.5";
console.log(k); // 10.5
console.log(typeof k); // string

let l = "10";
console.log(l); // 10
console.log(typeof l); // string

let m = "true";
console.log(m); // true
console.log(typeof m); // string

let n = "false";
console.log(n); // false
console.log(typeof n); // string

let o = "null";
console.log(o); // null
console.log(typeof o); // string
