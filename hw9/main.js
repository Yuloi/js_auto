const getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

function getNum(start,finish,time){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> resolve(getRandomNumber(start,finish)),time);
    }).then(value => value)
};

function returnPromisWithValue(number, start,finish, second = 1000){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(number), getRandomNumber(start,finish) * second)
    }).then(value => value)
}

// TASK 1
const p1 = returnPromisWithValue(1,1,5);
const p2 = returnPromisWithValue(2,1,5);
const p3 = returnPromisWithValue(3,1,5);

Promise.race([p1,p2,p3]).then(value => console.log(value)) //promise race

// TASK 2

async function getSquarOfNum(){
    const num = await getNum(1,5,3000);
    console.log(`square of number ${num} is equal to ${num*num}`)
};
getSquarOfNum()

// TASK 3


const getNum1 = getNum(1,5,3000);
const getNum2 = getNum(6,10,5000)

async function getSumOf2Numbers(){
    let num1 = await getNum1;
    let num2 = await getNum2;
    console.log(`Sum of ${num1} and ${num2} is equal to ${num1 + num2}`)
}
getSumOf2Numbers()