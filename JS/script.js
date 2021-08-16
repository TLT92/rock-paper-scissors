let computerSelection = computerPlay();
let playerSelection;
let x = 0;
let y = 0;
let z = 0;

if (x == 5) {
    result.textContent = `CONGRATULATIONS! YOU'VE WON!`;
} else if (z == 5) {
    result.textContent = `YOU'VE LOST THE GAME LOL - LOSER!`;
}  

function computerPlay() {
        let a = Math.random();
        if (a <= 0.33) {
            return "Rock";
        }
        else if (a >= 0.33 && a <= 0.66 ) {
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
            result.textContent = `You win! Rock beats Scissors \nScore \nYou ${x}:${z} Computer`;
            if (x == 5) {
                result.textContent = `You win! Rock beats Scissors \nScore \nYou ${x}:${z} Computer \nCONGRATULATIONS! YOU'VE WON!`;
                x = 0;
                z = 0;
            }
        } else if (computerSelection == "Paper") {
            z += 1;
            result.textContent = `You lose! Paper beats Rock \nScore \nYou ${x}:${z} Computer`;
            if (z == 5) {
                result.textContent = `You lose! Paper beats Rock \nScore \nYou ${x}:${z} Computer \nYOU'VE LOST THE GAME LOL - LOSER!`;
                x = 0;
                z = 0;
            }
        } else {
            result.textContent = `It's a draw. Rock vs. Rock! \nScore \nYou ${x}:${z} Computer`;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
           x += 1;
           result.textContent = `You win! Paper beats Rock \nScore \nYou ${x}:${z} Computer`;
           if (x == 5) {
                result.textContent = `You win! Paper beats Rock \nScore \nYou ${x}:${z} Computer \nCONGRATULATIONS! YOU'VE WON!`;
                x = 0;
                z = 0;
        }
        } else if (computerSelection == "Scissors") {
            z += 1;
            result.textContent = `You lose! Scissors beat Rock \nScore \nYou ${x}:${z} Computer`;
            if (z == 5) {
                result.textContent = `You lose! Scissors beat Rock \nScore \nYou ${x}:${z} Computer \nYOU'VE LOST THE GAME LOL - LOSER!`;
                x = 0;
                z = 0;
            }
        } else {
            result.textContent = `It's a draw - Paper vs. Paper! \nScore \nYou ${x}:${z} Computer`;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "Paper") {
            x += 1;
            result.textContent = `You win! Scissors beat Paper \nScore \nYou ${x}:${z} Computer`;
            if (x == 5) {
                result.textContent = `You win! Scissors beat Paper \nScore \nYou ${x}:${z} Computer \nCONGRATULATIONS! YOU'VE WON THE GAME!`;
                x = 0;
                z = 0;
            }
         } else if (computerSelection == "Rock") {
            z += 1;
            result.textContent = `You lose! Rock beats Scissors \nScore \nYou ${x}:${z} Computer`;
            if (z == 5) {
                result.textContent = `You lose! Rock beats Scissors \nScore \nYou ${x}:${z} Computer  \nYOU'VE LOST THE GAME LOL - LOSER!`;
                x = 0;
                z = 0;
            }
         } else {
            result.textContent = `It's a draw. Scissors vs. Scissors! \nScore \nYou ${x}:${z} Computer`;
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

result.setAttribute('style', 'white-space: pre;')

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
