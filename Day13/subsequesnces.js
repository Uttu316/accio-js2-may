const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", (input) => {
  comb(input);
  rl.close();
});
function comb(str, ans = "") {
  if (str === "") {
    process.stdout.write(ans + " ");
    return;
  }

  const curr = str[0];

  comb(str.substr(1), ans + curr);
  comb(str.substr(1), ans);
}
