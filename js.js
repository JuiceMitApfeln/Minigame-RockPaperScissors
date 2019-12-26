const values = ["rock", "paper", "scissors"];

document.getElementById("btnCompareChoices").addEventListener("click", compareChoices)

function compareChoices() {
  let userChoice = document.getElementById("inputUserChoice").value;
  //let userChoice = prompt("What is your choice? (rock, paper or scissors)");
  // console.log("You said: " + userChoice);
  if (
    userChoice == "rock" ||
    userChoice == "paper" ||
    userChoice == "scissors"
  ) {
    var computerValue = Math.floor(Math.random() * 3);
    if (computerValue <= 2 && computerValue >= 0) {
      computerValue = values[computerValue % 3];
      // console.log("Computer says: " + computerValue)
    }
    if ((userChoice == computerValue)) {
      // console.log("It's a draw!");
      document.getElementById("answer").innerHTML = "It's a draw!"
      document.getElementById("colorAnswer").className = "hero is-warning"
    }
    if (values.indexOf(userChoice) == 2 && values.indexOf(computerValue) == 0) {
      // console.log("You lose!");
      document.getElementById("answer").innerHTML = "You lose!"
      document.getElementById("colorAnswer").className = "hero is-danger"

    } else if (values.indexOf(userChoice) > values.indexOf(computerValue)) {
      // console.log("You win!");
      document.getElementById("answer").innerHTML = "You win!"
      document.getElementById("colorAnswer").className = "hero is-success"

    }
    if (values.indexOf(userChoice) == 0 && values.indexOf(computerValue) == 2) {
      // console.log("You win!");
      document.getElementById("answer").innerHTML = "You win!"
      document.getElementById("colorAnswer").className = "hero is-success"

    } else if (values.indexOf(userChoice) < values.indexOf(computerValue)) {
      // console.log("You lose!");
      document.getElementById("colorAnswer").className = "hero is-danger"
      document.getElementById("answer").innerHTML = "You lose!"

    }
    document.getElementById("choices").innerHTML = `Computer chose: ${computerValue}<br/>You chose: ${userChoice}`
    // } else {
    //   console.log("Entered wrong value! Game has ended");
    //   //let userChoice = prompt("What is your choice? (rock, paper or scissors)");
    //   console.log(userChoice);
    // }
    compareChoices();
  }
}