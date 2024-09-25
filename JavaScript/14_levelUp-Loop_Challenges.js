/*
1. Write a `for` loop that loops through the array `TeaTypes` and stops the loop once the value "green" is found.
     Store all the values before "green" in a new array called `beforeGreen`.
*/
let TeaTypes = ["black", "green", "oolong", "white", "herbal"];
let beforeGreen = [];
for (let m = 0; m < TeaTypes.length; m++) {
  if (TeaTypes[m] === "green") {
    break;
  }
  beforeGreen.push(TeaTypes[m]);
}
console.log(beforeGreen); // ["black"]

/*
2. Write a `for` loop that loops through the array `cities` and skips the city of "Chicago".
      Store all the cities in a new array called `goodCities`.
  */
let cities = ["chicago", "nashville", "new york", "los angeles", "seattle"];
let goodCities = [];
for (let n = 0; n < cities.length; n++) {
  if (cities[n] === "chicago") {
    // Skip "chicago" city and continue to the next city in the array
    continue;
  }
  goodCities.push(cities[n]);
}
console.log(goodCities); // ["nashville", "new york", "los angeles", "seattle"]

/*
3. Use a `for-of` loop to iterate through the array `numbers` and stop when the number 3 is found.
    Store the numbers before 3 in a new array called `beforeThree`.
*/
let numbers = [1, 2, 3, 4, 5];
let beforeThree = [];
for (let number of numbers) {
  if (number === 3) {
    break;
  }
  beforeThree.push(number);
}
console.log(beforeThree); // [1, 2]

/*
4. Use a `for-of` loop to iterate through the array `teas` and skip the tea with the name "chai".
    Store all the teas in a new array called `goodTeas`.
*/
let teas = ["green", "black", "chai", "oolong", "white"];
let goodTeas = [];
for (let tea of teas) {
  // tea is the value in the teas array (green, black, chai, oolong, white)
  if (tea === "chai") {
    continue;
  }
  goodTeas.push(tea);
}
console.log(goodTeas); // ["green", "black", "oolong", "white"]

/*
5. Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of `"Berlin"` is found and store the populations of the cities before "Berlin" in a new array called `beforeBerlin`.
*/
let cityPopulations = {
  paris: 2206488,
  madrid: 3223334,
  berlin: 3748148,
  lisbon: 505526,
  rome: 2870500,
};
let beforeBerlin = [];
for (let city in cityPopulations) {
  // city is the key in the object cityPopulations object (paris, madrid, berlin, lisbon, rome)
  if (city === "berlin") {
    break;
  }
  beforeBerlin.push(cityPopulations[city]);
  // cityPopulations[city] is the value of the key in the object cityPopulations object (2206488, 3223334)
}
console.log(beforeBerlin); // [2206488, 3223334]

/*
6. Use a `for-in` loop to loop through an object containing tea types.
    Skip the tea with the name "herbal" and store the rest of the teas in a new array called `goodTeaTypes`.
*/
let teaTypes = {
  black: "black",
  green: "green",
  oolong: "oolong",
  white: "white",
  herbal: "herbal",
};
let goodTeaTypes = [];
for (let tea in teaTypes) {
  if (tea === "herbal") {
    continue;
  }
  goodTeaTypes.push(teaTypes[tea]);
}
console.log(goodTeaTypes); // ["black", "green", "oolong", "white"]

/*
7. Write a `forEach` loop that iterates through the array `teaTypes` and stops when the value "oolong" is found and stores the teas before "oolong" in a new array called `beforeOolong`.
*/
let teaCollection = ["black", "green", "oolong", "white", "herbal"];
let beforeOolong = [];
teaCollection.forEach(function (tea) {
  if (tea === "oolong") {
    return;
  }
  beforeOolong.push(tea);
});
console.log(beforeOolong); // ["black", "green"]

/*
8. Write a `forEach` loop that iterates through the array `cities` and skips the city of "nashville" and stores the cities in a new array called `goodCities`.
*/
let cityCollection = [
  "chicago",
  "nashville",
  "new york",
  "los angeles",
  "seattle",
];
let goodCity = [];
cityCollection.forEach(function (city) {
  if (city === "nashville") {
    return;
  }
  goodCity.push(city);
});
console.log(goodCity); // ["chicago", "new york", "los angeles", "seattle"]

/*
9. Write a `for` loop that iterates through the array `numbers` and skips the number 3 and multiplies each other number by 2 and stores it in a new array called `doubledNumbers`.
*/
let numberCollection = [1, 2, 3, 4, 5];
let doubledNumbers = [];
for (let i = 0; i < numberCollection.length; i++) {
  if (numberCollection[i] === 3) {
    continue;
  }
  doubledNumbers.push(numberCollection[i] * 2);
}
console.log(doubledNumbers); // [2, 4, 8, 10]

/*
10. Write a `for-of` loop to iterate through the array `teas` and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array called `shortTeas`.
*/
let teaCollections = ["black", "green", "oolong", "white", "herbal"];
let shortTeas = [];
for (let tea of teaCollections) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas); // ["black", "green", "oolong", "white", "herherbal"]
