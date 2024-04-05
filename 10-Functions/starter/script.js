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
