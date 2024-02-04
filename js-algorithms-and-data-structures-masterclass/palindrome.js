// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
// 9999;
function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = str.length - 1;
  let mid = Math.floor((start + end) / 2);
  function helper(start1, end1) {
    if (start1 === end1 || start1 === mid) {
      return true;
    }
    if (str[start1] === str[end1]) {
      return helper(start1 + 1, end1 - 1);
    }
  }

  return helper(start, end) || false;
}

console.log(isPalindrome("99")); // true
