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
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  if (randomNumber === 2) {
    computerChoice = "scissor";
  }
  showComputerChoice.innerHTML = computerChoice
}

function gameLogic() {
  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  }
  if (playerChoice === "rock" && computerChoice === "paper") {
    result = "You lose!";
  }
  if (playerChoice === "rock" && computerChoice === "scissor") {
    result = "You win!";
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    result = "You win!";
  }
  if (playerChoice === "paper" && computerChoice === "scissor") {
    result = "You lose!";
  }
  if (playerChoice === "scissor" && computerChoice === "rock") {
    result = "You lose!";
  }
  if (playerChoice === "scissor" && computerChoice === "paper") {
    result = "You win!";
  }
  showResult.innerHTML = result
}
// Local Storage logic
const gameCounter = new GameCounter();
const resultList = document.querySelector("[id=result_list] ul");


const listResult = () => {
  resultList.innerHTML = "";
  const matches = gameCounter.index();
  let match;
  function matchResult() {
    var newMatchItem = document.createElement("li");
    var matchResult = document.createTextNode(`${result}`)
    newMatchItem.innerHTML = result
    gameCounter.appendChild(matchResult);
    return matchResult
  }

}


listResult()