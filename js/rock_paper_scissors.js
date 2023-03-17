// console.log(playRound('scissors', getComputerChoice()));
game();

// Randomly picks either Rock, Paper or Scissors
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * 3)];
}

// Plays a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Normalize inputs to lowercase
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Stores what key beats what value 
  // (ex. 'rock': 'scissors' means that rock beats scissors)
  const choices = {
    'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
  }

  // Check if the choice is valid 
  if (!choices[playerSelection]) {
    return 'Invalid choice';
  }

  // If choices are the same it's a tie
  if (playerSelection === computerSelection) {
    return 'It\'s a tie';
  }

  // Check if player won or lose and format output
  if (computerSelection === choices[playerSelection]) {
    return `You won! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function game() {
  let playerSelection = '';
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt('Rock, Paper or Scissors?');
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}
