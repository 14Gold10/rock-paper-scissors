function computerPlay(){
  var items = ['rock', 'paper', 'scissors'];
  var item = items[Math.floor(Math.random() * items.length)]; document.write(item);
}

let computerSelection = computerPlay();
let playerSelection = prompt("Enter rock, paper, or scissors");

if((playerSelection == "rock") && (computerSelection == "scissors")) {
  alert("You win! Rock beats scissors.");
}
if((playerSelection == "rock") && (computerSelection == "paper")) {
  alert("You lose! Rock is beaten by paper.");
}
if((playerSelection == "paper") && (computerSelection == "rock")) {
  alert("You win! Paper beats rock.");
}
if((playerSelection == "paper") && (computerSelection == "scissors")) {
  alert("You lose! Paper is beaten by scissors.");
}
if((playerSelection == "scissors") && (computerSelection == "paper")) {
  alert("You win! Scissors beats paper!");
}
if((playerSelection == "scissors") && (computerSelection == "rock")) {
  alert("You lose! Scissors is beaten by rock.");
}
if(playerSelection == computerSelection) {
  alert("Tie!");
}
