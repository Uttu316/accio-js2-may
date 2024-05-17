var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;

readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 1) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  let Arr = inputArr[1].split(" ").map((x) => parseInt(x));

  console.log(smallestGreaterElements(Arr).join(" "));
}

function smallestGreaterElements(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    let min = Infinity;
    let minValue = -10000000;
    for (let j = 0; j < arr.length; j++) {
      const next = arr[j];
      if (next > curr) {
        const diff = next - curr;
        if (diff < min) {
          min = diff;
          minValue = next;
        }
      }
    }
    ans.push(minValue);
  }
  return ans;
}
