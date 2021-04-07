// A: Add the word cool to an array of strings
const addTheWordCool = (array) => {
  array = ["nice", "awesome", "tof"];
  array.push("cool");
  return array;
};
console.log(addTheWordCool());

// B: returns number of elements in array using .length
const amountOfElementsInArray = (fruitArray) => {
  fruitArray = ["appels", "peren", "citroenen"];
  let amount = fruitArray.length;
  return amount;
};

console.log(amountOfElementsInArray());

// C: Return first element of array
const selectBelgiumFromBenelux = (countryArray) => {
  countryArray = ["Belgie", "Nederland", "Luxemburg"];
  let firstCountry = countryArray.shift();
  return firstCountry;
};
console.log(selectBelgiumFromBenelux());

// D: Return last element of array

const lastElementInArray = (animalArray) => {
  animalArray = ["Haas", "Cavia", "Kip", "Schildpad"];
  let removeLastAnimal = animalArray.pop();
  return removeLastAnimal;
};
console.log(lastElementInArray());

// E: Remove first element of array and return the rest
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = (array1) => {
  return array1.slice(1);
};
console.log(impeachTrumpSlice(presidents));

// Using Splice
const impeachTrumpSplice = (array2) => {
  return array2.splice(1, 2);
};
console.log(impeachTrumpSplice(presidents));

const stringsTogether = (joinArray) => {
  return joinArray.join();
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

const combineArrays = (firstArray, secondArray) => {
  let result = firstArray.concat(secondArray);
  return result;
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]
