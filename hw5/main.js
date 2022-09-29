function addition (a, b) {
    let typeA = typeof a;
    switch (typeA){
        case 'string':
            b =  String(b);
            console.log(b)
            console.log (`Addition for ${a} and ${b} is ${a+b}`);
            break;
        case 'number':
            b =  Number(b);
            if (isNaN(b) === true){
                console.log(`Try again. Second value can't be converted to a number`);
            }else{
                console.log (`Addition for ${a} and ${b} is ${a+b}`);
            }
            break;
        case 'boolean':
            b = new Number(b);
            if (isNaN(b) === true) {
                console.log(`Try again. Second value can't be converted to a number`);
            }else{
                console.log (`Addition for ${a} and ${b} is ${a+b}`);
            }
            break;
    };
};
addition(0, false);
