//example 1

// let hold = document.getElementById("changeTextButton");
// console.log(hold);

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").innerHTML = "I am changed!";
  });

//explain the above code
// document.getElementById("changeText  Button") is selecting the button element with the id of changeTextButton
// .addEventListener("click", function () { is adding an event listener to the button element that listens for a click event
// document.getElementById("myParagraph").innerHTML = "I am changed!"; is changing the innerHTML of the paragraph element with the id of myParagraph to "I am changed!" when the button is clicked

//example 2
// do for the example 2 which is describe in that

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//explain the above code
// document.getElementById("highlightFirstCity") is selecting the button element with the id of highlightFirstCity
// .addEventListener("click", function () { is adding an event listener to the button element that listens for a click event
// let citiesList = document.getElementById("citiesList"); is selecting the ul element with the id of citiesList
// citiesList.firstElementChild.classList.add("highlight"); is adding the class of highlight to the first li element in the ul element with the id of citiesList when the button is clicked which will change the background color of the first city to yellow

//example 3
// manipulating the DOM elements

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.color = "red";
  coffeeType.style.fontSize = "24px";
});

//explain the above code
// document.getElementById("changeOrder") is selecting the button element with the id of changeOrder
// .addEventListener("click", function () { is adding an event listener to the button element that listens for a click event
// let coffeeType = document.getElementById("coffeeType"); is selecting the p element with the id of coffeeType
// coffeeType.textContent = "Espresso"; is changing the text content of the p element with the id of coffeeType to "Espresso"
// coffeeType.style.color = "red"; is changing the color of the text in the p element with the id of coffeeType to red
// coffeeType.style.fontSize = "24px"; is changing the font size of the text in the p element with the id of coffeeType to 24 pixels

//example 4
// creating and appending elements to the DOM

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});

//explain the above code
// document.getElementById("addNewItem  Button") is selecting the button element with the id of addNewItem  Button
// .addEventListener("click", function () { is adding an event listener to the button element that listens for a click event
// let newItem = document.createElement("li"); is creating a new li element and storing it in the variable newItem
// newItem.textContent = "Eggs"; is setting the text content of the new li element to "Eggs"
// document.getElementById("shoppingList").appendChild(newItem); is appending the new li element to the ul element with the id of shoppingList when the button is clicked which will add "Eggs" to the shopping list

//example 5
// removing elements from the DOM

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//explain the above code
// document.getElementById("removeLast  Task") is selecting the button element with the id of removeLast  Task  Button
// .addEventListener("click", function () { is adding an event listener to the button element that listens for a click event
// let taskList = document.getElementById("taskList"); is selecting the ul element with the id of taskList  Button
// taskList.lastElementChild.remove(); is removing the last li element in the ul element with the id of taskList  Button  when the button is clicked which will remove the last task from the task list Button

//example 6
// Event handling in the DOM

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Button clicked!");
});

//explain the above code
// document.getElementById("clickMeButton") is selecting the button element with the id of clickMeButton
// .addEventListener("click", function () { is adding an event listener to the button element that listens for a click event
// alert("Button clicked!"); is displaying an alert with the message "Button clicked!" when the button is clicked

//example 7
// Event delegation in the DOM

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You clicked " + event.target.textContent);
  }
});

//explain the above code
// document.getElementById("teaList") is selecting the ul element with the id of teaList  Button
// .addEventListener("click", function (event) { is adding an event listener to the ul element that listens for a click event and passes the event object as an argument to the callback function Button
// if (event.target && event.target.matches(".teaItem")) { is checking if the event target is an element with the class of teaItem Button
// alert("You clicked " + event.target.textContent); is displaying an alert with the message "You clicked " followed by the text content of the clicked element when a teaItem is clicked Button

//example 8
// Form Handling in the DOM

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback: ${feedback}`;
  });

//explain the above code
// document.getElementById("feedbackForm") is selecting the form element with the id of feedbackForm  Button
// .addEventListener("submit", function (event) { is adding an event listener to the form element that listens for a submit event and passes the event object as an argument to the callback function Button
// event.preventDefault(); is preventing the default form submission behavior Button
// let feedback = document.getElementById("feedbackInput").value; is getting the value of the input element with the id of feedbackInput and storing it in the variable feedback Button
// document.getElementById("feedbackDisplay").textContent = `Feedback: ${feedback}`; is setting the text content of the element with the id of feedbackDisplay to "Feedback: " followed by the value of the feedback variable when the form is submitted Button

//example 9
// DOM content loading events

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM is ready!";
});

//explain the above code
// document.addEventListener("DOMContentLoaded", function () { is adding an event listener to the document that listens for the DOMContentLoaded event Button
// document.getElementById("domStatus").textContent = "DOM is ready!"; is setting the text content of the element with the id of domStatus to "DOM is ready!" when the DOMContentLoaded event is fired Button

//example 10
// CSS classes manipulation in the DOM

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });

//explain the above code
// document.getElementById("toggleHighlight") is selecting the button element with the id of toggleHighlight  Button
// .addEventListener("click", function () { is adding an event listener to the button element that listens for a click event
// let descriptionText = document.getElementById("descriptionText"); is selecting the p element with the id of descriptionText  Button
// descriptionText.classList.toggle("highlight"); is toggling the class of highlight on the p element with the id of descriptionText  Button  when the button is clicked which will change the background color of the description text to yellow if the class is not present, and remove it if it is present Button
