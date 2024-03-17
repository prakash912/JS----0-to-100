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

//coding exercise --5

/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(44, 23, 71);

const checkWinner = (avgScore1, avgScore2) => {
  if (avgScore1 > avgScore2 && avgScore1 >= 2 * avgScore2) {
    return console.log(`Dolphins win (${avgScore1} vs. ${avgScore2})`);
  } else if (avgScore2 > avgScore1 && avgScore2 >= 2 * avgScore1) {
    return console.log(`Koalas win (${avgScore2} vs. ${avgScore1})`);
  } else {
    return console.log(`No team wins...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
