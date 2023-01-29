function getComputerChoice() {

    let choice = getRandomInt();

    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {s
        return "Paper";
    } else if (choice == 3) {
        return "Scissors";
    }
}

function getRandomInt(min = 1, max = 4) {
    return Math.floor(Math.random() * (max - min) + min);
}

