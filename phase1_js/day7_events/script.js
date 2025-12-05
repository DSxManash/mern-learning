//Events in JavaScript

// Function to handle button click event
function handleButtonClick() {
    alert("Button was clicked!");
}

// Function to handle mouse over event
function handleMouseOver() {
    console.log("Mouse is over the element.");
}

// Function to handle form submission event
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted!");
}

// Adding event listeners to elements
document.getElementById("myButton").addEventListener("click", handleButtonClick);
document.getElementById("myElement").addEventListener("mouseover", handleMouseOver);
document.getElementById("myForm").addEventListener("submit", handleFormSubmit);

//Toggling the background color of body on button click
document.getElementById("toggleButton").addEventListener("click", function() {
    document.body.classList.toggle("dark-background");
});
