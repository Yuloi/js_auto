
function RandomFloat(min,max){
    return (Math.random() * max - min) + min 
}
//task 1 - update code afterwards
function randomNumber (min, max){
    return cubResult = (Math.floor(Math.random() * (max - min + 1)) + min)
};
function playRounds(person1,person2){
    let round = 0;
    for (round; round < 3;){
        round++
        let rand1 = randomNumber(1,6)
        let rand2 = randomNumber(1,6)
        person1 = person1 + rand1;
        person2 = person2 + rand2;
        console.log(`Round: ${round} \n\vPlayer 1 got ${rand1} points, total is: ${person1} \nPlayer 2 got ${rand2} points, total is: ${person2} \v`);
    }
    return [person1, person2];
};

function compareSum(){
    const players = playRounds(0,0);
    if (players[0] === players[1]){
        console.log(`Total score is same: ${players[0]}, friendship won :)) `);
    }else if (players[0] > players[1]){
        console.log(`Player 1 won with total score: ${players[0]}`);
    }else{
        console.log(`Player 2 won with total score: ${players[1]}`);
    };
};

// task 2
function countingFridayIn1Year (year){
    let res = [];
    for (month = 0; month < 12; month++){
        let date = new Date(year, month, 14);
        if (date.getDay() === 6){
            res.push(date);
        };
    }; 
    return res;
};
function counterFridaysForPeriod(start, stop){
    for(start; start<= stop; start++){
        let result = countingFridayIn1Year(start);
        console.log(result);
    }
};

// task 3


console.log(RandomFloat(0,20))
module.exports.game = compareSum;
module.exports.counterFridaysForPeriod = counterFridaysForPeriod;