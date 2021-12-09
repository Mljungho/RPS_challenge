let playerChoice;
let computerChoice;
let result;

const showPlayerChoice = document.getElementById("playerChoice");
const showComputerChoice = document.getElementById("computerChoice");
const showResult = document.getElementById("result");
const playerButtonChoice = document.querySelectorAll("button");
const history = [];

playerButtonChoice.forEach((playerButtonSelect) =>
  playerButtonSelect.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    showPlayerChoice.innerHTML = playerChoice;
    generateComputerChoice();
    gameLogic();
    gameHistory();
    showMatchResult();
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

function gameHistory() {
  const matchResult = { playerChoice, computerChoice, result };
  history.unshift(matchResult);
  console.log(history);
}

const displayMatchResult = document.querySelector("[id=result_list] ul");

const showMatchResult = () => {
  displayMatchResult.innerHTML = "";
  let html;
  history.forEach((round) => {
    html = `Your choice: ${round.playerChoice}`;
    html += `computer choice: ${round.computerChoice}`;
    html += `Result: ${round.result}`;
    let newListItem = document.createElement("li");
    newListItem.innerHTML = html;
    displayMatchResult.appendChild(newListItem)
  });
};

//unshift objects  in the array in reverce order.
//push does the same but adds object to last part of array
