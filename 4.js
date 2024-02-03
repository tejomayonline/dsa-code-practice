// Write a program to prints factorial of any number ?

// 5; // 5.4.3.2.1
// 4; //4.3.2.1

function factorial(number) {
  //   if (isNaN(number)) {
  //     return false;
  //   }
  //   if (!factorialResult) {
  var factorialResult = 1;
  //   }

  // //   let factor = number;
  //   let factorialResult = 1;
  while (number !== 1) {
    factorialResult *= number;
    number--;
  }
  return factorialResult;
}

console.log(factorial(5));
