const fibArray = [];
let F0 = 0;
let F1 = 1;
const SUM_4 = {
    sumValues: 0,
    sumPositionsValues: 0
};

// TASK 1
function reverseArray(arr) { // note: this function will mutate original array
    return arr.reverse();
};
// TASK 2
function findMaxInArray(arr) {
    let sortedArr = arr.sort((a, b) => { return b - a })
    return sortedArr[0]
}
// TASK 3
function fibonacciArray(N, M) {
    for (i = 1; i <= N + M; i++) {
        let Fn = F0 + F1;
        fibArray.push(Fn)
        F0 = F1;
        F1 = Fn;
    }; return fibArray.slice(N, N + M)

};
// TASK 4
function convertingValiestoArray(a, b) {
    a = String(a);
    b = String(b);
    arrA = Array.from(a);
    arrB = Array.from(b);
    return { firstNumber: arrA, secondNumber: arrB }
};
function checkValueAndPosition(a, b) {
    const result = convertingValiestoArray(a, b);
    const number1 = result.firstNumber;
    const number2 = result.secondNumber;
    for (i = 0; i < number1.length; i++) {
        if (number1[i] === number2[i]) {
            SUM_4.sumPositionsValues = SUM_4.sumPositionsValues + 1;
        } else {
        };
    }; return `Amount of numbers with the same position and value: ${SUM_4.sumPositionsValues}`
};
function checkValuesinArray (a, b){
    const result = convertingValiestoArray(a, b);
    const number1 = result.firstNumber;
    const number2 = result.secondNumber;
    for (i = 0; i < number1.length; i++){
        let a = number2[i]
        if (number1.includes(a)){
            SUM_4.sumValues = SUM_4.sumValues + 1;
        }else{
        };
    }return `Amount of numbers with the same value: ${SUM_4.sumValues}`
};
function compareValuesTogether (a, b){
    console.log(checkValueAndPosition(a, b));
    console.log(checkValuesinArray (a, b));
}
// TASK 5
function sortingArray(arr, n = 0){
    switch(n){
        case 0:
            return arr.sort((a,b) => a - b)
        case 1:
            return arr.sort((a,b) => b - a);
    };
};

module.exports.reverseArray = reverseArray;
module.exports.findMaxInArray = findMaxInArray;
module.exports.fibonacciArray = fibonacciArray;
module.exports.compareValuesTogether = compareValuesTogether;
module.exports.sortingArray = sortingArray;