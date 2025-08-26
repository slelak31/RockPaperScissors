
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {

    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "paper";
    }
    else if (choice === 1) {
        return "rock";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice () {
    let humanChoice = prompt("Please select Rock, Paper, or Scissors: ");
    return humanChoice
}

function playGame () {

    const humanChoice = undefined;
    const computerChoice = undefined;

    function playRound (humanChoice, computerChoice) {

    let roundOutcome = undefined;

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        roundOutcome = "Tie"
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        roundOutcome = "Won";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        roundOutcome = "Won";
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        roundOutcome = "Won";
    }
    else {
        roundOutcome = "Lost"
    }

    if (roundOutcome == "Tie") {
    console.log("Tie! You both picked " + computerChoice);
    }
    else if (roundOutcome == "Won"){
    console.log("You " + roundOutcome + "! " + humanChoice + " beats " + computerChoice);
    humanScore++;
    }
    else {
    console.log("You " + roundOutcome + "! " + computerChoice + " beats " + humanChoice);
    computerScore++;
    }
}

    for (i = 0; i <5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore == computerScore) {
        console.log ("Its a tie! Final Score: Human " + humanScore + " Computer " + computerScore);
    }
    else if (humanScore > computerScore) {
        console.log ("Congratulations! You won against the computer. Final Score: Human " + humanScore + " Computer " + computerScore);
    }
    else {
        console.log ("You lost against the computer. Final Score: Human " + humanScore + " Computer " + computerScore);
    }
}

playGame();
