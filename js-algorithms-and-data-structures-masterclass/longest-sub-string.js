function findLongestSubstring(string) {
  //  loop 1st i
  // loop 2nd
  // store chars in an array each time
  // duplicate ? stop and store the char count
  // goto next i

  let maxDistSubStrLen = 0;

  //   for (let i = 0; i < string.length; i++) {
  // if (string.length - i < maxDistSubStrLen) {
  //   break;
  // }
  let tempSubArray = [];
  for (let j = 0; j < string.length; j++) {
    if (tempSubArray.indexOf(string[j]) === -1) {
      tempSubArray.push(string[j]);
    }
  }

  maxDistSubStrLen = tempSubArray.length;

  tempSubArray = [];
  for (let i = 0; i < string.length; i++) {
    if (tempSubArray.indexOf(string[i]) === -1) {
      tempSubArray.push(string[i]);
    }
  }
}

function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      console.log({
        start,
        seen,
        max: Math.max(start, seen[char]),
      });
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log({ start, seen, longest });
  }
  return longest;
}
// findLongestSubstring('') // 0
// console.log(findLongestSubstring2("rithmschool")); // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring3(str) {
  let start = 0; // Start of the sliding window
  let maxLength = 0; // Maximum length of substring found so far
  let charIndexMap = {}; // Map to store the last index of each character

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    console.log(charIndexMap[char], start);
    if (charIndexMap[char] >= start) {
      // If character is found within the current window, move the start
      start = charIndexMap[char] + 1;
    }
    // Update the last index of the character
    charIndexMap[char] = i;
    // Calculate the length of the current substring and update maxLength if needed
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

// Example usage:
// console.log(findLongestSubstring3("")); // 0
console.log(findLongestSubstring3("rithmschool")); // 7
//   console.log(findLongestSubstring('thisisawesome')); // 6
//   console.log(findLongestSubstring('thecatinthehat')); // 7
//   console.log(findLongestSubstring('bbbbbb')); // 1
//   console.log(findLongestSubstring('longestsubstring')); // 8
//   console.log(findLongestSubstring('thisishowwedoit')); // 6
