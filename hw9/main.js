const getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

// TASK 1
const p1 = new Promise(function(resolve,reject){
    setTimeout(() => resolve('1'), getRandomNumber(1,5) * 1000)
}).then(value => value);

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('2'), getRandomNumber(1,5) * 1000)
}).then(value => value);

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('3'), getRandomNumber(1,5) * 1000)
}).then(value => value);

Promise.race([p1,p2,p3]).then(value => console.log(value))

// TASK 2
function getNum(){
    return new Promise(function(resolve,reject){
        setTimeout(() => resolve(getRandomNumber(1,5)), 3000)
    }).then(value => value)
};
async function getSquarOfNum(){
    const num = await getNum();
    console.log(`square of number ${num} is equal to ${num*num}`)
};
getSquarOfNum()