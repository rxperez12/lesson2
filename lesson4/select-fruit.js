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

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
