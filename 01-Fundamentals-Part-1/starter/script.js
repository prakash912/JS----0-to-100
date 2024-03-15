// let name = "prakash";
// console.log(name);
// if (name === "prakash") alert(name);
// console.log(5 + 7);

// // Assignment-1

// let country = "India";
// let continent = "Uttar Pradesh";
// let population = 100;

// console.log(country);
// console.log(continent);
// console.log(population);

// let firstName = "prakash";
// console.log(firstName);
// console.log(typeof firstName);

// let count = 5;
// console.log(count);
// console.log(typeof count);

// let myNamePrakash = true;
// console.log(myNamePrakash);
// console.log(typeof myNamePrakash);

// let weather;
// console.log(weather);
// console.log(typeof weather);

// // it returns null type as object that is bug
// console.log(typeof null);

//let,var,const

// let myName = "prakash";
// myName = "ranjan";
// console.log(myName);

// const myCity = "Ghazipur";
// myCity = "Lucknow";

// const herName;

// var myBirthDay = "Tuesday";
// myBirthDay = "Wednesday";
// console.log(myBirthDay);

//operators  --> 13

// const currentYear = 2024;
// const myAge = currentYear - 1997;
// const mySisAge = currentYear - 1996;
// console.log(myAge, mySisAge);
// console.log(myAge ** 2);

// const firstName = "Radha";
// const lastname = "Krishna";

// console.log(firstName + " " + lastname);

// let x = 10;
// x = x * 2;
// console.log(x);
// x++;
// console.log(x);

// console.log(myAge < mySisAge);
// console.log(currentYear - 1997 > currentYear - 1996);

// const avgAge = (myAge + mySisAge) / 2;
// console.log(avgAge);

/* Write your code below. Good luck! 🙂 */

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// let firstNameMine = "prakash";
// let sentence = "my name is" + " " + firstNameMine + " ";
// console.log(sentence);

// // use template litrals
// let litSentence = `my name is ${firstNameMine} .`;
// console.log(litSentence);

//Challange --> 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log("Mark's BMI:", BMIMark, "John's BMI:", BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// type conversion
// const inputYear = "1997";
// console.log(inputYear + 5);
// console.log(Number(inputYear) + 5);
// console.log(Number("prakash"));
// console.log(typeof Number("prakash"));

// // type coersion
// console.log("5" + 5);
// console.log(5 - "2");

// truthy and falsy value

// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean("prakash"));
// console.log(Boolean({}));
// console.log(Boolean(NaN));

// const money = 0;
// if (money) {
//   console.log("you ca spend");
// } else {
//   console.log("paisa kamao");
// }

// = , == , ===

// let age = "26";
// if (age == 26) {
//   console.log("your age is 26 : loose");
// } else {
//   console.log("your age wrong : loose");
// }

// let ageLast = "26";
// if (ageLast === 26) {
//   console.log("your age is 26 : tight");
// } else {
//   console.log("your age wrong : tight");
// }

// let intputValue = Number(prompt("enter the no to check"));
// if (intputValue === 9) {
//   console.log("no is 9");
// } else if (intputValue == 5) {
//   console.log("no is 5");
// } else {
//   console.log("nor 9 nor 5");
// }

// challange 3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
