// TASK 1
function reverseArray (arr){ // note: this function will mutate original array
    return arr.reverse();
};
// TASK 2
function findMaxInArray (arr){
    let sortedArr = arr.sort((a,b)=> {return b - a})
    return sortedArr[0]
}
// 

module.exports.reverseArray = reverseArray;
module.exports.findMaxInArray = findMaxInArray;