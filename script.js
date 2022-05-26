function computerPlay(){
  var items = ['rock', 'paper', 'scissors'];
  var item = items[Math.floor(Math.random() * items.length)]; document.write(item);
}

let playerSelection = prompt("Enter rock, paper, or scissors");
console.log(playerSelection);
let computerSelection = computerPlay();
console.log(computerSelection);

if(playerSelection == "rock") {
  if(computerSelection == "rock") {
    alert("Tie!");
  }
  else if(computerSelection == "scissors") {
    alert("You win! Rock beats scissors.");
  }
  else {
    alert("You lose! Rock is beaten by paper.");
  }
}
else if(playerSelection == "paper") {
  if(computerSelection == "paper") {
    alert("Tie!");
  }
  else if(computerSelection == "rock") {
    alert("You win! Paper beats rock.");
  }
  else {
    alert("You lose! Paper is beaten by scissors.");
  }
}
else {
  if(computerSelection == "scissors") {
    alert("Tie!");
  }
  else if(computerSelection == "paper") {
    alert("You win! Scissors beats paper.");
  }
  else {
    alert("You lose! Scissors is beaten by rock.");
  }
}
