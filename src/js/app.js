let playerChoice
let computerChoice
let result

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)+1

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissor'
    }
}

function displayResult() {
    //make rult logic here
    if
}