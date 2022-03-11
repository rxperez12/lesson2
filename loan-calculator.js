const readline = require("readline-sync");

console.log("Loan Calculator");

function invalidNumber(number) {
  return number.trim() === "" || Number.isNaN(Number(number));
}

let loanAmount = readline.question("What is the loan amount? ");
while (invalidNumber(loanAmount) || loanAmount < 0) {
  loanAmount = readline.question("Invalid number. Try again. ");
}

let interestRate = readline.question(
  "What is the APR or interest rate of the loan? Please enter a number between 0 to 100. "
);

while (
  invalidNumber(interestRate) ||
  +interestRate > 100 ||
  +interestRate < 0
) {
  interestRate = readline.question("Invalid number.Try again. ");
}

let loanDuration = readline.question("What is the loan duration in years? ");
while (invalidNumber(loanDuration) || loanDuration < 0) {
  loanDuration = readline.question("Invalid number. Try again. ");
}
loanAmount = Number(loanAmount);

interestRate = Number(interestRate) / 100 / 12;

loanDuration = Number(loanDuration) * 12;

let monthlyPayment =
  loanAmount * (interestRate / (1 - Math.pow(1 + interestRate, -loanDuration)));

console.log(`Your monthly payments are $${monthlyPayment.toFixed(2)}`);
