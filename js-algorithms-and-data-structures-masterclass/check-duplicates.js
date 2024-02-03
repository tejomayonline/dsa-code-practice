const areThereDuplicates = (...args) => {
  let uniqueElements = new Set(args);

  if (uniqueElements.size !== args.length) {
    return true;
  }
  return false;
};

let result = areThereDuplicates(1, 2, 3); // false

areThereDuplicates(1, 2, 2); // true
result = areThereDuplicates("a", "b", "c", "a"); // true
console.log(result);
