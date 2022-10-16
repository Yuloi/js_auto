/*
To do: 
Update task 1 for calculating sum using method not + 
task 1
*/
function stringToArray(value) {
    let replaceValue = value.replace(/ /g, '');
    let arr = replaceValue.split('');
    let i = 0;
    for (i; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
    
};
function sum (value) {
    const arr = stringToArray(value);
    const sum1 = arr[0] + arr[1] + arr[2];
    const sum2 = arr[3] + arr[4] + arr[5];
    if (sum1 === sum2){
        console.log('Да');
    }else{
        console.log('Нет');
    }
};
// task 2
function divisionTill50 (n){
    let num = 0;
    for (n; n >= 50;){
        num++;
        n = n/2;
    }
    console.log(`Last value for division is ${n}, it will be done for ${num} interactions`);
};
// task 3
function averageValue (n){
    const arr = n;
    const newArr = arr.reduce(function(previousValue, currentValue){
        return previousValue + currentValue
    });
    console.log(`Average value for ${arr} is ${newArr/arr.length}`);
};
// task 6
function sortArr(arr){
    arr.sort(function(a,b){return a - b});
    console.log(arr);
};

module.exports.sum = sum;
module.exports.divisionTill50 = divisionTill50;
module.exports.averageValue = averageValue;
module.exports.sortArr = sortArr;