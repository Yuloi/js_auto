function addition (a, b) {
    let typeA = typeof a;
    switch (typeA){
        case 'string':
            b = new String(b);
            console.log (`Addition for ${a} and ${b} is ${a+b}`);
            break;
        case 'number':
            b = new Number(b);
            console.log (`Addition for ${a} and ${b} is ${a+b}`);  //add caase for Nan
            break;
        case 'boolean':
            b = new Number(Newb);
            if (Newb === NaN){
                console.log(`${b}`)
            }
            console.log (`Addition for ${a} and ${b} is ${a+b}`);
    };
};
addition(true, '123');
