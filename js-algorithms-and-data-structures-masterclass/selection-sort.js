let arr = [29, 14, 3, 24, 35, 40, 4, 3, 5];

function selectionSort(arr) {
  //  compare with next el
  // if 2nd element is smaller swap => bubble up larger value
  // continue this iteration till there is no swap

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        min = arr[j];
        minIndex = j;
      }

      if (j === arr.length - 1) {
        temp = arr[i];
        arr[i] = min;
        arr[minIndex] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort(arr));
