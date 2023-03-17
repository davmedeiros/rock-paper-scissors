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

  // Solution using iteration
  const choices = ['rock', 'paper', 'scissors']

  // Check if the choice is valid 
  for (let i = 0, length = choices.length; i < length; i++) {
    if (playerSelection === choices[i]) {
      // The choice is valid
      break;
    }

    if (i === length - 1) {
      return 'Invalid choice';
    }
  }

  // If choices are the same it's a tie
  if (playerSelection === computerSelection) {
    return 'It\'s a tie';
  }

  // TODO: Improve this algorithm using some kind of iteration
  let isWinner = false;
  // Rock beats scissors
  if (playerSelection === choices[0]) {
    isWinner = (computerSelection === choices[2]);
  }

  // Paper beats rock
  if (playerSelection === choices[1]) {
    isWinner = (computerSelection === choices[0]);
  }

  // Scissors beats paper
  if (playerSelection === choices[2]) {
    isWinner = (computerSelection === choices[1]);
  }

  // Check if player own or lose and format output
  if (isWinner) {
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
