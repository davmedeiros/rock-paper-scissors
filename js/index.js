function getAvailableChoices() {
    return ['rock', 'paper', 'scissors'];
}

function getComputerChoice() {
    const choices = getAvailableChoices();
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const choices = getAvailableChoices();

    if (!choices.includes(playerSelection)) {
        return `Invalid choice! \nAvailable choices: ${choices}`;
    }

    let result = '';

    if (playerSelection == computerSelection) {
        result = 'It\'s a tie!';
    } else {
        if (playerSelection == 'rock' && computerSelection == 'scissors' ||
            playerSelection == 'paper' && computerSelection == 'rock' ||
            playerSelection == 'scissors' && computerSelection == 'paper') {
            result = `You Win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            result = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }
    }

    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, paper or scissors?');
        console.log(playRound(playerSelection, getComputerChoice()));       
    }
}

game();
