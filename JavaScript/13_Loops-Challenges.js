/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores it in a variable called `sum`.
*/
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum); // 15

/*
2. Write a `while` loop that counts down from 5 to 1 and stores it in a array called `countDown`.
*/
let countDown = [];
let j = 5;
while (j >= 1) {
  countDown.push(j);
  j--;
}
console.log(countDown); // [5, 4, 3, 2, 1]

/*
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. Store the tea types in an array called `teaTypes`.
*/
// let teaTypes = [];
// let teaType;
// do {
//   prompt(`Enter your favorite tea type:(Enter "stop" to exit)`);

//   if (teaType !== "stop") {
//     teaTypes.push(teaType);
//   }
// } while (teaType !== "stop");

// console.log(teaTypes);

/*
4. Write a `do while` loop that adds numbers from 1 to 5 and stores it in a variable called `sum`. The loop should run at least once.
*/
let add = 0;
let k = 1;
do {
  add += k;
  k++;
} while (k <= 5);

console.log(add); // 15

/*
5. Write a `for` loop that multiplies each element in the array `numbers` by 2 and stores it in a new array called `doubledNumbers`.
*/
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];
for (let l = 0; l < numbers.length; l++) {
  doubledNumbers.push(numbers[l] * 2);
}
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

/*
6. Write a `for` loop that lists al; the cities in the array `cities` and  stores them in a new array called `capitalizedCities`.
*/
let cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin"];
let capitalizedCities = [];
for (let m = 0; m < cities.length; m++) {
  capitalizedCities.push(cities[m].toUpperCase());
}
console.log(capitalizedCities); // ["MIAMI", "BARCELONA", "MADRID", "AMSTERDAM", "BERLIN"]
