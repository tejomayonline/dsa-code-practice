let arr = [29, 14, 3, 24, 35, 40, 4, 3, 5];

function mergeSort(arr) {
  //  find mid
  // split array to one item
  // recursively sort left
  // recursively sort right
  // merge left and right
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  console.log(mid);
  let left = mergeSort(arr.slice(0, mid));

  let right = mergeSort(arr.slice(mid));

  return mergeSortedArrays(left, right);
}

// [4,9, 15]
// [1,3,5, 8 , 12]

function mergeSortedArrays(arr1, arr2) {
  let arr1Current = 0;
  let arr2Current = 0;
  let resultArr = [];
  while (arr1Current + arr2Current < arr1.length + arr2.length) {
    if (arr1[arr1Current] > arr2[arr2Current]) {
      if (!arr2[arr2Current]) {
        break;
      }
      resultArr.push(arr2[arr2Current]);
      arr2Current++;
    } else {
      if (!arr1[arr1Current]) {
        break;
      }
      resultArr.push(arr1[arr1Current]);
      arr1Current++;
    }
  }
  resultArr = resultArr.concat(
    arr1.slice(arr1Current).concat(arr2.slice(arr2Current))
  );
  return resultArr;
}

// console.log(mergeSortedArrays([4, 9, 15], [1, 3, 5, 8, 12]));
// console.log(mergeSortedArrays([21, 31], [76]));
console.log(mergeSort([1, 12, 5, 6, 45]));
