
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

    let humanScoreCount = 0;
    let computerScoreCount = 0;

    const playerBtnChoices = document.querySelectorAll("button");
    const humanScore = document.querySelector(".humanScore");
    const computerScore = document.querySelector(".computerScore");

    playerBtnChoices.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = button.className;
            const computerChoice = getComputerChoice();
            if(!(humanScoreCount == 5) && !(computerScoreCount == 5))
            playRound(humanChoice, computerChoice);
            else {
                const winner = humanScoreCount === 5 ? "You won!" : "Computer won!";
                alert (`${winner}`);
                return;
            }
        });
    });

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
    alert ("Tie");
    }
    else if (roundOutcome == "Won"){
    humanScoreCount++;
    humanScore.textContent = humanScoreCount;
    }
    else {
    console.log("You " + roundOutcome + "! " + computerChoice + " beats " + humanChoice);
    computerScoreCount++;
    computerScore.textContent = computerScoreCount;
    }

    if (humanScoreCount === 5 || computerScoreCount === 5) {
        const winner = humanScoreCount === 5 ? "You win!" : "Computer wins!";
        setTimeout(() => alert (`${winner}`), 75);
        return;
    }

}    

}

playGame();
