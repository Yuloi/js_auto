function stringToArray(stringValue) {
    let replaceValue = stringValue.replace(/ /g, '');
    let arr = replaceValue.split('');
    let i = 0;
    for (i; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    return arr;
    
};
function sum (stringValue) {
    let arr = stringToArray(stringValue);
    const sum1 = arr[0] + arr[1] + arr[2];
    const sum2 = arr[3] + arr[4] + arr[5];
    if (sum1 === sum2){
        console.log('Да');
    }else{
        console.log('Нет');
    }
};
sum(' 333 801 ')