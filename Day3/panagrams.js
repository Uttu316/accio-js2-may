// your code here
var readline = require("readline").createInterface(process.stdin);

let inputArr = [];
var lineNumber = -1;
var inputSize;
var K;
readline.on("line", readInputs);

function readInputs(line) {
  inputArr.push(line);
  lineNumber++;

  if (lineNumber == 0) {
    logic("s");
    readline.close();
  }
}

function logic(input) {
  const str = inputArr[0];
  console.log(isPangram(str));
}

function isPangram(s) {
  s = s.toLowerCase();
  let buckets = new Array(26);
  buckets = buckets.fill(false);

  //loop by every character
  for (let ch of s) {
    if (ch >= "a" && ch <= "z") {
      const code = ch.charCodeAt();
      const pos = code - 97;
      buckets[pos] = true;
    }
  }

  let isPanagram = true;
  for (let item of buckets) {
    if (!item) {
      isPanagram = false;
      break;
    }
  }

  if (isPanagram) {
    return "pangram";
  } else {
    return "not pangram";
  }
}
