"use strict";
const readline = require("readline-sync");
const CARD_VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const SUITS = ["H", "S", "C", "D"];
const CARD_NAMES = {
  A: "Ace",
  K: "King",
  Q: "Queen",
  J: "Jack",
};

function initializeDeck() {
  let deck = [];
  SUITS.forEach((suit) => {
    CARD_VALUES.forEach((card) => {
      deck.push([suit, card]);
    });
  });
  return shuffle(deck);
}

function shuffle(array) {
  let result = array;
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [result[index], result[otherIndex]] = [result[otherIndex], result[index]]; // swap elements
  }
  return result;
}

function dealCardsToHand(deck, hand, cards = 1) {
  for (let i = cards; i > 0; i--) {
    let card = deck.shift();
    hand.push(card);
  }
}

function joinAnd(array, spacer = ", ", word = "and") {
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

function displayCards(hand, dealerOrPlayer) {
  let cardValues = hand.map((card) => {
    if (["J", "Q", "K", "A"].includes(card[1])) {
      return CARD_NAMES[card[1]];
    } else {
      return card[1];
    }
  });
  let result = "";
  if (dealerOrPlayer === "dealer") {
    cardValues[cardValues.length - 1] = "unknown card";
    result = `Dealer has: ${joinAnd(cardValues)}`;
  } else {
    result = `You have: ${joinAnd(cardValues)}`;
  }
  console.log(result);
}

function total(hand) {
  let sum = 0;
  let cardValues = hand.map((card) => card[1]);
  for (let i = 0; i < cardValues.length; i++) {
    if (cardValues[i] === "A") {
      sum += 11;
    } else if (["J", "Q", "K"].includes(cardValues[i])) {
      sum += 10;
    } else {
      sum += Number(cardValues[i]);
    }
  }
  cardValues
    .filter((card) => card === "A")
    .forEach((_) => {
      if (sum > 21) sum -= 10;
    });
  return sum;
}

let deck = initializeDeck();
let playerHand = [];
let dealerHand = [];

dealCardsToHand(deck, playerHand, 2);
dealCardsToHand(deck, dealerHand, 2);

while (true) {
  displayCards(dealerHand, "dealer");
  displayCards(playerHand, "player");

  while (true) {
    console.log("hit or stay?");
    let answer = readline.question();
    if (answer === "stay" || busted()) break;
  }

  if (busted()) {
    // probably end the game? or ask the user to play again?
  } else {
    console.log("You chose to stay!"); // if player didn't bust, must have stayed to get here
  }
  break;
}
