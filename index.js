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

function getRandomInt(min = 1, max = 4) {
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    computerSelection = computerSelection.toLowerCase().trim();

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            // return "Tie! Both of you chose Rock"
            console.log("Tie! Both of you chose Rock");
        } else if (computerSelection == "paper") {
            // return "You lose! Paper wraps Rock"
            console.log("You lose! Paper wraps Rock");
        } else if (computerSelection == "scissors") {
            // return "You win! Rock beats Scissors"
            console.log("You win! Rock beats Scissors");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            // return "You win! Paper wraps Rock"
            console.log("You win! Paper wraps Rock");
        } else if (computerSelection == "paper") {
            // return "Tie! Both of you chose Paper"
            console.log("Tie! Both of you chose Paper");
        } else if (computerSelection == "scissors") {
            // return "You lose, Scissors cuts Paper"
            console.log("You lose, Scissors cuts Paper");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            // return "You lose! Rock beats Scissors"
            console.log("You lose! Rock beats Scissors");
        } else if (computerSelection == "paper") {
            // return "You win, Scissors cuts Paper"
            console.log("You win, Scissors cuts Paper");
        } else if (computerSelection == "scissors") {
            // return "Tie! Both of you chose Scissors"
            console.log("Tie! Both of you chose Scissors");
        }
    }
}

let computerSelection = getComputerChoice();
let playerSelection = " rOcK";

playRound(playerSelection, computerSelection);