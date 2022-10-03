//task 1
function randomNumber (){
    let min = 1;
    let max = 6;
    return cubResult = (Math.floor(Math.random() * (max - min + 1)) + min)
};
function playRounds(person1,person2){
    let round = 0;
    for (round; round < 3;){
        round++
        let rand1 = randomNumber()
        let rand2 = randomNumber()
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
module.exports.game = compareSum;
