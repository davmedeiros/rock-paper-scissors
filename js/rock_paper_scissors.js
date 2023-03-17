console.log(getComputerChoice());

// Randomly picks either Rock, Paper or Scissors
function getComputerChoice() {
  choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * 3)];
}

// Plays a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // If choices are the same
    // Issa tie

  // If pS = rock and cS = paper
    // Player loses
  // If pS = rock and cS = scissors
    // Player wins

  // If pS = paper and cS = rock
    // Player wins
  // If pS = paper and cS = scissors
    // Player loses
  
  // If pS = scissors and cS = rock
    // Player loses
  // If pS = scissors and cS = paper
    // Player wins

  // Return round result
  return 'Max bidding. Better believe it.';
}
