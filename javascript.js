function getComputerChoice(possibleChoices) {
    // Chooses random value from a list of strings
    return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function getWinner(player, computer) {
    // returns true if player wins, returns False if player loses 
    if (player  == "rock" && computer  == "scissor")  {
        return true;
    }
    else if (player  == "paper" && computer  == "rock") {
        return true;
    }
    else if (player  == "scissor" && computer  == "paper") {
        return true;
    }

    return false;
    
}


function play() {
    const choices = ["Rock", "Paper", "Scissors"]
    let compChoice = getComputerChoice(choices);
    let playerChoice = prompt("Rock, Paper, or Scissors: ").trim();
    let winner = getWinner(playerChoice, compChoice)
    
    if (winner) {
        alert("You Win");
    
    }
    else {
        alert("You Lose");
    }


}

play();
