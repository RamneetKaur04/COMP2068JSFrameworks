const prompt = require('prompt-sync')();// Prompt() will ask the user to choose between ROCK, PAPER, or SCISSORS.

// Function to get user selection and check if it's valid
function getUserChoice() {
    let choice = prompt("Enter your choice (ROCK, PAPER, or SCISSORS): ").toUpperCase();
    while (!['ROCK', 'PAPER', 'SCISSORS'].includes(choice)) {
        console.log("Invalid choice. Please type ROCK, PAPER, or SCISSORS.");
        choice = prompt("Enter your choice (ROCK, PAPER, or SCISSORS): ").toUpperCase();
    }
    return choice;
}

// Function to randomly select ROCK, PAPER, or SCISSORS for the computer
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.34) return 'PAPER';
    if (randomNum < 0.67) return 'SCISSORS';
    return 'ROCK';
}

// Function to check who wins the game
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "It's a tie";
    if (
        (userChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (userChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
        (userChoice === 'PAPER' && computerChoice === 'ROCK')
    ) {
        return "User Wins";
    }
    return "Computer Wins";
}

// Start the game and show the results
const userSelection = getUserChoice();
const computerSelection = getComputerChoice();
console.log(`User selected: ${userSelection}`);
console.log(`Computer selected: ${computerSelection}`);
console.log(determineWinner(userSelection, computerSelection));
