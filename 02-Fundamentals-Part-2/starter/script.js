"use strict";

// let hasDriversLic = false;
// const canDrive = true;
// if (canDrive) {
//   hasDriverLic = true;
// }
// if (hasDriversLic) {
//   console.log("you can drive prakash");
// }

// functions

// function fruitProcesser(apple, oranges) {
//   const juice = `Jusice with ${apple} apple and ${oranges} oranges`;
//   return juice;
// }
// console.log(fruitProcesser(5, 0));

// // function expression

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// console.log(calcAge(1998));

// Arrow Function

const calcAgeRetire = (birthyear, firstName) => {
  const age = 2024 - birthyear;
  const retire = 65 - age;
  return `${firstName} retire in ${retire}`;
};

console.log(calcAgeRetire(1996, "prakash"));

const cutFruit = (fruit) => {
  return fruit * 4;
};

const fruitMaker = (apples, orange) => {
  const applePiece = cutFruit(apples);
  const orangePiece = cutFruit(orange);
  return `Juice make by ${applePiece} pices of apple and orange ${orangePiece} pices`;
};

console.log(fruitMaker(4, 5));
