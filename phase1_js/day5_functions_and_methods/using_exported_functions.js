//Importing exported functions and methods from index.js
import defaultExport from './index.js';
const { greet, add, multiply, calculator } = defaultExport;

// Using the imported functions and methods
console.log(greet("Bob")); // Output: Hello, Bob!
console.log(add(10, 7));   // Output: 17
console.log(multiply(3, 5)); // Output: 15
console.log(calculator.divide(20, 4)); // Output: 5
console.log(calculator.subtract(15, 5)); // Output: 10
