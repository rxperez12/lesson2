// question 1
// let phrase = "The Flinstones Rock!";
// for (let i = 0; i < 10; i++) {
//   phrase = " " + phrase;
//   console.log(phrase);
// }
// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }

// question 2
// let munstersDescription = "The Munsters are creepy and spooky.";
// let result = "";
// for (let i = 0; i < munstersDescription.length; i++) {
//   if (munstersDescription[i] === munstersDescription[i].toLowerCase()) {
//     result += munstersDescription[i].toUpperCase();
//   } else {
//     result += munstersDescription[i].toLowerCase();
//   }
// }
// console.log(result);

// munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

//question 3
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor--;
//   }
//   return factors;
// }
// console.log(factors(10));

// question 8
// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach((familyMember) => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

//question 9
// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }
// console.log(rps("rock", "scissors"));
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
