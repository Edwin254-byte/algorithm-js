function partition(arr, lowerBound, upperBound) {
  let pivot = arr[lowerBound];
  let start = lowerBound;
  let end = upperBound;
  while (start < end) {
    while (arr[start] <= pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    if (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }
  }
  let temp = arr[end];
  arr[end] = arr[lowerBound];
  arr[lowerBound] = temp;
  return end;
}

function quickSort(array, lowerBound, upperBound) {
  if (lowerBound < upperBound) {
    let location = partition(array, lowerBound, upperBound);
    quickSort(array, lowerBound, location - 1);
    quickSort(array, location + 1, upperBound);
  }

  return array;
}

const unsortedArr = [23, 1, 4, 12, 8, 5];
console.log(unsortedArr);
console.log();
console.log(quickSort(unsortedArr, 0, 5));
