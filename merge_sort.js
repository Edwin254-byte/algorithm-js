"use strict";

function merge(leftArray, rightArray) {
  const mainArray = [];

  let i = 0; // leftArray counter
  let j = 0; // rightArray counter
  let k = 0; // mainArray counter

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      mainArray[k] = leftArray[i];
      i++;
    } else {
      mainArray[k] = rightArray[j];
      j++;
    }

    k++;
  }

  //handling remainder of the list elements
  while (i < leftArray.length) {
    mainArray[k] = leftArray[i];
    i++;
    k++;
  }
  while (j < rightArray.length) {
    mainArray[k] = rightArray[j];
    j++;
    k++;
  }

  return mainArray;
}

function mergeSortAlg(arr) {
  let mergeArr = [];
  const n = arr.length;
  if (n < 2) return;
  let mid;
  if (n % 2 === 0) mid = n / 2;
  else mid = Math.trunc(n / 2);
  const leftArray = [];
  const rightArray = [];
  const leftArrLength = mid;
  const rightArrLength = n - mid;

  let k = 0; // arr counter

  for (let i = 0; i < leftArrLength; i++) {
    leftArray[i] = arr[k];
    k++;
  }
  for (let j = 0; j < rightArrLength; j++) {
    rightArray[j] = arr[k];
    k++;
  }
  mergeSortAlg(leftArray);
  mergeSortAlg(rightArray);
  
  return merge(leftArray, rightArray);
}

const test = [23, 12, 3];
console.log(mergeSortAlg(test));
// console.log(merge([6, 7, 8, 9], [1, 2, 3, 5]));
