const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let minPos = i;
    let min = arr[i];

    for (let j = i; j < n; j++) {
      const curr = arr[j];

      if (curr < min) {
        min = curr;
        minPos = j;
      }
    }
    swap(arr, i, minPos);
  }
  return arr;
}

function swap(arr, x, y) {
  let tem = arr[x];
  arr[x] = arr[y];
  arr[y] = tem;
}

readline.question("", (n) => {
  readline.question("", (arr) => {
    arr = arr.split(" ").map(Number);
    let ans = selectionSort(arr);
    console.log(ans.join(" "));
    readline.close();
  });
});
