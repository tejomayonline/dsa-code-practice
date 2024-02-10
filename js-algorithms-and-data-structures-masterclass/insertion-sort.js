let arr = [29, 14, 3, 24, 35, 40, 4, 3, 5];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i + 1 && j < arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      console.log(i, j, arr[i], arr[j], arr);
      //   console.log(arr);
    }
  }
  return arr;
}

console.log(insertionSort(arr));
