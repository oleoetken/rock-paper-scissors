console.log("Hello World");

const rock = "rock";
const paper = "paper";
const scissor = "scissor";

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let result = Math.floor(Math.random() * 3 + 1);
    
    if (result === 1) {
        return rock;
    } 
    else if (result === 2) {
        return paper;
    }
    else {
        return scissor; 
    }
    
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock"
        || humanChoice === "paper" && computerChoice === "paper" 
        || humanChoice === "scissor" && computerChoice === "scissor")
    {
        showMessage(`It's a draw! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        showMessage("You lose! Paper beats Rock.");
    } 
    else if (humanChoice === "rock" && computerChoice === "scissor") {
       humanScore++;
        showMessage("You win! Rock beats Scissor.");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
       humanScore++;
        showMessage("You win! Paper beats Rock.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
       computerScore++;
        showMessage("You lose! Scissor beats Paper.");
    } 
    else if (humanChoice === "scissor" && computerChoice === "rock") {
       computerScore++;
        showMessage("You lose! Rock beats Scissor.");
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
       humanScore++;
        showMessage("You win! Scissor beats Paper.");
    }
    else {
        showMessage("Something went wrong");
    }
    updateScore();
    checkWinner();
}


const body = document.querySelector("body");

["rock", "paper", "scissor"].forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound(choice, computerChoice);
    });
    body.appendChild(btn);
});

const div = document.createElement("div");

function showMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    div.appendChild(p);
}
body.appendChild(div);

function updateScore() {
    const scoreLine = document.createElement("p");
    scoreLine.textContent = `Score: Player ${humanScore} - Computer ${computerScore}`;
    div.appendChild(scoreLine);
};

function checkWinner() {
    if (humanScore >= 5) {
        showMessage("You won the game!");
        disableButtons();
    }
    else if (computerScore >= 5) {
        showMessage("You lose the game!");
        disableButtons();
    }
}

function disableButtons() {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(btn => btn.disabled = true);
}