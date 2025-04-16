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

console.log(getComputerChoice());

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

console.log(getHumanChoice());