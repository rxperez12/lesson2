const readline = require("readline-sync");

function prompt(message) {
  return readline.question(`=> ${message}`);
}
console.log("Welcome to Calculator!");

function invalidNumber(number) {
  return number.trim() === "" || Number.isNaN(Number(number));
}
let firstNumber = prompt("What's the first number?\n");

while (invalidNumber(firstNumber)) {
  firstNumber = prompt(
    "Hmm... that doesn't look like a valid number. What's your first number?\n"
  );
}

let secondNumber = prompt("What's the second number?\n");

while (invalidNumber(secondNumber)) {
  secondNumber = prompt(
    "Hmm... that doesn't look like a valid number. What's your second number?\n"
  );
}

let operation = prompt(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n"
);
while (!["1", "2", "3", "4"].includes(operation)) {
  operation = prompt("Must choose 1, 2, 3, or 4. Try again\n");
}
let output;
// if (operation === "1") {
//   output = firstNumber + secondNumber;
// } else if (operation === "2") {
//   output = firstNumber - secondNumber;
// } else if (operation === "3") {
//   output = firstNumber * secondNumber;
// } else if (operation === "4") {
//   output = firstNumber / secondNumber;
// }
switch (operation) {
  case "1":
    output = Number(firstNumber) + Number(secondNumber);
    break;
  case "2":
    output = Number(firstNumber) - Number(secondNumber);
    break;
  case "3":
    output = Number(firstNumber) * Number(secondNumber);
    break;
  case "4":
    output = Number(firstNumber) / Number(secondNumber);
    break;
}

console.log(`The result is: ${output}`);
// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.// a
