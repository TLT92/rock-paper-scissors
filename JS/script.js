let computerSelection = computerPlay();
let playerSelection;
let outcome;
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

function playRound (playerSelection) {  
    computerSelection = computerPlay();
    if (playerSelection == "rock") {
        if (computerSelection == "Scissors") {
            x += 1;
            result.textContent = "You win! Rock beats Scissors";
            console.log("Yay");
            return "You win! Rock beats Scissors"
        } else if (computerSelection == "Paper") {
            result.textContent = "You lose! Paper beats Rock";
            return "You lose! Paper beats Rock"
        } else {
            y += 1;
            result.textContent = "It's a draw. Rock vs. Rock!";
            return "It's a draw. Rock vs. Rock!"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
           x += 1;
           result.textContent = "You win! Paper beats Rock";
           return "You win! Paper beats Rock"
        } else if (computerSelection == "Scissors") {
            result.textContent = "You lose! Scissors beat Rock";
            return "You lose! Scissors beat Rock"
        } else {
            y += 1;
            result.textContent = "It's a draw - Paper vs. Paper!";
            return "It's a draw - Paper vs. Paper!"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "Paper") {
            x += 1;
            result.textContent = "You win! Scissors beat Paper";
            return "You win! Scissors beat Paper"
         } else if (computerSelection == "Rock") {
            result.textContent = "You lose! Rock beats Scissors";
             return "You lose! Rock beats Scissors"
         } else {
             y += 1;
             result.textContent = "It's a draw. Scissors vs. Scissors!";
             return "It's a draw. Scissors vs. Scissors!"
         }
    }
}

// neuer Code ab hier

const rock = document.querySelector('#rock');
rock.addEventListener('click', function() {playRound("rock")});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function() {playRound("paper")});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {playRound("scissors")});

const div = document.createElement('div');
div.setAttribute('id', 'result'); 
container.appendChild(div);
'div'.textContent = 'Hello World!'

/* Pseudocode
bei click = check, welcher Button geclickt wurde
nimm den geclickten button als input für playerselection



/* function game() {
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
*/
