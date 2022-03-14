//question 2
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1.endsWith("!"));
// console.log(str2.endsWith("!"));

//question 3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// // console.log(ages.hasOwnProperty("Spot"));

// //question 4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// console.log(
//   munstersDescription[0].toUpperCase() +
//     munstersDescription.slice(1).toLowerCase()
// );
// munstersDescription.charAt(0).toUpperCase() +
//   munstersDescription.substring(1).toLowerCase();

// question 6

// let additionalAges = { Marilyn: 22, Spot: 237 };

// console.log(Object.assign(ages, additionalAges));

//question 7
// let str1 =
//   "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes("Dino"));
// console.log(str2.includes("Dino"));
// str1.match("Dino") !== null; // false
// str2.match("Dino") !== null; // true
// str1.indexOf('Dino') > -1; // false
// str2.indexOf('Dino') > -1; // true

//question 8 and 9
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push("Dino", "Hoppy");
// console.log(flintstones);

//question 10
// let advice =
//   "Few things in life are as important as house training your pet dinosaur.";

// // Expected return value:
// // => 'Few things in life are as important as '

// console.log(advice.slice(0, advice.indexOf("house")));
// console.log(advice.indexOf("house"));
