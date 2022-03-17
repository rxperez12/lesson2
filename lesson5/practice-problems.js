// let arr = ["10", "11", "9", "7", "8"];
// console.log(arr.sort((a, b) => Number(b) - Number(a)));

let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

// let result = books.sort(
//   (objA, objB) => Number(objA.published) - Number(objB.published)
// );
// console.log(result);
// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// console.log(arr1[2][1][3]);
// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];
// console.log(arr2[1]["third"][0]);
// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// console.log(arr3[2]["third"][0][0]);
// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// console.log(obj1.b[1]);
// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// console.log(Object.keys(obj2.third)[0]);

// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);
// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);
// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// console.log(obj1);
// let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;
// console.log(obj2);

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};
// console.log(Object.values(munsters).reduce((a, b) => a + b.age, 0));

// let munsterValues = Object.values(munsters);
// let sumOfMales = 0;
// for (const obj of munsterValues) {
//   if (obj.gender === "male") {
//     sumOfMales += obj.age;
//   }
// }
// console.log(sumOfMales);
// let munsterEntries = Object.entries(munsters);
// for (const elem of munsterEntries) {
//   console.log(`${elem[0]} is a ${elem[1].age}-year-old ${elem[1].gender}.`);
// }

// let obj = {
//   first: ["the", "quick"],
//   second: ["brown", "fox"],
//   third: ["jumped"],
//   fourth: ["over", "the", "lazy", "dog"],
// };

// Object.values(obj).forEach((arr) => {
//   arr.forEach((word) => {
//     let wordArr = word.split("");
//     wordArr.forEach((letter) => {
//       if ("aeiou".includes(letter)) {
//         console.log(letter);
//       }
//     });
//   });
// });

// let arr = [
//   ["b", "c", "a"],
//   [2, 11, -3],
//   ["blue", "black", "green"],
// ];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i][0] === "number") {
//     arr[i].sort((a, b) => a - b);
//   } else {
//     arr[i].sort();
//   }
// }
// console.log(arr);

// console.log(
//   arr.map((subArr) => {
//     if (typeof subArr[0] === "number") {
//       return [...subArr].sort((a, b) => b - a);
//     } else {
//       return [...subArr].sort().reverse();
//     }
//   })
// );

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(
//   arr.map((subObj) => {
//     let keys = Object.keys(subObj);
//     let subObjIncrement = {};
//     for (let i = 0; i < keys.length; i++) {
//       subObjIncrement[keys[i]] = subObj[keys[i]] + 1;
//     }
//     return subObjIncrement;
//   })
// );

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// // let arr1 = [];
// for (const subArr of arr) {
//   arr1.push(subArr.filter((number) => number % 3 === 0));
// }
// console.log(arr1);
// console.log(
//   arr.map((subArr) => {
//     return subArr.filter((number) => number % 3 === 0);
//   })
// );

// let arr = [
//   [1, 6, 7],
//   [1, 5, 3],
//   [1, 8, 3],
// ];

// console.log(arr.sort((a, b) => a - b.reduce((x, y) => x + y), 0));
// console.log(
//   arr.sort((a, b) => {
//     let oddSumA = a
//       .filter((number) => number % 2 === 1)
//       .reduce((sum, next) => sum + next);
//     let oddSumB = b
//       .filter((number) => number % 2 === 1)
//       .reduce((sum, next) => sum + next);
//     return oddSumA - oddSumB;
//   })
// );

// let obj = {
//   grape: { type: "fruit", colors: ["red", "green"], size: "small" },
//   carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
//   apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
//   apricot: { type: "fruit", colors: ["orange"], size: "medium" },
//   marrow: { type: "vegetable", colors: ["green"], size: "large" },
// };
// let capitalize = function (string) {
//   return string[0].toUpperCase() + string.slice(1);
// };

// console.log(
//   Object.values(obj).map((subObj) => {
//     if (subObj.type === "vegetable") {
//       return subObj.size.toUpperCase();
//     } else {
//       return subObj.colors.map((word) => capitalize(word));
//     }
//   })
// );

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];
// let result = arr.filter((subObj) => {
//   return Object.values(subObj).every((subArr) => {
//     return subArr.every((number) => number % 2 === 0);
//   });
// });
// console.log(result);

// let arr = [
//   ["a", 1],
//   ["b", "two"],
//   ["sea", { c: 3 }],
//   ["D", ["a", "b", "c"]],
// ];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// function arrToObj(array) {
//   let obj = {};
//   array.map((subArray) => {
//     obj[subArray[0]] = subArray[1];
//   });
//   return obj;
// }
// console.log(arrToObj(arr));

// console.log(Object.fromEntries(arr));
const CHARACTERS = "abcdef0123456789";
let getRandomChar = function (charString) {
  let randomIndex = Math.floor(Math.random() * (charString.length - 1));
  return charString[randomIndex];
};
let getRandomCharString = function (length) {
  let string = "";
  for (let i = 0; i < length; i++) {
    string += getRandomChar(CHARACTERS);
  }
  return string;
};

function returnUUID() {
  let value1 = getRandomCharString(8);
  let value2 = getRandomCharString(4);
  let value3 = getRandomCharString(4);
  let value4 = getRandomCharString(4);
  let value5 = getRandomCharString(12);
  return `${value1}-${value2}-${value3}-${value4}-${value5}`;
}

console.log(returnUUID());
