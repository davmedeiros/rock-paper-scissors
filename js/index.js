let playerPoints = 0;
let computerPoints = 0;

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
            playerPoints++;
        } else {
            result = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            computerPoints++;
        }
    }

    return result;
}

function playGame() {
    const controlsButtons = document.querySelectorAll('#controls button');
    const screenResults = document.querySelector('#screen #results');
    const playerPointsScreen = document.querySelector('#player-points');
    const computerPointsScreen = document.querySelector('#computer-points');

    controlsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const result = document.createElement('p');
            result.textContent = playRound(button.textContent, getComputerChoice());
            playerPointsScreen.textContent = playerPoints;
            computerPointsScreen.textContent = computerPoints;
            screenResults.appendChild(result);

            if (playerPoints >= 5 || computerPoints >= 5) {
                const winningMessage = document.createElement('p');
                winningMessage.textContent = `${(playerPoints > computerPoints) ? 'Player' : 'Computer'} won the game!!! Reload the page to play again ( ͡° ͜ʖ ͡°)`;
                screenResults.appendChild(winningMessage);
                controlsButtons.forEach(button => {
                    button.disabled = true;
                });
            }
        });
    });
}

playGame();
