function getComputerChoice(possibleChoices) {
    // Chooses random value from a list of strings and makes it lower case
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)].toLowerCase();
}

function getWinner(player, computer) {
    // returns true if player wins, returns False if player loses 
    if (player  == "rock" && computer  == "scissor")  {
        return true;
    }
    else if (player  == "paper" && computer  == "rock") {
        return true;
    }
    else if (player  == "scissors" && computer  == "paper") {
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

function play(){
    // let rounds = 5;
    const choices = ["Rock", "Paper", "Scissors"];
    // for (i = 0; i < rounds; i++) {
    const compChoice = getComputerChoice(choices);
    const playerChoice = prompt("Rock, Paper, or Scissors: ").trim().toLowerCase();
    console.log(playRound(playerChoice, compChoice));
    // }


}



play();

