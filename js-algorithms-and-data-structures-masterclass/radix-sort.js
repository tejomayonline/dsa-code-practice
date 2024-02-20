// 12345, 0  = 5 => arr[4] => 4
// 12345, 1  = 4 => arr[3]

function getDigit(number, position) {
  const numberArr = (number + "").split("");
  return parseInt(numberArr[numberArr.length - 1 - position]) || 0;
}

// console.log(getDigit(12345, 0));

function getDigitCount(number) {
  return (number + "").length;
}

// console.log(getDigitCount(1235));

function mostDigitsCount(digits) {
  if (Array.isArray(digits)) {
    let maxDigitCount = 0;
    for (const num of digits) {
      let digitCount = getDigitCount(num);
      if (digitCount > maxDigitCount) {
        maxDigitCount = digitCount;
      }
    }
    return maxDigitCount;
  } else {
    return false;
  }
}

function radixSort(numbers) {
  if (Array.isArray(numbers)) {
    // find max digitCount = loop count
    const maxDigit = mostDigitsCount(numbers);

    for (let i = 0; i < maxDigit; i++) {
      const bucket = [[], [], [], [], [], [], [], [], [], []];
      numbers.forEach((num) => {
        const nthDigit = getDigit(num, i);
        bucket[nthDigit].push(num);
      });
      numbers = [].concat(...bucket);
      console.log(numbers);
    }
    //have 0-9 array - qStore
    // iterate through item position 0 to - digitCount
    // store number qStore Matching
    // pick them to numberList
    return numbers;
  } else {
    return false;
  }
}

// console.log(mostDigitsCount([12345, 23, 3, 38, 343434, 2112])); // number
console.log(radixSort([12345, 23, 3, 38, 343434, 2112])); // number
