// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(array) {
  let i = 0;
  function helper(array) {
    if (Array.isArray(array) && i === array.length - 1) return [];
    let newArray = [];
    newArray.concat(helper(array[i] || array));

    console.log(newArray);
  }
  helper(array);
  return newArray;
  // add whatever parameters you deem necessary - good luck!
  //   for (let i = 0; i < array.length; i++) {
}

console.log(flatten([1, 2, 3, [4, 5]]));
