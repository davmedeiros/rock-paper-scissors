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
    let result = '';

    if (!choices.includes(playerSelection)) {
        result = `Invalid choice! \nAvailable choices: ${choices}`;
    } else if (playerSelection == computerSelection) {
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

function playGame() {
    const controlsButtons = document.querySelectorAll('#controls button');

    controlsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(playRound(button.textContent, getComputerChoice()));
        });
    });
}

playGame();
