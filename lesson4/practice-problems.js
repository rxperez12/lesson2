let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let flinstonesObj = {};
flintstones.forEach((firstName, idx) => {
  flinstonesObj[firstName] = idx;
});
// console.log(flinstonesObj);

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

// console.log(Object.values(ages).reduce((a, b) => a + b));
let smallestValue;
// console.log(Object.values(ages).sort((a, b) => a - b)[0]);
// console.log(Math.min(...Object.values(ages)));

let statement = "The Flintstones Rock";
let letterObj = {};
statement.split("").forEach((letter) => {
  if (!letterObj.hasOwnProperty(letter)) {
    letterObj[letter] = 1;
  } else {
    letterObj[letter] += 1;
  }
});

// console.log(letterObj);
