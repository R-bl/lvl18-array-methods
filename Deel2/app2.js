//A Using find method

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderman = superheroes.find((hero) => {
  return hero.name === "Spiderman";
});

console.log(findSpiderman);

// B Using map method

const values = [1, 2, 3];
const doubleArrayValues = values.map((value) => {
  return value * 2;
});
console.log(doubleArrayValues);

// C True or false Check if theres a number in array higher then 10

// const containsNumberBiggerThanTen = [1, 4, 3, 6, 9, 7, 11];
const containsNumberBiggerThanTen = [1, 2, 1, 2, 1, 2];
const biggerThenCheckTen = (item) => item > 10;

console.log(containsNumberBiggerThanTen.some(biggerThenCheckTen));

//D Checks if italy is in Great 7

const greatSeven = [
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States",
];

const checkItaly = (select) => select === "Italy";
console.log(greatSeven.some(checkItaly));

// E multiply each array element by 10
const tenenfold = [1, 4, 3, 6, 9, 7, 11];

tenenfold.forEach((n) => console.log(n * 10));

// F Check if all values are below 100
const isBelow100 = (v) => v < 100;
const arrayOfNumbers = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  101,
  11,
  77,
  84,
  98,
];
console.log(arrayOfNumbers.every(isBelow100));

// G calculate all values of bigArray using .reduce

const bigArray = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  11,
  77,
  84,
  98,
  101,
  206,
  234,
];

const bigSum = (x, y) => x + y;
console.log(bigArray.reduce(bigSum));
