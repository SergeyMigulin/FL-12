let willPlay = confirm('Do you want to play a game?');
const two = 2;
const three = 3;
const prize = {
    total: 0,
    continuousFactor: 1,
    firstPossible: 100,
    secondPossible: 50,
    thirdPossible: 25,
    currentPossible: null
}
const range = {
    start: 0,
    end: 8,
    increment: 4
}
const user = {
    choise: null,
    attempt: 0,
    attemptions: 3
}
let bufferConversionChecker, diceNumber;

if(!willPlay){
    alert('You did not become a billionaire, but can.');
}  
    
for(bufferConversionChecker, 
    diceNumber = Math.floor(Math.random() * Math.floor(range.end + 1)),
    prize.currentPossible = prize.firstPossible * prize.continuousFactor;

    willPlay;
    
    diceNumber = Math.floor(Math.random() * Math.floor(range.end + 1))
){

    if(user.attempt <= user.attemptions){
        user.choise = (bufferConversionChecker = prompt(`
        Choose a roulette pocket number from ${range.start} to ${range.end}
        Attempts left: ${user.attemptions - user.attempt}
        Total prize: ${prize.total}$
        Possible prize on current attempt: ${prize.currentPossible}$
            `)) === ('' || null)
            ? NaN
            : Number(bufferConversionChecker);
        
        user.attempt++;

    }

    if(user.choise === diceNumber && 
        user.attempt <= user.attemptions){

        if(user.attempt === 1){
            prize.currentPossible = prize.firstPossible * prize.continuousFactor;
            prize.total += prize.currentPossible;
        }
        if(user.attempt === two){
            prize.currentPossible = prize.secondPossible * prize.continuousFactor;
            prize.total += prize.currentPossible;
        }
        if(user.attempt === three){
            prize.currentPossible = prize.thirdPossible * prize.continuousFactor;
            prize.total += prize.currentPossible;
        }

        willPlay = confirm(`
        Congratulation, you won!   
        Your prize is: ${prize.total}$. 
        Do you want to continue?
        `);

        if(willPlay){

            user.attempt = 0;
            range.end += range.increment;

            prize.continuousFactor++;
            prize.firstPossible *= prize.continuousFactor;
            prize.secondPossible = Math.floor(prize.firstPossible / two);
            prize.thirdPossible = Math.floor(prize.secondPossible / two);
            prize.currentPossible = prize.firstPossible * prize.continuousFactor;
        }else{

            user.attempt = 0;
            range.end = 8;
            alert(`
            Thank you for your participation. 
            Your prize is: ${prize.total}$
            `);

            willPlay = confirm(`
                Do you want to play again?
            `);
            if(willPlay){

                range.end = 8;

                prize.continuousFactor = 1;
                prize.total = 0;
                prize.firstPossible = 100;
                prize.secondPossible = Math.floor(prize.firstPossible / two);
                prize.thirdPossible = Math.floor(prize.secondPossible / two);
                prize.currentPossible = prize.firstPossible * prize.continuousFactor;
            }
        }
    }else{
        if(user.attemptions - user.attempt === three){
            prize.currentPossible = prize.firstPossible * prize.continuousFactor;
            continue;
        }
        if(user.attemptions - user.attempt === two){
            prize.currentPossible = prize.secondPossible * prize.continuousFactor;
            continue;
        }
        if(user.attemptions - user.attempt === 1){
            prize.currentPossible = prize.thirdPossible * prize.continuousFactor;
            continue;
        }

        prize.total = 0;
        user.attempt = 0;
        alert(`
        Thank you for your participation. 
        Your prize is: ${prize.total}$
        `);

        willPlay = confirm(`
            Do you want to play again?
        `);
        if(willPlay){

             range.end = 8;

             prize.continuousFactor = 1;
             prize.total = 0;
             prize.firstPossible = 100;
             prize.secondPossible = Math.floor(prize.firstPossible / two);
             prize.thirdPossible = Math.floor(prize.secondPossible / two);
             prize.currentPossible = prize.firstPossible;
        }
    }
}
    