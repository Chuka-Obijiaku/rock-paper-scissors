
// declare variables as buttons 

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');


function getComputerChoice(possibleChoices) {
    // Chooses random value from a list of strings and makes it lower case

    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function getWinner(player, computer) {
    // returns true if player wins, returns False if player loses 

    if (player  == "Rock" && computer  == "Scissor")  {
        return true;
    }
    else if (player  == "Paper" && computer  == "Rock") {
        return true;
    }
    else if (player  == "Scissors" && computer  == "Paper") {
        return true;
    }
    else if (player == computer) {
        return -1;
    }

    return false;
    
}

function playRound(player, comp) {
    // takes two strings and returns a win or lose message as a string 

    const winner = getWinner(player, comp);
    
    if (winner == -1) {
        return "It's a tie! You both picked " + player + ".";
    }
    
    else if (winner) {
        return "You Win " + player + " beats " + comp + ".";
        
    }
    else {
        return "You Lose " + comp + " beats " +  player + ".";
    }
    
    
}

function play(playerChoice){
    // let rounds = 5;
    const choices = ["Rock", "Paper", "Scissors"];
    // for (i = 0; i < rounds; i++) {
    const compChoice = getComputerChoice(choices);
    
    
    
    console.log(playRound(playerChoice, compChoice));
    // }


}


// start game 

rockBtn.addEventListener("click", () => {play('Rock')});
paperBtn.addEventListener("click", () => {play('Paper')});
scissorsBtn.addEventListener("click", () => {play('Scissors')});
