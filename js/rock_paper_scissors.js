game();

// Randomly picks either Rock, Paper or Scissors
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Plays a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Stores what key beats what value 
  // (ex. 'rock': 'scissors' means that rock beats scissors)
  const choices = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  }

  if (!choices[playerSelection]) {
    return 'Invalid choice';
  }

  if (playerSelection === computerSelection) {
    return 'It\'s a tie';
  }

  if (computerSelection === choices[playerSelection]) {
    updateScore('player');
    return `You won! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    updateScore('computer');
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

// Play game
function game() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const resultContainer = document.querySelector('#results-container');
      const result = document.createElement('p');
      result.textContent = playRound(e.target.id, getComputerChoice());
      resultContainer.appendChild(result);
    });
  });
}

function updateScore(winner) {
  const score = document.querySelector(`#${winner}.score`)
  score.textContent = Number(score.textContent) + 1;
}