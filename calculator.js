const readline = require("readline-sync");

console.log("Welcome to Calculator!");

let firstNumber = Number(readline.question("What's the first number?\n"));
let secondNumber = Number(readline.question("What's the second number?\n"));
let operation = readline.question(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n"
);

let output;
if (operation === "1") {
  output = firstNumber + secondNumber;
} else if (operation === "2") {
  output = firstNumber - secondNumber;
} else if (operation === "3") {
  output = firstNumber * secondNumber;
} else if (operation === "4") {
  output = firstNumber / secondNumber;
}

console.log(`The result is: ${output}`);
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.// a
