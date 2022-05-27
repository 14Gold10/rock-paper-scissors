function computerPlay(){
  var items = ['rock', 'paper', 'scissors'];
  var item = items[Math.floor(Math.random() * items.length)]; document.write(item);
}

let computerSelection = computerPlay();
let playerSelection = prompt("Enter rock, paper, or scissors");

if ((playerSelection == "rock") && (computerSelection == "scissors")) {
  document.write("You win! Rock beats scissors.");
}
else if ((playerSelection == "rock") && (computerSelection == "paper")) {
  document.write("You lose! Rock is beaten by paper.");
}
else if ((playerSelection == "paper") && (computerSelection == "rock")) {
  document.write("You win! Paper beats rock.");
}
else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
 document.write("You lose! Paper is beaten by scissors.");
}
else if((playerSelection == "scissors") && (computerSelection == "paper")) {
  document.write("You win! Scissors beats paper!");
}
else if((playerSelection == "scissors") && (computerSelection == "rock")) {
  document.write("You lose! Scissors is beaten by rock.");
}
else {
  document.write("Tie!");
}
