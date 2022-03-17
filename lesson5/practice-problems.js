let arr = ["10", "11", "9", "7", "8"];
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

let result = books.sort(
  (objA, objB) => Number(objA.published) - Number(objB.published)
);
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
//practice problem 7
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;
