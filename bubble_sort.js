let swapped = true;
function bubble_sort(arr) {
  for (let i = 0; i < arr.length && swapped; i++) {
    swapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
  }

  return arr;
}

let arr = [10, 2, 6, 1, 3];
console.log(arr);
console.log(bubble_sort(arr));
