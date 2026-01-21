function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice > 0.66) {
        computerChoice = "rock";
    } else if (computerChoice < 0.33) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("enter...");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        return "You lose, paper beats rock";
    } 
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        return "You lose, rock beats scissors";
    } 
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1;
        return "You win, rock beats scissors";
    } 
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1;
        return "You win, paper beats rock";
    } 
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1;
        return "You win, scissors beats paper";
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        return "You lose, scissors beats paper"
    }
    else {
        return "You draw"
    }
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    return `Player: ${humanScore}, Computer: ${computerScore}`;

}

playGame();