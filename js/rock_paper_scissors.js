console.log(playRound('rock', getComputerChoice()));

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
  console.log(playerSelection);
  console.log(computerSelection);

  // If choices are the same it's a tie
  if (playerSelection === computerSelection) {
    return 'It\'s a tie';
  }

  let isWinner = false;

  const ROCK = 'rock';
  const PAPER = 'paper';
  const SCISSORS = 'scissors'
  // Rock beats scissors
  if (playerSelection === ROCK) {
    isWinner = (computerSelection === SCISSORS);
  }

  // Paper beats rock
  if (playerSelection === PAPER) {
    isWinner = (computerSelection === ROCK);
  }

  // Scissors beats paper
  if (playerSelection === SCISSORS) {
    isWinner = (computerSelection === PAPER);
  }

  // Check if player own or lose and format output
  if (isWinner) {
    return `You won! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  // Return round result
  return 'Invalid choice';
}
