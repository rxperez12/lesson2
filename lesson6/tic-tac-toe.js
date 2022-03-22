"use strict";
const readline = require("readline-sync");
const INIT_MARKER = " ";
const HUMAN_MARKER = "X";
const COMP_MARKER = "O";
const GLOBAL_WINNER = 3;

let globalScore = { player: 0, computer: 0 };

function prompt(string) {
  console.log(`=> ${string}`);
}

function displayBoard(board) {
  console.clear();
  console.log("");

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMP_MARKER}`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}
function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INIT_MARKER);
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INIT_MARKER;
  }
  return board;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], // rows
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], // columns
    [1, 5, 9],
    [3, 5, 7], // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player1";
    } else if (
      board[sq1] === COMP_MARKER &&
      board[sq2] === COMP_MARKER &&
      board[sq3] === COMP_MARKER
    ) {
      return "Computer";
    }
  }
  return null;
}

function detectGlobalWinner(score) {
  let keys = Object.keys(score);
  let winner = keys.filter((key) => score[key] === GLOBAL_WINNER);
  if (winner.length === 1) {
    return winner[0];
  } else {
    return null;
  }
}

function initializeScore(humanPlayers = 1) {
  let scoreObj = { computer: 0 };
  for (let i = humanPlayers; i > 0; i--) {
    scoreObj[`player${i}`] = 0;
  }

  return scoreObj;
}

function displayScore(score) {
  for (const key in score) {
    prompt(`${capitalize(key)}: ${score[key]}`);
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    square = readline
      .question(prompt(`Choose a square (${joinOr(emptySquares(board))}):`))
      .trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMP_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function joinOr(array, spacer = ", ", word = "or") {
  let string = "";
  if (array.length === 0) {
    return string;
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      if (i === array.length - 1) {
        string = String(array[i]);
      } else if (i === array.length - 2) {
        string = `${String(array[i])} ${word} ${string}`;
      } else {
        string = `${String(array[i])}${spacer}${string}`;
      }
    }
  }
  return string;
}

let score = initializeScore();
while (true) {
  let board = initializeBoard();
  displayBoard(board);

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }
  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    score[detectWinner(board).toLowerCase()] += 1;
    displayScore(score);

    if (detectGlobalWinner(score)) {
      prompt(
        `${capitalize(
          detectGlobalWinner(score)
        )} is the first player to reach ${GLOBAL_WINNER}!`
      );
      score = initializeScore();
    }
  } else {
    prompt("It's a tie!");
  }

  let answer = readline
    .question(prompt("Play again? (y or n)"))
    .toLowerCase()[0];
  if (answer !== "y") break;
}

prompt("Thanks for playing Tic Tac Toe!");
