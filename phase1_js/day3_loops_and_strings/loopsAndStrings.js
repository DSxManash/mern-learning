//Loops and Strings in JavaScript

// for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: ",i);
} 

// while loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration: ",j);
    j++;
}

// do-while loop
let k = 0;
do {
    console.log("Do-While loop iteration: ",k); 
    k++;
} while (k < 5);

//for-of loop
let name1 = "JavaScript";
for (let char of name1) {
    console.log("Character: ",char);
}

let arr = [10, 20, 30, 40, 50]; 
for (let value of arr) {
    console.log("Array value: ",value);
}

//for-in loop
let name2 = "Programming";
for (let index in name2) {
    console.log("Character at index ",index,": ",name2[index]);
}

let arr2 = [100, 200, 300, 400, 500];
for (let index in arr2) {
    console.log("Array index ",index,": ",arr2[index]);
}

let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log("Object key: ",key,"Value: ",obj[key]);
}   

// String manipulation
let str = "Hello, World!";
console.log("Original String: ",str); // Hello, World!
console.log("String Length: ",str.length); // 13
console.log("Uppercase: ",str.toUpperCase()); // HELLO, WORLD!
console.log("Lowercase: ",str.toLowerCase()); // hello, world!
console.log("Substring (0,5): ",str.substring(0, 5)); // Hello
console.log("Index of 'World': ",str.indexOf("World")); // 7
console.log("Replace 'World' with 'JavaScript': ",str.replace("World", "JavaScript")); // Hello, JavaScript!
console.log("Split by comma: ",str.split(",")); // [ 'Hello', ' World!' ]
//trim whitespace
let str2 = "   Trim me   ";
console.log("Before trim: '",str2,"'"); // '   Trim me   '
console.log("After trim: '",str2.trim(),"'"); // 'Trim me'

//Strings are immutable in JavaScript
let original = "Immutable";
let modified = original.replace("Immutable", "Mutable");
console.log("Original String: ",original); // Immutable
console.log("Modified String: ",modified); // Mutable

// Template Literals
let name = "John";
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`; // Hello, my name is John and I am 30 years old.
console.log(greeting); // Hello, my name is John and I am 30 years old.
console.log(`Next year, I will be ${age + 1} years old.`); // Next year, I will be 31 years old.
console.log(`Multiline String:
This is line 1.
This is line 2.
This is line 3.`); // Multiline String:
// This is line 1.
// This is line 2.
// This is line 3.
