let arr = [29, 14, 3, 24, 35, 40];

function bubbleSort(arr) {
  //  compare with next el
  // if 2nd element is smaller swap => bubble up larger value
  // continue this iteration till there is no swap

  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
