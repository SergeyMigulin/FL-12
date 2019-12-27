let willPlay = confirm('Do you want to play a game?');
const prize = {
    total: 0,
    possible: 100
}
const range = {
    start: 0,
    end: 8
}
const user = {
    choise: null,
    attempt: 0,
    attemptions: 3
}

if(!willPlay){
    alert('You did not become a billionaire, but can.');
}  
    // const diceNumber = Math.floor(Math.random() * range.end + 1);
    
for(let bufferConversionChecker, diceNumber, casinoAttemptsCounter = 1;
    willPlay; // && casinoAttemptsCounter <= user.attemptions;
    diceNumber = Math.floor(Math.random() * range.end + 1),
    casinoAttemptsCounter++
){
    user.choise = (bufferConversionChecker = prompt(`
        Choose a roulette pocket number from ${range.start} to ${range.end}
        Attempts left: ${user.attemptions}
        Total prize: ${prize.total}$
        Possible prize on current attempt: ${prize.possible}$
    `)) === '' || null
    ? NaN
    : bufferConversionChecker;

    //game with 3 attempts
    user.attempt++;
    if(user.choise === diceNumber && 
        user.attempt <= user.attemptions){
        prize.total += prize.possible;

        willPlay = confirm(`
        Congratulation, you won!   
        Your prize is: ${prize.total}$. 
        Do you want to continue?
        `);

        if(willPlay){
            continue;
        }else{
            willPlay = false;
        }
    }else{
        // after fail attempt
        alert(`
        Thank you for your participation. 
        Your prize is: ${prize.total}$
        `);

        willPlay = confirm(`
            Do you want to play again?
        `);
        if(willPlay){
            // wants to play then new cycle
            continue; 
        }else{
            // won't repeat cycle
            willPlay = false;
        }
    }
}
    