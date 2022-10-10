// TASK 1
function reverseArray (arr){ // note: this function will mutate original array
    return arr.reverse();
};
// TASK 2
function findMaxInArray (arr){
    let sortedArr = arr.sort((a,b)=> {return b - a})
    return sortedArr[0]
}
// TASK 3
const fibArray = [];
let F0 = 0;
let F1 = 1;

function fibonacciArray(N,M){
    for (i = 1; i <= N+M; i++){
        let Fn = F0 + F1;
        fibArray.push(Fn)
        F0 = F1;
        F1 = Fn;
    }; return fibArray.slice(N, N+M)

};

module.exports.reverseArray = reverseArray;
module.exports.findMaxInArray = findMaxInArray;
module.exports.fibonacciArray = fibonacciArray;