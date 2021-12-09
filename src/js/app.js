let playerChoice;
let computerChoice;
let result;
let randomNumber

const showPlayerChoice = document.getElementById("playerChoice");
const showComputerChoice = document.getElementById("computerChoice");
const showResult = document.getElementById("result");
const playerButtonChoice = document.querySelectorAll("button");
const history = [];
const computerScore = document.querySelector("[computerScore]");
const playerScore = document.querySelector("[playerScore]");
const drawCounter = document.querySelector("[drawCounter]");

playerButtonChoice.forEach((playerButtonSelect) =>
  playerButtonSelect.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    showPlayerChoice.innerHTML = playerChoice;
    debugger
    generateComputerChoice();
    gameLogic();
    gameHistory();
    showMatchResult();
    if (history[0].result === "You win!") scoreCounter(playerScore);
    if (history[0].result === "You lose!") scoreCounter(computerScore);
    if (history[0].result === "It's a draw!") scoreCounter(drawCounter);
  })
);

function generateComputerChoice() {
  if (history.length > 3 && ((history[0].playerChoice === history[1].playerChoice) === (history[2].playerChoice === "rock"))) {
    computerChoice = "paper";
    debugger
  }
  const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
      computerChoice = "rock";
    }
    if (randomNumber === 1) {
      computerChoice = "paper";
    }
    if (randomNumber === 2) {
      computerChoice = "scissor";
      debugger
    }
    showComputerChoice.innerHTML = computerChoice;
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
  showResult.innerHTML = result;
}
// Local Storage logic
// Game result

function gameHistory() {
  const matchResult = { playerChoice, computerChoice, result };
  history.unshift(matchResult);
}
const displayMatchResult = document.querySelector("[id=result_list] ul");

const showMatchResult = () => {
  displayMatchResult.innerHTML = "";
  history.forEach((round) => {
    let html;
    html = `Your choice: ${round.playerChoice} `;
    html += `computer choice: ${round.computerChoice} `;
    html += `Result: ${round.result} `;
    let newListItem = document.createElement("li");
    newListItem.innerHTML = html;
    displayMatchResult.appendChild(newListItem);
  });
};

function scoreCounter(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

