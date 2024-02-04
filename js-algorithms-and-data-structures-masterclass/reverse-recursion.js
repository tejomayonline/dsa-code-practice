function reverse(str) {
  let lastIndex = str.length - 1;
  function helper(n) {
    if (n < 0) return "";
    return str[n] + helper(n - 1);
  }
  return helper(lastIndex);
  // add whatever parameters you deem necessary - good luck!
}

console.log(reverse("awesome")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
