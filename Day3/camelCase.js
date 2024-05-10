const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;

rl.on("line", (line) => {
  if (!t) {
    t = parseInt(line);
    return;
  }
  console.log(camelCase(line));
  t--;
  if (t === 0) {
    rl.close();
  }
});

function camelCase(str) {
  let ans = "";
  let isUnderscore = false;
  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (chr === "_") {
      isUnderscore = true;
      continue;
    }
    if (isUnderscore === true) {
      ans += chr.toUpperCase();
    } else {
      ans += chr;
    }
    isUnderscore = false;
  }
  return ans;
}
