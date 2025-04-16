console.log("Hello World");

const rock = "rock";
const paper = "paper";
const scissor = "scissor";

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

/*console.log(getComputerChoice());*/

function getHumanChoice() {
   let userInput = prompt("Rock, Paper or Scissor?"); 

   if (userInput.toLowerCase() === "rock") {
    return rock
   } 
   else if (userInput.toLowerCase() === "paper") {
    return paper;
   } 
   else if (userInput.toLowerCase() === "scissor") {
    return scissor;
   }
   else {
    return "This is not an option";
   }
}

/*console.log(getHumanChoice());*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        return "It's a draw!";
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock.";
    } 
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        return "You win! Rock beats Scissor.";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock.";
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        return "It's a draw!"
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        computerScore++;
        return "You lose! Scissor beats Paper.";
    } 
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissor.";
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissor beats Paper.";
    }
    else if (humanChoice === "scissor" && computerChoice === "scissor") {
        return "It's a draw!";
    }
    else {
        return "Something went wrong";
    }
}
/*playRound(humanSelection, computerSelection);*/
console.log(playRound(humanSelection, computerSelection));