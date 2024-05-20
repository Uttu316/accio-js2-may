let arr = [1, 1, 2, 0, 1, 2, 0, 1];

let z = 0;
let o = 0;
let t = 0;

for (let v of arr) {
  if (v === 0) {
    z++;
  } else if (v === 1) {
    o++;
  } else {
    t++;
  }
}

let i = 0;

let k = 0;
for (let i = 0; i < z; i++) {
  arr[k] = 0;
  k++;
}
for (let i = 0; i < o; i++) {
  arr[k] = 1;
  k++;
}
for (let i = 0; i < t; i++) {
  arr[k] = 2;
  k++;
}
// function swap(arr,x,y){
//     let t = arr[x]
//     arr[x] = arr[y]
//     arr[y] = t
// }

// let b = 0
// let e = arr.length-1
// let c = 0

// while(c<=e){
//     if(arr[c]===0){
//         swap(arr,c,b)
//         b++
//         c++
//     }else if(arr[c]===2){
//         swap(arr,c,e)
//         e--
//     }else{
//         c++
//     }
// }
// console.log(arr)
