let userInput;
let playerScore = 0;
let computerScore = 0;
let playerScoreFE = document.querySelector(".player-score h1");
let computerScoreFE = document.querySelector(".computer-score h1");
let promptFE = document.querySelector(".prompt h1");

function getComputerChoice() {
    let choice = getRandomInt();
    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else if (choice == 3) {
        return "scissors";
    }   
}

function getRandomInt(min = 1, max = 4) {
    return Math.floor(Math.random() * (max - min) + min);
}

function resetGame(user, player) {
    this.playerScore = 0;
    this.userScore = 0; 
    promptFE.textContent = "New game, click a button to begin!";
    computerScoreFE.textContent = computerScore;
    playerScoreFE.textContent = playerScore;
    
}

function playRound(playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        computerScoreFE.textContent = "0";
        playerScoreFE.textContent = "0";
    }

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            promptFE.textContent = "Tie, you both picked rock!";
        } else if (computerSelection == "paper") {
            ++computerScore;
            computerScoreFE.textContent = computerScore;
            if (computerScore == 5) {
                promptFE.textContent = "Paper wraps rock! Unfortunately, you lost the game :(";
            } else {
                promptFE.textContent = "You lose, paper wraps rock!";
            }
        } else if (computerSelection == "scissors") {
            ++playerScore;
            playerScoreFE.textContent = playerScore;
            if (playerScore == 5) {
                promptFE.textContent = "Rock beats scissors! Congratulations, you won the game!";
            } else {
                promptFE.textContent = "You win, rock beats scissors!";
            }
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            ++playerScore;
            playerScoreFE.textContent = playerScore;
            if (playerScore == 5) {
                promptFE.textContent = "Paper wraps rock! Congratulations, you won the game!";
            } else {
                promptFE.textContent = "You win, paper wraps rock!";
            }
        } else if (computerSelection == "paper") {
            promptFE.textContent = "Tie, you both picked paper!";
        } else if (computerSelection == "scissors") {
            ++computerScore;
            computerScoreFE.textContent = computerScore;
            if (computerScore == 5) {
                promptFE.textContent = "Scissors cuts paper! Unfortunately, you lost the game :(";
            } else {
                promptFE.textContent = "You lose, scissors cuts paper!";
            }
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            ++computerScore;
            computerScoreFE.textContent = computerScore;    
            if (computerScore == 5) {
                promptFE.textContent = "Scissors cuts paper! Unfortunately, you lost the game :(";
            } else {
                promptFE.textContent = "You lose, rock beats scissors!";
            }
        } else if (computerSelection == "paper") {
            ++playerScore;
            playerScoreFE.textContent = playerScore;
            if (playerScore == 5) {
                promptFE.textContent = "Scissors cuts paper! Congratulations, you won the game!";
            } else {
                promptFE.textContent = "You win, scissors cuts paper!";
            }
        } else if (computerSelection == "scissors") {
            promptFE.textContent = "Tie, you both picked scissors!";
        }
    }
} 

const rockBtn = document.querySelector('.rock-button');
rockBtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector('.paper-button');
paperBtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector('.scissors-button');
scissorsBtn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

const resetBtn = document.querySelector('.reset-button');
resetBtn.addEventListener('click', () => {
    if (playerScore != 0 || computerScore != 0) {
        playerScore = 0;
        computerScore = 0;
        computerScoreFE.textContent = "0";
        playerScoreFE.textContent = "0";
        promptFE.textContent = "New game, click a button to begin!";
    }
});


