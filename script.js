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

// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(`human choice: ${humanChoice}`)
    console.log(`computer choice: ${computerChoice}`)
    
    
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore = computerScore + 1;
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
    console.log("Round 1:")
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`human: ${humanScore} computer: ${computerScore}`);
    console.log("")

    console.log("Round 2:")
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`human: ${humanScore} computer: ${computerScore}`);
    console.log("")

    console.log("Round 3:")
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`human: ${humanScore} computer: ${computerScore}`);
    console.log("")

    console.log("Round 4:")
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`human: ${humanScore} computer: ${computerScore}`);
    console.log("")

    console.log("Round 5:")
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`human: ${humanScore} computer: ${computerScore}`);
    console.log("")

    console.log("Final score:")
    console.log(`human: ${humanScore} computer: ${computerScore}`)
}



// console.log(playGame())
const body = document.querySelector("body");

const paper = document.createElement("button")
paper.setAttribute("id", "paper")
paper.textContent = "paper"
const rock = document.createElement("button")
rock.setAttribute("id", "rock")
rock.textContent = "rock"
const scissors = document.createElement("button")
scissors.setAttribute("id", "scissors")
scissors.textContent = "scissors"



body.appendChild(paper)
body.appendChild(rock)
body.appendChild(scissors)

const div = document.createElement("div")
div.textContent = `human score: ${humanScore} computer score: ${computerScore}`
body.appendChild(div)

const newDiv = document.createElement("div")
body.appendChild(newDiv)

const paper_play = document.querySelector("#paper")
paper_play.addEventListener("click", () => playRound("paper", getComputerChoice()))

paper_play.addEventListener("click", function() {
    newDiv.textContent = ""
    div.textContent = `human score: ${humanScore} computer score: ${computerScore}`
})

paper_play.addEventListener("click", function() {
    if (humanScore >= 5) {
        humanScore = 0
        computerScore = 0
        newDiv.textContent = "Human wins"
    }

    if (computerScore >= 5) {
        humanScore = 0
        computerScore = 0
        newDiv.textContent = "Computer wins"
    }
})

const rock_play = document.querySelector("#rock")
rock_play.addEventListener("click", () => playRound("rock", getComputerChoice()))

rock_play.addEventListener("click", function() {
    newDiv.textContent = ""
    div.textContent = `human score: ${humanScore} computer score: ${computerScore}`
})

rock_play.addEventListener("click", function() {
    if (humanScore >= 5) {
        humanScore = 0
        computerScore = 0
        newDiv.textContent = "Human wins"
    }

    if (computerScore >= 5) {
        humanScore = 0
        computerScore = 0
        newDiv.textContent = "Computer wins"
    }
})

const scissors_play = document.querySelector("#scissors")
scissors_play.addEventListener("click", () => playRound("scissors", getComputerChoice()))

scissors_play.addEventListener("click", function() {
    newDiv.textContent = ""
    div.textContent = `human score: ${humanScore} computer score: ${computerScore}`
})

scissors_play.addEventListener("click", function() {
    if (humanScore >= 5) {
        humanScore = 0
        computerScore = 0
        newDiv.textContent = "Human wins"
    }

    if (computerScore >= 5) {
        humanScore = 0
        computerScore = 0
        newDiv.textContent = "Computer wins"
    }
})









function checkScore() {

    

    if (humanScore >= 5) {
        humanScore = 0
        computerScore = 0
        return "Human wins"
    }

    if (computerScore >=5) {
        humanScore = 0
        computerScore = 0
        return "Computer wins"
    }
}


