const {reverseArray, 
    findMaxInArray, 
    fibonacciArray,
    compareValuesTogether,
    sortingArray,
    uniqArrayFromArray
} = require('./main')

const arr = [1,2,3,4,5,6]
const arr2 = [3,67,15,80,23,35,11,5,124, 9]
let N = 11;
let M = 7;
const arrNotUniq = [1,2,3,1,4,12,3,4,5,3];
// TASK 1
console.log(reverseArray(arr));
// TASK 2
console.log(findMaxInArray(arr2));
// TASK 3
console.log(fibonacciArray(N,M));
// TASK 4
compareValuesTogether(1234,4231)
/* TASK 5
by defuult n=0 (sorting asc)
change n to 1 to sort as desc */
console.log(sortingArray(arr2))
// TASK 6
console.log(uniqArrayFromArray(arrNotUniq));