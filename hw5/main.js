/*
This programm works only with boolean, string or number type
*/
function addition(a, b) {
    let numA = Number(a);
    let typeA;
    if (isNaN(numA) === true) {
        typeA = typeof a;
    } else {
        a = numA;
        typeA = typeof a;
    };
    switch (typeA) {
        case 'string':
            b = String(b);
            console.log(`Addition for ${a} and ${b} is ${a + b}`);
            break;
        case 'number':
            b = Number(b);
            if (isNaN(b) === true) {
                console.log(`Try again. Second value can't be converted to a number`);
            } else {
                console.log(`Addition for ${a} and ${b} is ${a + b}`);
            }
            break;
        case 'boolean':
            b = new Number(b);
            if (isNaN(b) === true) {
                console.log(`Try again. Second value can't be converted to a number`);
            } else {
                console.log(`Addition for ${a} and ${b} is ${a + b}`);
            }
            break;
    };
};

function multiply(a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if (isNaN(numA) === true || isNaN(numB) === true) {
        //typeA = typeof a;
        console.log(`Multiplying can't be performed, values can't be converted into numbers`);

    } else {
        a = numA
        b = numB
        console.log(`Multiplying for ${a} and ${b} is ${a * b}`)
    };

};
function divide(a, b) {
    let numA = Number(a);
    let numB = Number(b);
    if (isNaN(numA) === true || isNaN(numB) === true) {
        //typeA = typeof a;
        console.log(`Division can't be performed, values can't be converted into numbers`);

    } else {
        a = numA
        b = numB
        console.log(`Division for ${a} and ${b} is ${a / b}`)
    };

};
function toNumber(a) {
    let newA = Number(a);
    if (isNaN(newA) === true){
        console.log(`Can't be converted to number`)
    }else{
        console.log(newA);
    }
};
function toString (a) {
    let newA = String(a);
    console.log(newA);
};
function toBoolean (a){
    let newA = Boolean(a);
    console.log(newA);
}

addition(false, '45.4'); // fix issue where a === '' + false 
multiply('45', false);
divide('45', false);
toNumber(false);
toString('false');
toBoolean('');