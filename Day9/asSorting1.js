const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n, m] = input[0].split(" ").map(Number);
  let mat = [];
  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(" ").map(Number));
  }
  sortCol(mat, n, m);
});

function sort(arr, n, m) {
  let rows = arr.length;

  let cols = arr[0].length;

  for (let c = 0; c < cols; c++) {
    for (let i = 1; i < rows; i++) {
      let j = i - 1;
      const curr = arr[i][c];
      while (j >= 0 && curr < arr[j][c]) {
        arr[j + 1][c] = arr[j][c];
        j--;
      }
      arr[j + 1][c] = curr;
    }
  }

  return arr;
}

function sortCol(arr, n, m) {
  const sortArr = sort(arr, n, m);
  for (let i = 0; i < n; i++) {
    console.log(sortArr[i].join(" "));
  }
}
