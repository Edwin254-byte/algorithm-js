"use strict";
//input number
let n = prompt("Enter numerical number");
n = +n;

//validating input
const isValid = n < 1 || !Number.isFinite(n) || n % 1 !== 0 ? false : true;
//displaying error messages
if (!Number.isFinite(n)) {
  alert("Input must be a Number");
} else if (n % 1 !== 0) {
  alert("Input must be an integer");
} else if (n < 1) {
  alert("Input Must be greater than 0");
}
//operation
if (isValid) {
  const odd = (n) => (n === 1 ? n : odd(n - 1) + 2);
  console.log(`Odd number at position ${n} is: ${odd(n)}`);
}
