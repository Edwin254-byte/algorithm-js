"use strict";

/* // change program
let change = prompt("Enter change needed");
change = +change;
 */

//validating input
const isValid = (change) =>
  !Number.isFinite(change) || change <= 0 || change >= 1000 || change % 1 !== 0
    ? false
    : true;

//Displaying error messages to user
function displayErrorMsg(change) {
  if (!Number.isFinite(change)) {
    alert("Input must be a number");
  } else if (change % 1 !== 0) {
    alert("input must be an integer");
  } else if (change <= 0) {
    alert("Change must be greater than 0");
  } else if (change >= 1000) {
    alert("change cannot be greater than or equal to 1000");
  }
}

//operation
function processChange(change) {
  console.log(`YOUR CHANGE (${change}) IS AS FOLLOWS:`);
  const currencies = [500, 200, 100, 50, 20, 10, 5, 1];
  const output = [];
  let i = 0;
  while (change) {
    if (change >= currencies[i]) {
      output[i] = Math.floor(change / currencies[i]);
      change = change % currencies[i];
    } else {
      output[i] = 0;
    }
    i++;
  }

  //displaying the results
  console.log("number of coin X currency");
  output.forEach((val, i) =>
    val !== 0 ? console.log(`${val} x ${currencies[i]} sh`) : ""
  );
}

export { isValid, processChange, displayErrorMsg };
