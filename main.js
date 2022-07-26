"use strict";
//////////////Change algorithm/////////////////////
import * as Change from "./change.js";
/*
let change = prompt("Enter change needed");
change = +change;

if (Change.isValid(change)) {
    Change.processChange(change);
} else {
    Change.displayErrorMsg(change);
}
*/

///////////LCM BRUTE FORCE ALGORITHM USING LCM///////////////
import LCM from "./brute_force_lcm.js";
// LCM();

//////////////PRIME NUMBER ALGORITHM USING BRUTE FORCE//////////////
import * as Prime from "./brute_force_prime.js";

/////1. check if a number is prime or not
let number = prompt("Enter number to check");
number = +number;
if (Prime.Validate(number))
  console.log(
    Prime.checkPrime(number)
      ? `${number} is a prime number`
      : `${number} is Not a prime number`
  );
else Prime.displayErrorMsg(number);

////2. display prime numbers from a given range
/* let min = prompt("Enter lower bound limit starting from 1 ");
min = +min;
let max = prompt("Enter upper bound limit");
max = +max;
const primeNumbers = Prime.findPrimeNumbers(min, max);
console.log(primeNumbers ? primeNumbers : "Something went wrong");
 */
/////////////////////MATCH PATTERN ALGORITHM  USING BRUTEFORCE/////////////////
import searchPattern from "./brute_force_pattern.js";
//searchPattern();

//////////////////////COMPUTING GCD USING EUCLID ALGORITHM////////////////////
import getGCD from "./euclid.js";
/* const num1 = prompt("Enter 1st number");
const num2 = prompt("Enter 2nd number");
const gcd = getGCD(+num1, +num2);
gcd
  ? console.log(`GCD of ${num1} and ${num2} is ${gcd}`)
  : console.error("Something went wrong");
 */
