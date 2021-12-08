let playerChoice
let computerChoice
let result

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)+1
//                        Math.random gives random number between 0 and 1
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

function gameLogic() {
    if (playerChoice === computerChoice) {
        result = "It's a draw!"
    }
    if (playerChoice === "rock" && computerChoice === "paper" ) {
        result = "You win!"
    }
    if (playerChoice === "rock" && computerChoice === "scissor" ) {
        result = "You lose!"
    }
    if (playerChoice === "paper" && computerChoice === "rock" ) {
        result = "You lose!"
    }
    if (playerChoice === "paper" && computerChoice === "scissor" ) {
        result = "You win!"
    }
    if (playerChoice === "scissor" && computerChoice === "rock" ) {
        result = "You win!"
    }
    if (playerChoice === "scissor" && computerChoice === "paper" ) {
        result = "You lose!"
    }
}