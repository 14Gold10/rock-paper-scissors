const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  const playGame = () => {
    let rockBtn = document.createElement("button");
    let paperBtn = document.createElement("button");
    let scissorBtn = document.createElement("button");
    const playerOptions = [rockBtn,paperBtn,scissorBtn];
    const computerOptions = ['rock','paper','scissors'];
