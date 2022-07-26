"use strict";
function Validate(num) {
  return !Number.isFinite(num) || num > Number.MAX_SAFE_INTEGER || num % 1 !== 0
    ? false
    : true;
}
function displayErrorMsg(num) {
  if (!Number.isFinite(num)) {
    alert("Input must be a Number!!!");
  } else if (num > Number.MAX_SAFE_INTEGER) {
    alert("Number entered has reached the maximum integer My machine can Hold");
  } else if (num % 1 !== 0) {
    alert("Input must be a Whole Number");
  }
}
function computeGCD(x, y) {
  let a = x;
  let b = y;
  //ensure both a and b are  absolute values
  a = Math.abs(a);
  b = Math.abs(b);

  //ensure both numbers cannot be 0
  if (a === 0 && b === 0) return;

  //check if any number is 0 , return the other number as gcd
  if (a === 0) return b;
  if (b === 0) return a;
  //check if the numbers are equivalent, return one of them as gcd
  if (a === b) return a;

  //ensuring a is always greater than b
  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }

  let q; //quotient
  let r; //remainder
  while (b) {
    q = Math.trunc(a / b);
    r = a % b;
    a = b;
    b = r;
    if (b === 0) return a;
  }
}
function getGCD(num1, num2) {
  if (!Validate(num1)) return displayErrorMsg(num1);
  if (!Validate(num2)) return displayErrorMsg(num2);

  return computeGCD(num1, num2);
}

export default getGCD;
