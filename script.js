
// declare variables as buttons 

// let playerScore = 0;
// let compScore = 0;
let playerHealth = 5;
let compHealth = 5;


// DOM Variables

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
let playerHealtheHtml = document.querySelector('#player-health-html');
let compHealthHtml = document.querySelector('#comp-health-html');
let gameMessage = document.querySelector('#game-message');

playerHealtheHtml.textContent = playerHealth;
compHealthHtml.textContent = compHealth;


function getComputerChoice(possibleChoices) {
    // Chooses random value from a list of strings and makes it lower case

    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}



function updateHealth(loser) {
    if (loser == 'player') {
        playerHealth--;
        playerHealtheHtml.textContent = playerHealth;

    }
    else {
        compHealth--;
        compHealthHtml.textContent = compHealth;

    }


}

function getLoser(player, computer) {
    // returns true if player loses, returns False if player wins 

    if (player  == "Rock" && computer  == "Paper")  {
        updateHealth('player');
        
        return true;
    }
    else if (player  == "Paper" && computer  == "Scissors") {
        updateHealth('player');
        return true;
    }
    else if (player  == "Scissors" && computer  == "Rock") {
        updateHealth('player');
        return true;
    }
    else if (player == computer) {
        
        return -1;
    }

    
    updateHealth('comp')
    return false;
    
}

function playRound(player, comp) {
    // takes two strings and returns a win or lose message as a string 

    const loser = getLoser(player, comp);
   
    if (loser == -1) {
        return "It's a tie! You both picked " + player + ".";
    }
    
    else if (loser == true) {
        return "You Lose " + comp + " beats " + player + ".";
        
    }
    else {
        return "You Win! " + player + " beats " +  comp + ".";
    }
    
    
} 

function play(playerChoice){
    //starts to run when a button is selsected
    
    const choices = ["Rock", "Paper", "Scissors"];
    
    const compChoice = getComputerChoice(choices);
    
    
    gameMessage.textContent = playRound(playerChoice, compChoice);
    if (compHealth == 0) {
        gameMessage.textContent = 'You won the game!';
        return;
    }

    else if (playerHealth == 0) {
        gameMessage.textContent = 'You lose the game';
        return;
    }
    
}


// start game 

// Get playerChoice 




rockBtn.addEventListener("click", () => {play('Rock')});
paperBtn.addEventListener("click", () => {play('Paper')});
scissorsBtn.addEventListener("click", () => {play('Scissors')});

