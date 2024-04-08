'use strict';

// let bookings = [];

// const addBooking = function (seat, passenger = 1, price = 99) {
//   const booking = {
//     seat,
//     passenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// addBooking(5);
// addBooking(5, 55);

// const flight = 'LS121';
// const passenger = {
//   name: 'Rahul',
//   passNo: 122333,
// };

// const checkIn = (flightNo, passengerData) => {
//   flightNo = 'PRR123';
//   passengerData.name = 'Prakash';
// };

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// const oneWord = str => {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = str => {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// const transformer = (str, fn) => {
//   console.log(`Orignal String: ${str}`);
//   console.log(`Transformed Strign: ${fn(str)}`);
//   console.log(`Transformed by ${fn.name}`);
// };

// transformer('Javascript is backbone', oneWord);
// transformer('Javascript is backbone', upperFirstWord);

// const high5 = function () {
//   console.log('prakash try his best to improve in each and every field');
// };

// document.body.addEventListener('click', high5);
// ['prAKASH', 'RANJAN', 'rai'].forEach(high5);

// function return function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet('Namaste')('Prakash G');

//write same function by using Arrow

// const greet = greeting => name =>
//   console.log(`${greeting} ${name} by Arrow function`);

// greet('Namaste')('Prakash G');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

book.call(swiss, 9120, 'xoxo');

const flightData = [99, 'hello'];
book.apply(swiss, flightData);
