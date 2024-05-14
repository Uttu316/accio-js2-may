const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (s) => {
  palindromeSubStrs(s);
  rl.close();
});
function palindromeSubStrs(str) {
  const s = new Set();
  const size = str.length;
  let arr = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(false);
    }
    arr.push(row);
  }
  for (let d = 0; d < size; d++) {
    for (let i = 0, j = d; j < size; i++, j++) {
      if (d === 0) {
        arr[i][j] = true;
      } else if (d == 1) {
        arr[i][j] = str[i] === str[j];
      } else {
        arr[i][j] = str[i] === str[j] && arr[i + 1][j - 1];
      }

      if (arr[i][j]) {
        s.add(str.substring(i, j + 1));
      }
    }
  }

  const ans = Array.from(s);
  for (let i of ans.sort()) {
    console.log(i);
  }
}
