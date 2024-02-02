// countUniqueValues([1, 1, 2, 2, 4, 5, 14]); // 5

function countUniqueValues(values) {
  let start = 0;
  const arrayLength = values.length;
  let uniqueNumCount = 0;

  while (start < arrayLength) {
    if (values[start] !== values[start + 1]) {
      uniqueNumCount++;
    }
    start++;
  }
  return uniqueNumCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 4, 4, 4]));
