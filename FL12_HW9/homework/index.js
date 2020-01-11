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
convert('1', 2, 3, '4')

function executeforEach(argsAr, func){
    let arr = [...argsAr];
    for(let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}
executeforEach([1,2,3], el => console.log(el * 2))

