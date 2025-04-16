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