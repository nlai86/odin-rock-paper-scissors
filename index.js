function getComputerChoice() {

    let choice = getRandomInt();

    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else if (choice == 3) {
        return "Scissors";
    }
}

function result(gameResult) {
    if (gameResult.slice(0, 8) == "You lose") {
        return "loss";
    } else if (gameResult.slice(0, 7) == "You win") {
        return "win";
    }
}

function getRandomInt(min = 1, max = 4) {
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    computerSelection = computerSelection.toLowerCase().trim();

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Tie! Both of you chose Rock"
        } else if (computerSelection == "paper") {
            return "You lose! Paper wraps Rock"
        } else if (computerSelection == "scissors") {
            return "You win! Rock beats Scissors"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper wraps Rock"
        } else if (computerSelection == "paper") {
            return "Tie! Both of you chose Paper"
        } else if (computerSelection == "scissors") {
            return "You lose, Scissors cuts Paper"
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats Scissors"
        } else if (computerSelection == "paper") {
            return "You win, Scissors cuts Paper"
        } else if (computerSelection == "scissors") {
            return "Tie! Both of you chose Scissors"
        }
    }
}

function game() {

    let playerSelection; 
    let round; 
    let playerScore = 0;
    let computerScore = 0;
    let res; 


    for (let i = 1; i < 6; i++) {
        console.log("Round Number: " + i);
        playerSelection = prompt("Choose one: Rock, Paper, or Scissors"); 
        round = playRound(playerSelection, getComputerChoice());
        res = result(round);
        if (res == "loss") {
            computerScore = ++computerScore;
        } else if (res == "win") {
            playerScore = ++playerScore;
        }
        console.log(round);
        console.log("Score: " + playerScore + "-" + computerScore);
    }

    if (playerScore == computerScore) {
        console.log("Game Over, Tie!")
        console.log("Score: " + playerScore + "-" + computerScore);
    } else if (playerScore > computerScore) {
        console.log("Game Over, You Win!")
        console.log("Score: " + playerScore + "-" + computerScore);
    } else if (playerScore < computerScore) {
        console.log("Game Over, You Lose!")
        console.log("Score: " + playerScore + "-" + computerScore);
    }

}

game();