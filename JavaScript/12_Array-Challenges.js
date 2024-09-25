/* 1. Declare an array named `teaFlavors` that contains the strings "Earl Grey", "Matcha", "Chai", and "English Breakfast".
    Access the first element of the array and store it in a variable named `firstFlavor`.
*/
let teaFlavors = ["Earl Grey", "Matcha", "Chai", "English Breakfast"];
// let teaFl = new Array("Earl Grey", "Matcha", "Chai", "English Breakfast");
// another way to declare an array in JavaScript using Array class constructor function with new keyword.
let firstFlavor = teaFlavors[0];
console.log(firstFlavor); // Earl Grey

/* 2. Declare an array named  `cities` containing the strings "New York", "San Francisco", "Los Angeles", and "Chicago".
    Access the third element of the array and store it in a variable named
    `americanCity`.
*/
let cities = ["New York", "San Francisco", "Los Angeles", "Chicago"];
let americanCity = cities[2];
console.log(americanCity); // Los Angeles

/* 3. You have an array named `teaTypes` that contains the strings "Green", "Black", "Chai", and "Herbal".
    Change the second element in the array to "Oolong".
*/
let teaTypes = ["Green", "Black", "Chai", "Herbal"];
console.log(teaTypes); // [ 'Green', 'Black', 'Chai', 'Herbal' ]
teaTypes[1] = "Oolong";
console.log(teaTypes); // [ 'Green', 'Oolong', 'Chai', 'Herbal' ]

/* 4. Declare an array named `drinks` that contains the strings "coffee", "tea", and "water".
    Add the string "soda" to the end of the array.
*/
let drinks = ["coffee", "tea", "water"];
console.log(drinks); // [ 'coffee', 'tea', 'water' ]
drinks.push("soda");
console.log(drinks); // [ 'coffee', 'tea', 'water', 'soda' ]

/* 5. You have an array named `teaOrders` that contains the strings "chai", "oolong", and "matcha".
    Remove the last element from the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "oolong", "matcha"];
console.log(teaOrders); // [ 'chai', 'oolong', 'matcha' ]
let lastOrder = teaOrders.pop();
console.log(teaOrders); // [ 'chai', 'oolong' ]
console.log(lastOrder); // matcha

/* 6. Declare an array named `desserts` that contains the strings "ice cream", "cookies", and "cake".
    Create a soft copy of the `desserts` array and store it in a variable named `newDesserts`.
*/
let desserts = ["ice cream", "cookies", "cake"];
console.log(desserts); // [ 'ice cream', 'cookies', 'cake' ]
let newDesserts = desserts;
// soft copy of an array in JavaScript is created by assigning an array to another array. It is not a hard copy. It is a reference to the original array. It is used to create a reference to the original array.
console.log(newDesserts); // [ 'ice cream', 'cookies', 'cake' ]
desserts.push("chocolate");
console.log(desserts); // [ 'ice cream', 'cookies', 'cake', 'chocolate' ]
console.log(newDesserts); // [ 'ice cream', 'cookies', 'cake', 'chocolate' ]

/* 7. Declare an array named `fruits` that contains the strings "apple", "banana", "orange", and "grape".
    Create a hard copy of the `fruits` array and store it in a variable named `newFruits`.
*/
let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits); // [ 'apple', 'banana', 'orange', 'grape' ]
let newFruits = fruits.slice();
// let newFruits = [...fruits];
// spread operator is used to create a hard copy of an array in JavaScript. It is introduced in ES6. It is used to copy the elements of an array into another array. It is used to create a shallow copy of an array. It is used to create a copy of an array without modifying the original array.
console.log(newFruits); // [ 'apple', 'banana', 'orange', 'grape' ]
fruits.push("mango");
console.log(fruits); // [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
console.log(newFruits); // [ 'apple', 'banana', 'orange', 'grape' ]

/* 8. You have two arrays named `firstArray` and `secondArray` that contain the strings "a", "b", and "c".
    Concatenate the two arrays and store the resulting array in a variable named `combinedArray`.
*/
let firstArray = ["a", "b", "c"];

let secondArray = ["d", "e", "f"];
let combinedArray = firstArray.concat(secondArray);
console.log(combinedArray); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(typeof combinedArray); // object

/* 9. You have an array named `teaMenu` that contains the strings "chai", "oolong", and "matcha".
    Find the length of the `teaMenu` array and store it in a variable named `menuLength`.
*/
let teaMenu = ["chai", "oolong", "matcha"];
let menuLength = teaMenu.length;
console.log(menuLength); // 3

/* 10. Declare an array named `drinksMenu` that contains the strings "coffee", "tea", and "water".
    Check if `"soda"` is included in the `drinksMenu` array and store the result in a variable named `isSodaIncluded`.
*/
let drinksMenu = ["coffee", "tea", "water"];
let isSodaIncluded = drinksMenu.includes("soda");
console.log(isSodaIncluded); // false
let isCoffeeIncluded = drinksMenu.includes("coffee");
console.log(isCoffeeIncluded); // true
