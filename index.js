const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".results");

function rockChoice() {
  let choiceOne = Math.floor(Math.random() * 3);
  if (choiceOne == 0) {
    result.innerHTML = "Draw! <br> Computer Chose Rock";
  } else if (choiceOne == 1) {
    result.innerHTML = "You Lost! <br> Computer Chose Paper";
  } else if (choiceOne == 2) {
    result.innerHTML = "You Won! <br> Computer Chose Scissors";
  }
  console.log(choiceOne);
}

function paperChoice() {
  let choiceTwo = Math.floor(Math.random() * 3);
  if (choiceTwo == 0) {
    result.innerHTML = "You Won! <br> Computer Chose Rock";
  } else if (choiceTwo == 1) {
    result.innerHTML = "Draw! <br> Computer Chose Paper";
  } else if (choiceTwo == 2) {
    result.innerHTML = "You Lost! <br> Computer Chose Scissors";
  }
  console.log(choiceTwo);
}

function scissorsChoice() {
  let choiceThree = Math.floor(Math.random() * 3);
  if (choiceThree == 0) {
    result.innerHTML = "You Lost! <br> Computer Chose Rock";
  } else if (choiceThree == 1) {
    result.innerHTML = "You Won! <br> Computer Chose Paper";
  } else if (choiceThree == 2) {
    result.innerHTML = "Draw! <br> Computer Chose Scissors";
  }
  console.log(choiceThree);
}

rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);
