function sameFrequency(num1, num2) {
  let str1 = num1 + "";
  let str2 = num2 + "";

  if (str1.length !== str2.length) {
    return false;
  }

  let str1CharCountMap = {};
  let str2CharCountMap = {};

  for (let s1 in str1) {
    str1CharCountMap[str1[s1]] = ++str1CharCountMap[str1[s1]] || 1;
  }
  for (let s2 in str2) {
    str2CharCountMap[str2[s2]] = ++str2CharCountMap[str2[s2]] || 1;
  }

  console.log({ str1CharCountMap, str2CharCountMap });

  for (char in str1CharCountMap) {
    if (str1CharCountMap[char] !== str2CharCountMap[char]) {
      return false;
    }
  }
  return true;

  // string length same check
  // create code to count counts of letter in a string1
  // create code to count counts of letter in a string2
  // loop through string1 countMap letter !==   string1 countMap letter false else continue
  // return true
}

console.log(sameFrequency(182, 281)); //true
// sameFrequency(184, 4811) false
