const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let obj = {};
function perm(str, ans = "") {
  if (str === "") {
    if (obj[ans]) {
      return;
    } else {
      obj[ans] = true;
      console.log(ans);
    }
    return;
  }

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    const rest = str.substring(0, i) + str.substring(i + 1);

    perm(rest, ans + curr);
  }
}

rl.on("line", (input) => {
  perm(input);
  rl.close();
});
