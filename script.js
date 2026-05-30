"use strict";

function calc(birthyear) {
  return 2026 - birthyear;
}

const years = [1991, 1890, 1999, 2000, 2002, 2004, 2020];

const age1 = calc(years[0]);
const age2 = calc(years[1]);
const age3 = calc(years[2]);
const age4 = calc(years[3]);
const age5 = calc(years[4]);
const age6 = calc(years[5]);
const age7 = calc(years[years.length - 1]);

console.log(age1, age2, age3, age4, age5, age6, age7);

// Putting the back into an array as expression, to get the calculated value as the result.

// Ages 35 136 27 26 24 22 6
const ages = [
  calc(years[0]),
  calc(years[1]),
  calc(years[2]),
  calc(years[3]),
  calc(years[4]),
  calc(years[5]),
  calc(years[years.length - 1]),
];

console.log(ages);

// Mutate the last index of years array from 2020 to 2025

years[years.length - 1] = 2025;

console.log(years);

let message;

if ((age1) => 40) {
  message = "You are in your mid age";
} else {
  message = "You're not yet in your mid age";
}

console.log(message);
