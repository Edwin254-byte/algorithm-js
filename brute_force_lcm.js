"use strict";
//get input
function getInput() {
  const input = prompt("Enter numbers separated by comma");
  return input.length !== 0 ? input.trim().split(",") : false;
}
function validateInput(numbers) {
  return numbers.every((num) => Number.isFinite(+num));
}

function getLCM(...numbers) {
  if (!validateInput(numbers)) return alert("Please enter only numbers");
  let numCheck = Math.max(...numbers);
  for (
    numCheck;
    numbers.some((num) => numCheck % num != 0) &&
    numCheck < Number.MAX_SAFE_INTEGER;
    numCheck++
  );
  return numCheck;
}

export default function findLcm() {
  const numbers = getInput();
  if (numbers) {
    const lcm = getLCM(...numbers);
    console.log(`The LCM of ${numbers.join(", ")} is ${lcm}`);
  } else alert("No number entered");
}
