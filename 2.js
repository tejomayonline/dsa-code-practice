// Write a program to check if a string or word or number is palindrome ?

// madam
// racecar
// 12321

function isPalindrome(input) {
  // string should not have even characters
  if (typeof input === "string" && input.length % 2 === 0) {
    return false;
  }

  let [part1, part2] = input.split(input[Math.floor(input.length / 2)]);
  console.log(part1, part2, part1.split(""));

  part1Arr = part1.split("");
  part2Arr = part2.split("");

  if (part1Arr.length !== part2Arr.length) {
    return false;
  }

  const charCount1 = getCharCountFromArray(part1Arr);
  const charCount2 = getCharCountFromArray(part2Arr);

  return compareObjects(charCount1, charCount2);
}

function getCharCountFromArray(array) {
  let objCounter = {};
  array.forEach((item) => {
    if (!objCounter[item]) {
      objCounter[item] = 1;
    } else {
      objCounter[item]++;
    }
  });
  return objCounter;
}

function compareObjects(obj1, obj2) {
  for (let charCount in obj1) {
    if (obj1[charCount] !== obj2[charCount]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("maam"));
