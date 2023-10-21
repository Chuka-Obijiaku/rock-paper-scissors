
// declare variables as buttons 

let playerScore = 0;
let compScore = 0;


// DOM Variables

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
let playerScoreHtml = document.querySelector('#player-score-html');
let compScoreHtml = document.querySelector('#comp-score-html');
let gameMessage = document.querySelector('#game-message');

playerScoreHtml.textContent = playerScore;
compScoreHtml.textContent = compScore;


function getComputerChoice(possibleChoices) {
    // Chooses random value from a list of strings and makes it lower case

    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function updateScore(winner){
    if (winner == 'player') {
        playerScore ++;
        playerScoreHtml.textContent = playerScore;
    }
    else {
        compScore++;
        compScoreHtml.textContent = compScore;
        
    }
    
}

function getWinner(player, computer) {
    // returns true if player wins, returns False if player loses 

    if (player  == "Rock" && computer  == "Scissors")  {
        updateScore('player');
        
        return true;
    }
    else if (player  == "Paper" && computer  == "Rock") {
        updateScore('player');
        return true;
    }
    else if (player  == "Scissors" && computer  == "Paper") {
        updateScore('player');
        return true;
    }
    else if (player == computer) {
        
        return -1;
    }

    
    updateScore('comp')
    return false;
    
}

function playRound(player, comp) {
    // takes two strings and returns a win or lose message as a string 

    const winner = getWinner(player, comp);
   
    
    if (winner == -1) {
        return "It's a tie! You both picked " + player + ".";
    }
    
    else if (winner == true) {
        return "You Win " + player + " beats " + comp + ".";
        
    }
    else {
        return "You Lose " + comp + " beats " +  player + ".";
    }
    
    
} 

function play(playerChoice){
    
    const choices = ["Rock", "Paper", "Scissors"];
    
    const compChoice = getComputerChoice(choices);
    
    
    if (playerScore >= 5) {
        gameMessage.textContent = 'You won the game!';
        return;
    }

    else if (compScore >= 5) {
        gameMessage.textContent = 'You lose the game';
        return;
    }
    gameMessage.textContent = playRound(playerChoice, compChoice);

}


// start game 

// Get playerChoice 




rockBtn.addEventListener("click", () => {play('Rock')});
paperBtn.addEventListener("click", () => {play('Paper')});
scissorsBtn.addEventListener("click", () => {play('Scissors')});

