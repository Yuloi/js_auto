
/* 
TASK 1
*/

function randomInt (min, max){
    return cubResult = (Math.floor(Math.random() * (max - min + 1)) + min)
};
function playRounds(person1,person2){
    let round = 0;
    for (round; round < 3;){
        round++
        let rand1 = randomInt(1,6)
        let rand2 = randomInt(1,6)
        person1 = person1 + rand1;
        person2 = person2 + rand2;
        console.log(`Round: ${round} \n\vPlayer 1 got ${rand1} points, total is: ${person1} \nPlayer 2 got ${rand2} points, total is: ${person2} \v`);
    }
    return [person1, person2];
};

function compareSum(){
    const players = playRounds(0,0);
    if (players[0] === players[1]){
        console.log(`Total score is same: ${players[0]}, draw! :)) `);
    }else if (players[0] > players[1]){
        console.log(`Player 1 won with total score: ${players[0]}`);
    }else{
        console.log(`Player 2 won with total score: ${players[1]}`);
    };
};

/* 
TASK 2
*/

function countingFridayIn1Year (year,n){
    let res = [];
    for (month = 0; month < n; month++){
        let date = new Date(year, month, 13);
        if (date.getDay() === 5){
            date = date.toDateString()
            res.push(date);
        };
    }; 
    return res;
};
function counterFridaysForPeriod(start, stop){
    for(start; start<= stop; start++){
        if(start === stop){
            let d = new Date();
            console.log(d.getMonth)
            let result = countingFridayIn1Year(start,d.getMonth());
            console.log(d.getMonth())
        }else{
            let result = countingFridayIn1Year(start,12);
            console.log(result);
        };
    };
};


/* 
TASK 3
*/
const resultInteger = [];
let sumInteger = 0;
const resultFloat = [];
let sumFloat = 0;

function RandomFloat(min,max){
    let a = ((Math.random() * max - min) + min);
    let newA = Number(a.toFixed(2));
    return newA
};
function addSumIntegersforA (startValueInt,counterValueInt) {
    let a = startValueInt;
    for (i = 0; i < counterValueInt; i++){
        if (sumInteger === startValueInt){
            resultInteger.push(0);
        }else if(i === (counterValueInt-1)){
            let lastNum = startValueInt - sumInteger;
            resultInteger.push(lastNum);
        }else{
            let random = randomInt(0, a);
            a = a - random;
            resultInteger.push(random);
            sumInteger = sumInteger + random
        }
    };
    console.log(resultInteger)
}; 
function addSumFloatforA (startValueFloat,counterValueFloat) {
    let a = startValueFloat;
    for (i = 0; i < counterValueFloat; i++){
        if (sumFloat === startValueFloat){
            resultFloat.push(0);
        }else if(i === (counterValueFloat-1)){
            let lastNum = (startValueFloat - sumFloat).toFixed(2);
            let fixedNum = Number(lastNum);
            resultFloat.push(fixedNum);
        }else{
            let random = RandomFloat(0, a);
            a = a - random;
            resultFloat.push(random);
            sumFloat = sumFloat + random
        }
    };
    console.log(resultFloat)
};


module.exports.game = compareSum;
module.exports.counterFridaysForPeriod = counterFridaysForPeriod;
module.exports.addSumIntegersforA = addSumIntegersforA;
module.exports.addSumFloatforA = addSumFloatforA;