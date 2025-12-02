//Arrays in JavaScript

//Arrays are versatile and powerful data structures in JavaScript that allow for efficient data manipulation and storage.
//Arrays are mutable in JavaScript, meaning their elements can be changed after creation.
//Assigning an array to a new variable creates a reference to the same array in memory, not a copy.
//Const is use more often with arrays to prevent reassignment, but the contents can still be modified.

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana

// Adding elements
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// Removing elements
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: Date
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// Iterating over an array
fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// Apple
// Banana
// Cherry

// Finding the length of an array
console.log(fruits.length); // Output: 3

// Checking if an item exists in the array
console.log(fruits.includes('Banana')); // Output: true
console.log(fruits.includes('Date'));   // Output: false

// Finding the index of an item
console.log(fruits.indexOf('Cherry')); // Output: 2
console.log(fruits.indexOf('Date'));   // Output: -1

// Merging two arrays
let moreFruits = ['Elderberry', 'Fig'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['Apple', 'Banana', 'Cherry', 'Elderberry', 'Fig']

// Slicing an array
let citrusFruits = allFruits.slice(1, 3);
console.log(citrusFruits); // Output: ['Banana', 'Cherry']

// Reversing an array
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); // Output: ['Fig', 'Elderberry', 'Cherry', 'Banana', 'Apple']

// Sorting an array
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // Output: ['Apple', 'Banana', 'Cherry', 'Elderberry', 'Fig']

// Mapping an array
let fruitLengths = fruits.map(function(fruit) {
    return fruit.length;
});
console.log(fruitLengths); // Output: [5, 6, 6]

// Filtering an array
let longNamedFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log(longNamedFruits); // Output: ['Banana', 'Cherry']

// Reducing an array
let totalLength = fruits.reduce(function(total, fruit) {
    return total + fruit.length;
}, 0);
console.log(totalLength); // Output: 17 (5 + 6 + 6)     

// Multi-dimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6     

// Flattening an array
let flattened = matrix.flat();
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Finding an element
let foundFruit = fruits.find(function(fruit) {
    return fruit.startsWith('C');
});
console.log(foundFruit); // Output: Cherry

// Finding the index of an element
let foundIndex = fruits.findIndex(function(fruit) {
    return fruit.startsWith('B');
});
console.log(foundIndex); // Output: 1

// Filling an array
let filledArray = new Array(5).fill('Grape');
console.log(filledArray); // Output: ['Grape', 'Grape', 'Grape', 'Grape', 'Grape']

// Copying within an array
let copyArray = ['A', 'B', 'C', 'D', 'E'];
copyArray.copyWithin(0, 3, 5);
console.log(copyArray); // Output: ['D', 'E', 'C', 'D', 'E']

// Checking if all elements meet a condition
let allLongNames = fruits.every(function(fruit) {
    return fruit.length > 4;
});
console.log(allLongNames); // Output: true

// Checking if some elements meet a condition
let someLongNames = fruits.some(function(fruit) {
    return fruit.length > 6;
});
console.log(someLongNames); // Output: false    

// Joining array elements into a string
let fruitString = fruits.join(', ');
console.log(fruitString); // Output: Apple, Banana, Cherry

// Splitting a string into an array
let colorsString = 'Red,Green,Blue';
let colorsArray = colorsString.split(',');
console.log(colorsArray); // Output: ['Red', 'Green', 'Blue']

// Splicing an array
let spliceArray = ['X', 'Y', 'Z'];
spliceArray.splice(1, 1, 'A', 'B');
console.log(spliceArray); // Output: ['X', 'A', 'B', 'Z']

// Using the spread operator
let moreColors = ['Yellow', 'Purple'];
let allColors = ['Red', 'Green', ...moreColors];
console.log(allColors); // Output: ['Red', 'Green', 'Yellow', 'Purple']

// Creating an array from a set
let mySet = new Set(['One', 'Two', 'Three']);
let setArray = Array.from(mySet);
console.log(setArray); // Output: ['One', 'Two', 'Three']

// Using Array.of
let numberArray = Array.of(1, 2, 3, 4, 5);
console.log(numberArray); // Output: [1, 2, 3, 4, 5]    

// Using Array.isArray
console.log(Array.isArray(fruits)); // Output: true
console.log(Array.isArray('Not an array')); // Output: false    

