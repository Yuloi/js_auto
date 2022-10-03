const { sum, divisionTill50, averageValue, sortArr } = require('./main');

// task 1
sum(' 303 41 1');
// task 2
divisionTill50(1000);
// task 3
averageValue([12,15,20,35,59,79]);
// task 4
const arr4 = [1,2,3,4,5];
arr4.splice(3,0, 'a', 'b', 'c')
console.log(arr4);
// task 5
const arr5 = [1,2,3,4,5];
arr5.splice(1,0,'a','b');
arr5.splice(6,0,'c')
arr5.splice(8,0,'e');
console.log(arr5);
// task 6
sortArr([3, 4, 1, 2, 7]);