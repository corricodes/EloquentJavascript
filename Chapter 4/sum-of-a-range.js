function range (start, end, step) {
  var arr = [];
  if (step === undefined) {
    step = 1;
  }
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

function sum (arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sum(range(1, 10)));

console.log(range(5, 2, -1));