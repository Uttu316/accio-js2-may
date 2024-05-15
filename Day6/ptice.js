const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ptice(n, ans) {
  const adrino = "ABC";
  const bruno = "BABC";
  const goan = "CCAABB";
  let a = 0;
  let b = 0;
  let g = 0;
  for (let i = 0; i < ans.length; i++) {
    if (adrino[i % 3] === ans[i]) {
      a++;
    }
    if (bruno[i % 4] === ans[i]) {
      b++;
    }
    if (goan[i % 6] === ans[i]) {
      g++;
    }
  }
  let max = Math.max(a, b, g);
  console.log(max);
  if (max === a) {
    console.log("Adrian");
  }
  if (max === b) {
    console.log("Bruno");
  }
  if (max === g) {
    console.log("Goran");
  }
}

readline.question("", (n) => {
  readline.question("", (key) => {
    ptice(parseInt(n), key);
    readline.close();
  });
});
