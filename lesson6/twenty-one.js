"use strict";
const readline = 
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
function displayCards(hand, dealerOrPlayer){
  let result = ''
  if(dealerOrPlayer = 'dealer'){
    result = 'Dealer has: '
  } else {
    result = 'You have: '
  }
}

let deck = initializeDeck();
let playerHand = [];
let dealerHand = [];

dealCardsToHand(deck, playerHand, 2);
dealCardsToHand(deck, dealerHand, 2);
