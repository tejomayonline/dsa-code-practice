// SAMPLE INPUT / OUTPUT

// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
  // if (array.length ==)
  let i = 0;
  function helper(index) {
    if (array.length === index) return false;
    if (callback(array[index]) === true) return true;
    return helper(index + 1);
  }
  return helper(i);
  // add whatever parameters you deem necessary - good luck!
}

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([2, 2, 4, 5], (val) => val > 10)); // true
