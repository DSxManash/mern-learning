// Data Types in JavaScript

// 1. Primitive Data Types
var num = 42; // Number
let str = "Hello, World!"; // String
const pi = 3.14; // Constant
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let bigInt = 9007199254740991n; // BigInt

// 2. Non-Primitive Data Types
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function() { return "I am a function"; }; // Function

// Displaying the types of each variable
console.log(typeof num);      // "number"
console.log(typeof str);      // "string"
console.log(typeof bool);     // "boolean"
console.log(typeof undef);    // "undefined"
console.log(typeof nul);      // "object" (this is a known quirk in JavaScript)
console.log(typeof bigInt);   // "bigint"
console.log(typeof obj);      // "object"
console.log(typeof arr);      // "object"
console.log(typeof func);     // "function"

// Example of using the variables (var, let, const)

// Var is function scoped
// Let is block scoped
// Const is block scoped and cannot be reassigned

console.log(num + 8);               // 50
console.log(str.toUpperCase());     // "HELLO, WORLD!"
console.log(bool ? "Yes" : "No");   // "Yes"
console.log(undef);                  // undefined
console.log(nul);                    // null
console.log(bigInt + 1n);           // 9007199254740992n
console.log(obj.name);               // "Alice"
console.log(arr.length);             // 5
console.log(func());                 // "I am a function"   
