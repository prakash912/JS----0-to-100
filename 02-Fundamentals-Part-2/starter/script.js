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

// const calcAgeRetire = (birthyear, firstName) => {
//   const age = 2024 - birthyear;
//   const retire = 65 - age;
//   return `${firstName} retire in ${retire}`;
// };

// console.log(calcAgeRetire(1996, "prakash"));

// const cutFruit = (fruit) => {
//   return fruit * 4;
// };

// const fruitMaker = (apples, orange) => {
//   const applePiece = cutFruit(apples);
//   const orangePiece = cutFruit(orange);
//   return `Juice make by ${applePiece} pices of apple and orange ${orangePiece} pices`;
// };

// console.log(fruitMaker(4, 5));

//coding exercise --5

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(44, 23, 71);

// const checkWinner = (avgScore1, avgScore2) => {
//   if (avgScore1 > avgScore2 && avgScore1 >= 2 * avgScore2) {
//     return console.log(`Dolphins win (${avgScore1} vs. ${avgScore2})`);
//   } else if (avgScore2 > avgScore1 && avgScore2 >= 2 * avgScore1) {
//     return console.log(`Koalas win (${avgScore2} vs. ${avgScore1})`);
//   } else {
//     return console.log(`No team wins...`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);

// Array

// const friends = ["prakash", "ranjan", "rai"];

// friends[2] = "ram";
// const calcAgeNew = (birthyear) => {
//   return 2024 - birthyear;
// };
// const agesForCheck = [calcAgeNew(1996), "prakash", friends];
// console.log(agesForCheck);

// coding exercise -6

// const calcTip = (billVal) => {
//   if (billVal >= 50 && billVal <= 300) {
//     return (billVal * 15) / 100;
//   } else {
//     return (billVal * 20) / 100;
//   }
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Objects

// const collectAllData = {
//   firstName: "prakash",
//   lastName: "rai",
//   city: "Ghazipur",
//   birthYear: 1997,
//   friends: ["viviek", "rai", "ram"],
//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummery: function () {
//     return `${this.firstName} whic has age of ${this.calcAge()}`;
//   },
// };

// console.log(collectAllData);

// console.log(
//   `Jonas first name is ${collectAllData.firstName} and he has ${collectAllData.friends.length} and his best friend is ${collectAllData.friends[0]}`
// );

// collectAllData.villageName = "Revatipur";
// collectAllData["mobNo"] = 9120000709;

// console.log(collectAllData.calcAge());
// console.log(collectAllData.getSummery());

// //coding exercise - 7

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBMI()})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBMI()})!`
//   );
// }

// // for Loop

// for (let i = 0; i <= 10; i++) {
//   console.log(`Lifting weight for ${i}`);
// }

// use of for loop

const jonas = ["prakash", "rai", 2024, true, ["shivam", "suhani", "anand"]];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// backword loops

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(`${i} ${jonas[i]}`);
// }

// // nested loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Exercise ${exercise} ------------`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} : Make ${rep} rep`);
//   }
// }

//while loop

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a dice ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

//coding exercise --8

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

calcAverage(totals);
