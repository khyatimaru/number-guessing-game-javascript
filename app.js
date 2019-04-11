let game = {
    "min": 1,
    "max": 10
};

document.addEventListener('DOMContentLoaded', function() {
    game.output = document.querySelector('.output');
    game.message = document.querySelector('.message');
    game.guessInput = document.querySelector('.guessInput');
    game.guessNumberBtn = document.getElementById('guessNumberBtn');
    initialiseGame();
});

initialiseGame = () => {
    game.guesses = 0;
    game.guessInput.addEventListener('keyup', function() {    
        guessNumberBtn.disabled = !game.guessInput.value; 
    });
    game.num = ranNumber(game.min, game.max);
    let tempMesg = "Welcome to the game. Guess a number from " + game.min + " to " + game.max;
    message(tempMesg, "#444f00");
}

guessUserValue   = () => {
    if(game.guessNumberBtn.classList.contains('replay')) {
        initialiseGame();
        game.guessNumberBtn.innerHTML = 'Guess';
        game.guessInput.value = '';
        game.guessInput.style.display = "block";
        game.guessNumberBtn.classList.remove('replay');
    }
    else {
    
        game.guesses++;
        let tempGuess = game.guessInput.value;
        tempGuess = parseInt(tempGuess);
        if(isNaN(tempGuess)) {
            message("Please enter only Digits!", "red");
        }
        else if(tempGuess < game.min || tempGuess > game.max) {
            message(`Please guess number from ${game.min} to ${game.max}`, "red");
        }
        else if(tempGuess === game.num){
            message(`Correct, you guessed ${tempGuess} in ${game.guesses} guesses`, "green");
            gameOver();
        }
        else {
            let holder = tempGuess > game.num ? {
                "color": "blue", 
                "message": "The number was Lower than you guessed"
            } : {
                "color": "purple",
                "message": "The number was Higher than you guessed"
            };
            message(holder.message, holder.color);

        }
        console.log("your guess is ", tempGuess);
    }
}

gameOver = () => {
    game.guessNumberBtn.innerHTML = "Restart Game!";
    game.guessInput.style.display = "none";
    game.guessNumberBtn.classList.add('replay');
    game.max+=5;
}

ranNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min +1) + min);
}

message = (mesg, color) => {
    game.message.innerHTML = mesg;
    game.message.style.color = color || "#444f00";
    game.guessInput.style.borderColor = color;

}
