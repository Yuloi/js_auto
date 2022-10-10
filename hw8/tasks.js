const {reverseArray, 
    findMaxInArray, 
    fibonacciArray,
    compareValuesTogether
} = require('./main')

const arr = [1,2,3,4,5,6]
const arr2 = [3,67,15,80,23,35,11,5,124, 9]
let N = 4;
let M = 6;
// TASK 1
console.log(reverseArray(arr));
// TASK 2
console.log(findMaxInArray(arr2));
// TASK 3
console.log(fibonacciArray(N,M));
// TASK 4
compareValuesTogether(3487,3794)