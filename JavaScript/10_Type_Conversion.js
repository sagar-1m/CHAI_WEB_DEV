// Implicit Type Conversion

let score = "100";
console.log(score); // 100
console.log(typeof score); // string

let newScore = score + 10; // 100 + 10 = 10010 (string concatenation)
console.log(newScore); // 10010
console.log(typeof newScore); // string

let anotherScore = score - 10; // 100 - 10 = 90 (subtraction)
console.log(anotherScore); // 90
console.log(typeof anotherScore); // number

let myScore = "100";
let yourScore = 10;
let totalScore = myScore + yourScore;
console.log(totalScore); // 10010
console.log(typeof totalScore); // string

let myTotalScore = myScore - yourScore;
console.log(myTotalScore); // 90
console.log(typeof myTotalScore); // number

let myNewScore = myScore * yourScore;
console.log(myNewScore); // 1000
console.log(typeof myNewScore); // number

let myAnotherScore = myScore / yourScore;
console.log(myAnotherScore); // 10
console.log(typeof myAnotherScore); // number

let myFinalScore = myScore % yourScore;
console.log(myFinalScore); // 0
console.log(typeof myFinalScore); // number

let myPower = myScore ** yourScore;
console.log(myPower); // 10000000000
console.log(typeof myPower); // number

let myIncrement = myScore++;
console.log(myIncrement); // 100
console.log(typeof myIncrement); // number

let myDecrement = myScore--;
console.log(myDecrement); // 101
console.log(typeof myDecrement); // number

let myComparison = myScore == yourScore;
console.log(myComparison); // false
console.log(typeof myComparison); // boolean

let myAnotherComparison = myScore != yourScore;
console.log(myAnotherComparison); // true
console.log(typeof myAnotherComparison); // boolean

// Explicit Type Conversion
let myString = "100";
console.log(myString); // 100
console.log(typeof myString); // string

let myNumber = Number(myString);
console.log(myNumber); // 100
console.log(typeof myNumber); // number

let myAnotherString = String(myNumber);
console.log(myAnotherString); // 100
console.log(typeof myAnotherString); // string

let myBoolean = Boolean(myNumber);
console.log(myBoolean); // true
console.log(typeof myBoolean); // boolean

let myAnotherNumber = 100;
let myFinalString = myAnotherNumber.toString();
console.log(myFinalString); // 100
console.log(typeof myFinalString); // string

let myFinalNumber = parseInt(myString);
console.log(myFinalNumber); // 100
console.log(typeof myFinalNumber); // number

let myFinalBoolean = Boolean(myString);
console.log(myFinalBoolean); // true
console.log(typeof myFinalBoolean); // boolean

// Truthy and Falsy Values
let myTruthy = true;
console.log(myTruthy); // true

let myFalsy = false;
console.log(myFalsy); // false

let myAnotherTruthy = Boolean(10);
console.log(myAnotherTruthy); // true
