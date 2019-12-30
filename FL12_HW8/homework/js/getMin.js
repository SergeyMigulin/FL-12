function getMin(...rest){
    return rest.sort((a, b) => Number(a) - Number(b))[0];
}
getMin(3, 0, -3);