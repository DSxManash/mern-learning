function vowelsCounter(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
console.log(vowelsCounter("Hello World")); // Output: 3
console.log(vowelsCounter("JavaScript is fun!")); // Output: 5


//Using arroqw function syntax
    const vowelsCounterArrow = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(vowelsCounterArrow("Hello World")); // Output: 3
console.log(vowelsCounterArrow("JavaScript is fun!")); // Output: 5