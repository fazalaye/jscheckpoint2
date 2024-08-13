// Manipulation de chaînes

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reverse String:", reverseString("senegal")); // "legasne"

// Count Characters
function countCharacters(str) {
    return str.length;
}
console.log("Count Characters:", countCharacters("senegal")); // 7

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log("Capitalize Words:", capitalizeWords("senegal")); // "SENEGAL"


// Fonctions de manipulation de tableaux

// Find Maximum
function findMax(arr) {
    return Math.max(...arr);
}
console.log("Find Max:", findMax([1, 2, 3, 4, 5])); // 5

// Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Find Min:", findMin([1, 2, 3, 4, 5])); // 1

// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of Array:", sumArray([1, 2, 3, 4, 5])); // 15

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log("Filter Array:", filterArray([1, 2, 3, 4, 5], num => num > 2)); // [3, 4, 5]


// Fonctions mathématiques

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5)); // 120

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is Prime:", isPrime(7)); // true
console.log("Is Prime:", isPrime(4)); // false

// Fibonacci Sequence
function fibonacci(n) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence.slice(0, n);
}
console.log("Fibonacci Sequence:", fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
