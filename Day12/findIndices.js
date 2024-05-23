const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (input) => {
  const inputs = input.split(" ");
  const n = parseInt(inputs[0]);
  const x = parseInt(inputs[1]);
  readline.question("", (arrayInput) => {
    const arr = arrayInput.split(" ").map(Number);
    find(arr, n, x);
    readline.close();
  });
});

function find(arr, n, x, i = 0) {
  if (i == n) {
    return;
  }

  const el = arr[i];
  if (el == x) {
    process.stdout.write(i + " ");
  }

  find(arr, n, x, i + 1);
}
