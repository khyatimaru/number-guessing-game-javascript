let game = {
    "min": 0,
    "max": 10
};

document.addEventListener('DOMContentLoaded', function() {
    game.output = document.querySelector('.output');
    game.message = document.querySelector('.message');
    game.guessInput = document.querySelector('.guessInput');
    game.guessNumberBtn = document.getElementById('guessNumberBtn');
    initialiseGame();
});

function initialiseGame() {
    
    let tempMesg = "Welcome to the game. Guess a number from " + game.min + " to " + game.max;
    message(tempMesg, "#4f571e");
}

function message(mesg, color) {
    game.message.innerHTML = mesg;
    game.message.style.color = color || "black"
}