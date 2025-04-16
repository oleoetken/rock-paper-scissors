console.log("Hello World");

const rock = "rock";
const paper = "paper";
const scissor = "scissor";






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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock"
        || humanChoice === "paper" && computerChoice === "paper" 
        || humanChoice === "scissor" && computerChoice === "scissor")
    {
        return console.log("It's a draw!");
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        /*console.log(computerScore);*/
        return console.log("You lose! Paper beats Rock.");
    } 
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        /*console.log(humanScore);*/
        return console.log("You win! Rock beats Scissor.");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return console.log("You win! Paper beats Rock.");
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        computerScore++;
        return console.log("You lose! Scissor beats Paper.");
    } 
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        computerScore++;
        return console.log("You lose! Rock beats Scissor.");
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        ++humanScore;
        return console.log("You win! Scissor beats Paper.");
    }
    else {
        return console.log("Something went wrong");
    }
}

for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score after round ${i}: Your score: ${humanScore} - Computer score: ${computerScore}`);
}

if (humanScore > computerScore) {
    return console.log(`Congratulations! You won with a score of ${humanScore} - ${computerScore}`);
}
else if (humanScore < computerScore) {
    return console.log(`You lost the game! The score was ${humanScore} - ${computerScore}`);
}
else {
    return console.log(`The game is a tie! The score is ${humanScore} - ${computerScore}`);
}

    
}

playGame();