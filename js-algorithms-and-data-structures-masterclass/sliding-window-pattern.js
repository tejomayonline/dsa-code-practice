// 10

function maxSubArraySum(array, n) {
  // set maxValue to array of index 0
  let maxValue = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    // run a for loop to array length
    let tempSum = 0;
    // sum of nth element
    for (let j = i; j < i + n; j++) {
      tempSum += array[j];
    }
    if (tempSum > maxValue) {
      maxValue = tempSum;
    }
    // set it maxValue
    // compare next iteration
    // if sum > maxValue
    // maxValue = sum
    // counter++  for both
  }
  console.log(maxValue);
}
maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 3);
