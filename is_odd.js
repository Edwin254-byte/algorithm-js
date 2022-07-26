"use strict";
//get input
let n = prompt("Enter number to check if it's odd");
n = +n;
//validate input
const isValid = n < 0 || !Number.isFinite(n) || n % 1 !== 0 ? false : true;
//displaying errors
if (!Number.isFinite(n)) {
  alert("Input must be a number");
} else if (n < 0) {
  alert("Input must be greater than 0 (1st odd number is 1)");
} else if (n % 1 !== 0) {
  alert("Input must be an integer value");
}

//operation
if (isValid) {
  const odd = (n) =>
    n < 0
      ? console.log("Not an odd Number")
      : n === 1
      ? console.log("An odd number")
      : odd(n - 2);
  odd(n);
}
