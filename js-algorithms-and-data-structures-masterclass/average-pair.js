function averagePair(array, avg) {
  // total number from avg
  // check each element of array and subtract it from total number and check if its exists in the array
  // then found else false
  const totalSumFromAvg = avg * 2;

  for (let elm of array) {
    // console.log({ elm, totalSumFromAvg, dif: totalSumFromAvg - elm });
    if (binarySearch(array, totalSumFromAvg - elm) > -1) {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// averagePair([],4) // false

// [-1, 0, 3, 4, 5, 6], 4
function binarySearch(array, item) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log({ start, mid, end });
    if (array[mid] === item) {
      return mid;
    }
    if (array[mid] > item) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  //   console.log({ start, end });
  return -1;
}

// console.log(binarySearch([-1, 0, 3, 4, 5, 6], 4));
