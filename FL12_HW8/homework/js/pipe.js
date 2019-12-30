function pipe(number, ...functions){
    return functions.reduce(
        (acc, next) => next(acc), number);
}

function addOne(x) {
    return x + 1;
}
  
pipe(1, addOne);
pipe(1, addOne, addOne);