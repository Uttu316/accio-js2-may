const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (s) => {
  console.log(MaximumFrequencyChar(s));
  readline.close();
});
function MaximumFrequencyChar(str) {
  let buckets = new Array(26).fill(0);

  for (let ch of str) {
    const ascii = ch.charCodeAt();
    const pos = ascii - 97;
    buckets[pos] += 1;
  }

  let max = buckets[0];
  let maxPos = 0;

  for (let i = 1; i < buckets.length; i++) {
    if (buckets[i] > max) {
      max = buckets[i];
      maxPos = i;
    }
  }

  const char = String.fromCharCode(maxPos + 97);

  return char;

  // let obj  = {}

  // for(let i of s){
  //     if(obj[i]){
  //         obj[i]+=1
  //     }else{
  //         obj[i]=1
  //     }
  // }

  // let maxChar = ""
  // let max = -Infinity

  // for(let key in obj){
  //      const value = obj[key]
  //     if(value>max ){
  //         max = value
  //          maxChar = key
  //     }
  //     if(max==value){
  //         if(maxChar>key){
  //             maxChar = key
  //         }
  //     }

  // }
  // return maxChar
}
