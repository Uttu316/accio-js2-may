const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (n) => {
  let triangle = pascalTriangle(parseInt(n));
  for (let i = 0; i < triangle.length; i++) {
    console.log(triangle[i].join(" "));
  }
  readline.close();
});

function pascalTriangle(numRows) {
  let ans = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        row.push(1);
      } else {
        const curr = ans[i - 1][j - 1] + ans[i - 1][j];
        row.push(curr);
      }
    }
    ans.push(row);
  }
  return ans;
}
