const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];
let wins = [0, 0];

function prompt(message) {
  console.log(`=> ${message}`);
}
function returnsWinner(choice, computerChoice) {
  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "rock")
  ) {
    return "Computer wins!";
  } else {
    return "It's a tie.";
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  let winner = returnsWinner(choice, computerChoice);

  if (winner === "Computer wins!") {
    wins[1] += 1;
  } else if (winner === "You win!") {
    wins[0] += 1;
  }

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  prompt(winner);

  if (wins[0] > 2) {
    prompt("You are the grand winner!");
    break;
  } else if (wins[1] > 2) {
    prompt("Computer is the grand winner!");
    break;
  }
  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === "n") break;
}
