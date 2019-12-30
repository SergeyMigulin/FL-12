function makeNumber(symbols){
    const arrOfSymbols = Array.from(symbols);
    const digitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    return arrOfSymbols.filter(symbol => digitsArray.includes(symbol)).join('');
}
makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');

