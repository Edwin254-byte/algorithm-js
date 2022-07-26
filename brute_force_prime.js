"use strict";
function Validate(num) {
  return !Number.isFinite(num) ||
    num <= 0 ||
    num > Number.MAX_SAFE_INTEGER ||
    num % 1 !== 0
    ? false
    : true;
}
function displayErrorMsg(num) {
  if (!Number.isFinite(num)) {
    alert("Input must be a Number!!!");
  } else if (num <= 0) {
    alert("Input must be greater than 0");
  } else if (num > Number.MAX_SAFE_INTEGER) {
    alert("Number entered has reached the maximum integer My machine can Hold");
  } else if (num % 1 !== 0) {
    alert("Input must be a Whole Number");
  }
}
////////////////////The brute force box////////////////////////
function checkPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num && isPrime == true; i++) isPrime = num % i != 0;

  return isPrime;
}

function findPrimeNumbers(min, max) {
  const primeNumbers = [];
  if (!Validate(max)) return displayErrorMsg(max);
  if (!Validate(min)) return displayErrorMsg(min);
  const range = Math.abs(max - min);
  for (let i = min; i <= range; i++) {
    checkPrime(i) ? primeNumbers.push(i) : "";
  }
  if (primeNumbers.length > 0) return primeNumbers.join(" ");
  return "No Prime Number Found";
}

export { Validate, displayErrorMsg, checkPrime, findPrimeNumbers };
