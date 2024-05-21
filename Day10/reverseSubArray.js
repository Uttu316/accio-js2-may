const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (N) => {
  rl.on("line", (a) => {
    const arr = a.split(" ").map(Number);
    const result = isSorted(arr, N);
    console.log(result);
    rl.close();
  });
});

function isSorted(arr, n) {
  let s = -1;

  //Step1: find start position
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      s = i;
      break;
    }
  }

  //   console.log(s)
  if (s === -1) {
    return "Yes";
  }

  let e = -1;

  //find end position
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < arr[i - 1]) {
      e = i;
      break;
    }
  }

  //   console.log(e)

  //the sub array should be decreasing order
  let isDecreasing = true;
  for (let i = s; i < e; i++) {
    if (arr[i] < arr[i + 1]) {
      isDecreasing = false;
      break;
    }
  }

  //   console.log(isDecreasing)
  if (!isDecreasing) {
    return "No";
  }

  // starting pos element has to bigger than the end+1 element
  if (arr[s] > arr[e + 1]) {
    return "No";
  }

  if (arr[e] < arr[s - 1]) {
    return "No";
  }

  return "Yes";
}
