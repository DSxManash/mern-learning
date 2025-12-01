//Number Guessing Game

const prompt = require("prompt-sync")();

let targetNumber = 7;
let guessed = false;
let attempts = 0;
const maxAttempts = 3;

while (attempts < maxAttempts && !guessed) {
    let userGuess = parseInt(prompt("Guess a number between 1 and 10: ")); //parseInt to convert input to number
    attempts++;

    if (userGuess === targetNumber) {
        console.log("Congratulations! You've guessed the correct number.");
        guessed = true;
    } else if (userGuess < targetNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}

if (!guessed) {
    console.log("Sorry, you've used all your attempts. The correct number was ",targetNumber);
}
