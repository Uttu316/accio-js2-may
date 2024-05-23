const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let A = input[1].split(" ").map(Number);
  let T = Number(input[2]);
  console.log(find(A, T, 0));
});
function find(arr, t, i, pos = -1) {
  if (i == arr.length) {
    return pos;
  }

  const el = arr[i];
  if (el == t && pos === -1) {
    pos = i;
  }

  return find(arr, t, i + 1, pos);
}
