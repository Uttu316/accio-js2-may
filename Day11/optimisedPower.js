const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const [X, N] = input.split(" ").map(Number);
  console.log(power(X, N));
  rl.close();
});

function power(n, m) {
  if (m == 0) {
    return 1;
  }
  const ans = power(n, Math.floor(m / 2));
  if (m % 2 == 0) {
    return ans * ans;
  } else {
    return ans * ans * n;
  }
}
