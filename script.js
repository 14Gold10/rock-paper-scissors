function computerPlay(){
  var items = ['rock', 'paper', 'scissors'];
  var item = items[Math.floor(Math.random() * items.length)]; document.write(item);
}

let playerSelection = prompt("Enter rock, paper, or scissors");
console.log(playerSelection);
let computerSelection = computerPlay();

if(playerSelection == computerSelection){
  alert("Tie!");
}
else if(((playerSelection == "rock") && (computerSelection == "scissors")) || ((playerSelection == "paper") && (computerSelection == "rock")) || ((playerSelection = "scissors") && (computerSelection = "paper"))){
  alert("You win!");
}
else {
  alert("You lose!");
}
