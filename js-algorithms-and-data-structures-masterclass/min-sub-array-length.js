function minSubArrayLen(arr, sum) {
  const arrayResponse = arr.filter((item) => item >= sum);
  if (arrayResponse.length) {
    return arrayResponse.length;
  }
  for (let i = 2; i < arr.length - 1; i++) {
    let arrayResponse = _helper(arr, i, sum);
    if (arrayResponse) {
      return i;
    }
  }
  return 0;
}

function _helper(arr, n, targetSum) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  for (let j = 0; j < arr.length - 1; j++) {
    sum = sum - arr[j] + arr[j + n];
    if (targetSum <= sum) {
      return true;
    }
  }
  return false;
}

// console.log(_helper([2, 3, 1, 2, 4, 3], 3, 10));
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
