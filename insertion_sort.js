"use strict";
function sortArray(unsortedArr) {
  const arr = unsortedArr;
  for (let i = 1; i < arr.length; i++) {
    let hole = i;
    let curValue = arr[i];
    //shifting
    while (hole > 0 && arr[hole - 1] > curValue) {
      arr[hole] = arr[hole - 1];
      hole--;
    }
    arr[hole] = curValue;
  }
  return arr;
}

// const unsortedArr = [23, 1, 43, 2, 9, 4];
// console.log(unsortedArr);
// console.log(sortArray(unsortedArr));
const demo = [69, 86, 86, 76, 91, 94];
sortArray(demo);
