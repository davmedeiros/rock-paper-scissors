console.log(getComputerChoice());

// Randomly picks either Rock, Paper or Scissors
function getComputerChoice() {
  choices = ['rock', 'paper', 'scissors'];

  return choices[Math.floor(Math.random() * 3)];
}
