let playerChoice;
let computerChoice;
let result;

const showPlayerChoice = document.getElementById("playerChoice");
const showComputerChoice = document.getElementById("computerChoice");
const showResult = document.getElementById("result");
const playerButtonChoice = document.querySelectorAll("button");
const history = [];
const score = [];

playerButtonChoice.forEach((playerButtonSelect) =>
  playerButtonSelect.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    showPlayerChoice.innerHTML = playerChoice;
    generateComputerChoice();
    gameLogic();
    gameHistory();
    showMatchResult();
    scoreCounter();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  if (randomNumber === 2) {
    computerChoice = "scissor";
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

// Tournament counter

const displayScoreResult = document.querySelector("[id=score_list] div");

function scoreCounter() {
  const scoreResult = { playerChoice, result };
  history.unshift(scoreResult);
}
const showTournamentScore = () => {
  displayScoreResult.innerHTML = "";
  let counter;
  history.forEach((history) => {
    counter = `Your score: ${history[0].result} `;
    counter = `Your choice: ${history[0].playerChoice} `;
    let scoreTracker = document.createElement("div");
    scoreTracker.innerHTML = counter;
    displayScoreResult.appendChild(scoreTracker);
  });
};
