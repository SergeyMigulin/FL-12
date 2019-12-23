const a = +prompt('For quadratic equation:\nenter your first number (a)');
const b = +prompt('For quadratic equation:\nenter your second number (b)');
const c = +prompt('For quadratic equation:\nenter your third number (c)');

const two = 2;
const four = 4;

let discriminant, x, x1, x2;

    if(
        !isFinite(a) || 
        !isFinite(b) || 
        !isFinite(c) ||
        a === 0
    ){
        console.log('Invalid input data');
    } else {
        discriminant = b * b - four * a * c;

        if (discriminant === 0) {
            x = -b / (two * a);
            console.log('x = ' + Math.round(x));
        } else if (discriminant < 0) {
            console.log('no solution');
        } else if (discriminant > 0){
            x1 = (-b + Math.sqrt(discriminant))/ (two * a);
            x2 = (-b - Math.sqrt(discriminant))/ (two * a);
            console.log('x1 = ' + Math.round(x1), '\nx2 = ' + Math.round(x2));
        }
      }