let playerChoice;
let computerChoice;
let result;

const showPlayerChoice = document.getElementById("playerChoice");
const showComputerChoice = document.getElementById("computerChoice");
const showResult = document.getElementById("result");
const playerButtonChoice = document.querySelectorAll("button");

playerButtonChoice.forEach((playerButtonSelect) =>
  playerButtonSelect.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    showPlayerChoice.innerHTML = playerChoice;
    generateComputerChoice();
    gameLogic();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)

  if (randomNumber === 0) {
    computerChoice = "Rock";
  }
  if (randomNumber === 1) {
    computerChoice = "Paper";
  }
  if (randomNumber === 2) {
    computerChoice = "Scissor";
  }
  showComputerChoice.innerHTML = computerChoice
}

function gameLogic() {
  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    result = "You win!";
  }
  if (playerChoice === "rock" && computerChoice === "scissor") {
    result = "You lose!";
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    result = "You lose!";
  }
  if (playerChoice === "paper" && computerChoice === "scissor") {
    result = "You win!";
  }
  if (playerChoice === "scissor" && computerChoice === "rock") {
    result = "You win!";
  }
  if (playerChoice === "scissor" && computerChoice === "paper") {
    result = "You lose!";
  }
  showResult.innerHTML = result
}
