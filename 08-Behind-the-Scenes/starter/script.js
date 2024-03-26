'use strict';

// Scoping in Practice

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// console.log(age);
// printAge();

// console.log(x);
// console.log(y);
// console.log(z);

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);

// console.log(add(3, 7));
// // console.log(addEx(3, 7));

// function add(a, b) {
//   return a + b;
// }

// const addEx = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

// console.log(this);

// function add() {
//   console.log(this);
// }

// const addArrow = () => {
//   console.log(this);
// };

// add();
// addArrow();

// const jonas = {
//   year: 2017,
//   calcAge: function () {
//     const calcAgeArrow = () => {
//       console.log(this.year, 'this');
//       return 2050 - this.year;
//     };
//     return calcAgeArrow();
//   },
// };
// console.log(jonas.calcAge());
// console.log(jonas.calcAgeArrow());

// const mili = {
//   year: 2022,
// };
// console.log(jonas.calcAge());

// const mili = {
//   year: 2022,
// };

// mili.calcAge = jonas.calcAge;

// console.log(mili.calcAge(), 'mili');
// mili.calcAge = jonas.calcAge;

// console.log(mili.calcAge(), 'mili');
// console.log(jonas.calcAge());

// const mili = {
//   year: 2022,
// };

// mili.calcAge = jonas.calcAge;

// console.log(mili.calcAge(), 'mili');

//premitive type

let age = 30;
let oldAge = age;
age = 50;

console.log(age, 'age');
console.log(oldAge, 'oldAge');

//refrence type
const me = {
  firstname: 'prakash',
};

const friend = me;
friend.firstname = 'rai';

console.log('me', me);
console.log(friend, 'friend');
