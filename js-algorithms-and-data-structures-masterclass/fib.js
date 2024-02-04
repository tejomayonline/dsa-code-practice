// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 1 + 1;
// 2;
// 3;

function fib(n) {
  // add whatever parameters you deem necessary - good luck!

  function helper(no1, no2, k) {
    if (k === 0) return no2;
    return helper(no2, no1 + no2, k - 1);
  }

  return helper(1, 1, n - 2);
}

console.log(fib(28));
// 3 1,1,2,3,5,8, 13,21,34,55,89

// helper(1,1,2)

//   helper(1, 2, 1)
//          helper(2, 3, 0)
//                     2 + helper(3, 5, 0)
//                             3 +
