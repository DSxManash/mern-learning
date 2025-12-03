//Functions and Methods in JavaScript

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
function add(a, b) {
  return a + b;
}

// Arrow Function
const multiply = (a, b) => a * b;

// Method within an Object
const calculator = {
  divide(a, b) {
    return a / b;
  },
  subtract(a, b) {
    return a - b;
  }
};

// Using the functions and methods
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(add(5, 3));      // Output: 8
console.log(multiply(4, 2)); // Output: 8
console.log(calculator.divide(10, 2)); // Output: 5
console.log(calculator.subtract(10, 4)); // Output: 6       

// Exporting the functions and methods
export default {
  greet,
  add,
  multiply,
  calculator
};

