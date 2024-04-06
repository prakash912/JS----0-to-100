'use strict';

let bookings = [];

const addBooking = function (seat, passenger = 1, price = 99) {
  const booking = {
    seat,
    passenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
addBooking(5);
addBooking(5, 55);

const flight = 'LS121';
const passenger = {
  name: 'Rahul',
  passNo: 122333,
};

const checkIn = (flightNo, passengerData) => {
  flightNo = 'PRR123';
  passengerData.name = 'Prakash';
};

checkIn(flight, passenger);
console.log(flight);
console.log(passenger);
