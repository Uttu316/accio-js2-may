const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    arr = input.split(" ").map(Number);
    console.log(maximum_occurrence(arr, n));
    rl.close();
  }
});

function maximum_occurrence(arr, n) {
  let obj = {};

  for (let num of arr) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  }
  // console.log(obj)

  let max = -Infinity;
  let maxPos = -1;
  for (let key in obj) {
    const value = obj[key];
    if (value > max) {
      max = value;
      maxPos = key;
    }
  }

  return maxPos;
}
