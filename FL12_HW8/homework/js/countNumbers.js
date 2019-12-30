function makeNumber(symbols){
    const arrOfSymbols = Array.from(symbols);
    const digitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    return arrOfSymbols.filter(symbol => digitsArray.includes(symbol)).join('');
}

function countNumbers(symbols){
    const numbers = makeNumber(symbols).split('');
    let result = {};

    numbers.forEach(digit => {
        Object.defineProperty(result, digit, {
            writable: true,
        });
        if(result[digit]){
            result[digit]++;
        }else{
            result[digit] = 1;
        }
    });

    return result;
}
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers(''); 
