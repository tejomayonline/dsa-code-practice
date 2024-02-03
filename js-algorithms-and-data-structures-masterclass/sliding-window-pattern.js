// 10

function maxSubArraySum(array, n) {
  // set maxValue to array of index 0
  let maxValue = array[0];

  for (let i = 0; i < array.length - n + 1; i++) {
    // run a for loop to array length
    let tempSum = 0;
    // sum of nth element
    for (let j = i; j < i + n; j++) {
      tempSum += array[j];
    }
    if (tempSum > maxValue) {
      maxValue = tempSum;
    }
    console.log({ tempSum, maxValue });
    // set it maxValue
    // compare next iteration
    // if sum > maxValue
    // maxValue = sum
    // counter++  for both
  }
  console.log(maxValue);
}
// maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17

function maxSubArraySum2(array, n) {
  // store maxSum in a
  // loop to n and store sumItem
  // loop goto next item add to SumItem, subtract to its 1st element
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum += array[i];
  }
  maxSum = currentSum;

  for (let j = 0; j < n; j++) {
    currentSum = currentSum - array[j] + array[j + n];
    console.log({ currentSum, j: array[j], jn: array[j + n] });
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  console.log(maxSum);
}

maxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 4); // 17
