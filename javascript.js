function getComputerChoice() {
    let possibleChoices = ['Rock', 'Paper', 'Scissors']
    return possibleChoices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());