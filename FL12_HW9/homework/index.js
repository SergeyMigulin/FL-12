function convert(...args){
    let dataArray = [...args];
    let resultArray = [];

    for(let i = 0; i < dataArray.length; i++){
        if(typeof dataArray[i] === 'string'){
            resultArray.push(Number(dataArray[i]));
        }else if(typeof dataArray[i] === 'number'){
            resultArray.push(String(dataArray[i]));
        }
    }
    return resultArray;
}
convert('1', 2, 3, '4');

function executeforEach(argsAr, func){
    let arr = [...argsAr];
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}
executeforEach([1,2,3], el => console.log(el * 2));
 
function mapArray(argsAr, func) {
    let result = [];
    
    executeforEach(argsAr, (el) => result.push( func(Number(el))));
    return result;
}
mapArray([2, '5', 8], (el) => el + 3);

function filterArray(argsAr, func) {
    let arr = [], result = [];

    executeforEach(argsAr, (el) => {
        arr.push(func(el));
    });

   for(let i = 0; i < arr.length; i++){
     if(arr[i]) {
       result.push(argsAr[i]);
     }
   } 
    return result;
}
filterArray([2, 5, 8], (el) => el % 2 === 0);

function flipOver(str) {
    let result = '';
    for(let i = str.length-1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}
flipOver('hey world');

function makeListFromRange(range) {
    let arr = [],
        start = range[0],
        end = range[1];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
makeListFromRange([2, 7]);

function getArrayOfKeys(arr, prop) {
    let resArr = [];

    executeforEach(arr, (el) => resArr.push(el[prop]));
    return resArr;
}
const actors = [
    {
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];
getArrayOfKeys(actors, 'name');

function substitute(arr) {
    const limit = 30;

    return mapArray(arr, (el) => el < limit ? '*' : el);
}
substitute([58, 14, 48, 2, 31, 29]);

function getPastDay(date, days ) {
    const _MS_DAY = 86400000;

    return new Date(date - _MS_DAY * days ).getDate();
}
const date = new Date(2019, 0, 2);

getPastDay(date, 1);
getPastDay(date, 2);
getPastDay(date, 365);

function formatDate(date) {
    const _TEN = 10;

    let year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hours = date.getHours() < _TEN ? `0${date.getHours()}` : date.getHours(),
    minutes = date.getMinutes() < _TEN ? `0${date.getMinutes()}` : date.getMinutes();
    
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}

formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());