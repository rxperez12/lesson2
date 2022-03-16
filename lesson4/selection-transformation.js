let produce = {
  apple: "Fruit",
  carrot: "Vegetable",
  pear: "Fruit",
  broccoli: "Vegetable",
};

function selectFruit(obj) {
  let result = {};
  for (const key in obj) {
    if (obj[key] === "Fruit") {
      result[key] = obj[key];
    }
  }
  return result;
}

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * 2;
    counter += 1;
  }

  return doubledNums;
}

// let myNumbers = [1, 4, 3, 7, 2, 6];
// doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers); // => [1, 4, 3, 7, 2, 6]

function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddNumbers(myNumbers)); // => [2, 4, 6, 14, 2, 6]

// // not mutated
// myNumbers; // => [1, 4, 3, 7, 2, 6]

function multiply(numArray, number) {
  let result = [];
  for (let i = 0; i < numArray.length; i++) {
    result.push(numArray[i] * number);
  }
  return result;
}
let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
