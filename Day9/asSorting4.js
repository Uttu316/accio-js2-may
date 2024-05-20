const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let n = parseInt(input[0]);
  let arr = input[1].split(" ").map(Number);
  let l = parseInt(input[2]);

  let ans = sorting4(arr, n, l);
  console.log(ans);
});

function compare(a, b) {
  return a - b;
}
function sorting4(arr, n, l) {
  arr.sort(compare);

  let ans = 0;

  for (let i = 0; i < n - 2; i++) {
    let s = arr[i];

    for (let j = i + 2; j < n; j++) {
      let e = arr[j];

      if (e - s <= l) {
        ans += j - i - 1;
      }
    }
  }
  return ans;
}
