console.log(playRound('rock', getComputerChoice()));

// Randomly picks either Rock, Paper or Scissors
function getComputerChoice() {
  choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * 3)];
}

// Plays a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Normalize inputs to lowercase
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);

  // If choices are the same it's a tie
  if (playerSelection === computerSelection) {
    return 'It\'s a tie';
  }

  const ROCK = 'rock';
  const PAPER = 'paper';
  const SCISSORS = 'scissors'
  // Rock beats scissors
  if (playerSelection === ROCK) {
    return (computerSelection === SCISSORS) ? 'You win!' : 'You lose!';
  }

  // Paper beats rock
  if (playerSelection === PAPER) {
    return (computerSelection === ROCK) ? 'You win!' : 'You lose!';
  }

  // Scissors beats paper
  if (playerSelection === SCISSORS) {
    return (computerSelection === PAPER) ? 'You win!' : 'You lose!';
  }

  // Return round result
  return 'Invalid choice';
}
