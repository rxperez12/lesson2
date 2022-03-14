// question 1
// let advice =
//   "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.replace("important", "urgent"));

// //question 2
// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// console.log(numbers.slice().reverse());

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// console.log([...numbers].sort((num1, num2) => num1 - num2));

// question 3
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8; // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// question 4
// let famousWords = "seven years ago...";
// console.log("four score and " + famousWords);
// console.log("four score and ".concat(famousWords));

//question 5
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// console.log(flintstones);
// flintstones = flintstones.flat();
// console.log(flintstones);

// flintstones = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);
// console.log(flintstones);
// flintstones = [].concat(...flintstones);

// question 7
// let flintstones = {
//   Fred: 0,
//   Wilma: 1,
//   Barney: 2,
//   Betty: 3,
//   Bambam: 4,
//   Pebbles: 5,
// };

// let arr1 = ["Barney", flintstones.Barney];

// console.log(
//   Object.entries(flintstones)
//     .filter((key) => key[0] === "Barney")
//     .shift()
// );

//question 8
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// question 9
// let title = "Flintstone Family Members";
// let extraSpaces = 40 - title.length;
// extraSpaces = Math.floor(extraSpaces / 2);
// console.log(title.padStart(extraSpaces + title.length));

//question 10
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split("").filter((char) => char === "t").length);
