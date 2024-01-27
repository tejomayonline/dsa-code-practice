// Custom sorting program in JS via Bubble Sort ?

const input = [10, 5, 20, 58, 5, 13];

function sortNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  return input;
}

console.log(sortNumbers(input));
