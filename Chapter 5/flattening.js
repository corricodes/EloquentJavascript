let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

console.log(flatten(arrays));