//Operators and Conditionals in JavaScript

// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition: ", a + b); // 15
console.log("Subtraction: ", a - b); // 5
console.log("Multiplication: ", a * b); // 50
console.log("Division: ", a / b); // 2
console.log("Modulus: ", a % b); // 0

// Comparison Operators
console.log("Equal to: ", a == b); // false
console.log("Not equal to: ", a != b); // true
console.log("Greater than: ", a > b); // true
console.log("Less than: ", a < b); // false
console.log("Greater than or equal to: ", a >= b); // true
console.log("Less than or equal to: ", a <= b); // false

// Logical Operators
let x = true;
let y = false;

console.log("Logical AND: ", x && y); // false
console.log("Logical OR: ", x || y); // true
console.log("Logical NOT: ", !x); // false

// Ternary Operator
let votingAge = 20;
let canVote = (votingAge >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Yes, you can vote.

// Equality Operators
let g = '10';
let h = 10;

console.log("Loose Equality (==): ", g == h); // true
console.log("Strict Equality (===): ", g === h); // false   

// Conditional Statements
let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else if (age === 18) {
    console.log("You are just an adult.");
} else {
    console.log("You are an adult.");
}


// Switch Statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day of the week: ", dayName); // Wednesday