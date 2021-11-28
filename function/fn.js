'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive");
}

// const interface = 'Audio';

function logger() {
  console.log(`My name is jony`);
}

// calling / running / invoking the function
logger();

const appleAndOrangeJuice = fruitProcessor(2, 4);

console.log(appleAndOrangeJuice);

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juices = `Juice with ${apples} apples and ${oranges} oranges`;

  return juices;
}

console.log(fruitProcessor(5, 0));

// function declaration

function calcAge(birthYear) {
  return 2037 - birthYear;
}

const age = calcAge(1996);
console.log(age);

// function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const ageOne = calcAge2(1991);

console.log(ageOne);

// arrow funtion

const ageTwo = (birthYear) => {
  return 2037 - birthYear;
};

console.log(ageTwo(1986));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1996, "jony"));

// arrow funtion do nnot get this keyword

*/

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juices = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;

    return juices;
}

console.log(fruitProcessor(2, 4));
