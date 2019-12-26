const values = ["rock", "paper", "scissors"];
gameStart();

function gameStart() {
  let userChoice = prompt("What is your choice? (rock, paper or scissors)");
  console.log("You said: " + userChoice);
  if (
    userChoice == "rock" ||
    userChoice == "paper" ||
    userChoice == "scissors"
  ) {
    var computerValue = Math.floor(Math.random() * 3);
    if (computerValue <= 2 && computerValue >= 0) {
      computerValue = values[computerValue % 3];
      console.log("Computer says: " + computerValue)
    }
    if ((userChoice == computerValue)) {
      console.log("It's a draw!");
    }
    if (values.indexOf(userChoice) == 2 && values.indexOf(computerValue) == 0) {
      console.log("You lose!");
    } else if (values.indexOf(userChoice) > values.indexOf(computerValue)) {
      console.log("You win!");
    }
    if (values.indexOf(userChoice) == 0 && values.indexOf(computerValue) == 2) {
      console.log("You win!");
    } else if (values.indexOf(userChoice) < values.indexOf(computerValue)) {
      console.log("You lose!");
    }
  } else {
    console.log("Entered wrong value! Game has ended");
    let userChoice = prompt("What is your choice? (rock, paper or scissors)");
    console.log(userChoice);
  }
  gameStart(userChoice);
}