let arr = [29, 14, 3, 24, 35, 40, 4, 3, 5];

function mergeSort(arr) {
  // split them into single elements
  // merge two sorted arrays
  // do it till total elements of the array are same
  let newSortedArrayList = [];
  let i = 0;
  while (arr.length != 0) {
    newSortedArrayList[i] = [arr.pop()];
    i++;
  }

  //   console.log(newSortedArrayList);
  //   5;
  let tempArray;
  for (let j = 0; j < newSortedArrayList.length - 1; j++) {
    // console.log(newSortedArrayList[j], j);
    if (j === 0) {
      tempArray = mergeSortedArrays(
        newSortedArrayList[j],
        newSortedArrayList[j + 1]
      );
    } else {
      tempArray = mergeSortedArrays(tempArray, newSortedArrayList[j + 1]);
    }
    // console.log(tempArray);
  }

  //   console.log(tempArray);
  return tempArray;
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
console.log(
  mergeSort([1, 12, 5, 6, 45, 34, 76, 21, 31, 10, 4, 8, 237, 82, 37, 4705, 57])
);
