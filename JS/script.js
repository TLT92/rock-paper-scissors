let computerSelection = computerPlay();
let playerSelection;
let x = 0;
let y = 0;

function computerPlay() {
        let x = Math.random();
        if (x <= 0.33) {
            return "Rock";
        }
        else if (x >= 0.33 && x <= 0.66 ) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
    }

function playRound () {
    playerSelection = prompt("Take your pick!");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Scissors") {
            x += 1;
            return "You win! Rock beats Scissors"
        } else if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock"
        } else {
            y += 1;
            return "It's a draw. Rock vs. Rock!"
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
           x += 1;
           return "You win! Paper beats Rock"
        } else if (computerSelection == "Scissors") {
            return "You lose! Scissors beat Rock"
        } else {
            y += 1;
            return "It's a draw - Paper vs. Paper!"
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Paper") {
            x += 1;
            return "You win! Scissors beat Paper"
         } else if (computerSelection == "Rock") {
             return "You lose! Rock beats Scissors"
         } else {
             y += 1;
             return "It's a draw. Scissors vs. Scissors!"
         }
    }
}

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    if (x >= 3) {
        console.log("Congratulations, you've won the game!")
    } else if (y == 5) {
        console.log("It's a draw!Better luck next time!")
    } else if (y == 3 && x == 1) {
        console.log("It's a draw! Better luck next time!")
    } else if (y == 1 && x == 2) {
        console.log("It's a draw! Better luck next time!")
    } else {
        console.log("You lost! Better luck next time!")
    }
}
