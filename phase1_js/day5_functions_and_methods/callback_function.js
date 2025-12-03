//Callback function is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete some kind of routine or action.

//forEach method example
const numbers = [1, 2, 3, 4, 5];

// Callback function to be executed for each element
numbers.forEach(function(number) {
    console.log('Number:', number);
});

// Using arrow function as callback
numbers.forEach((number) => {
    console.log(`${number}*${number}`, number * number);
});


//map method example
const squares = numbers.map(function(number) {
    return number * number;
});
console.log('Squares using regular function:', squares);

// Using arrow function as callback
const squaresArrow = numbers.map((number) => number * number);
console.log('Squares using arrow function:', squaresArrow);


//filter method example
const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log('Even numbers using regular function:', evenNumbers);

// Using arrow function as callback
const evenNumbersArrow = numbers.filter((number) => number % 2 === 0);
console.log('Even numbers using arrow function:', evenNumbersArrow);


//reduce method example
const sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
console.log('Sum using regular function:', sum);

// Using arrow function as callback
const sumArrow = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum using arrow function:', sumArrow);