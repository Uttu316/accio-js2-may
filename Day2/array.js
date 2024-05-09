let arr = ["Priya", "Abhay", "Aryan", "Mustafa"];

console.log(arr[0]);

console.log(arr[1]);

console.log(arr.length);

console.log(arr[-1]);

arr.push("Chetan"); // adds value in end

arr.unshift("Tarun"); // adds value in beg

arr.pop(); // removes value from end

arr.shift(); // removes value from beg

console.log(arr);
//* probliem 1 *//

let arr1 = ["Priya", "Abhay", "Aryan", "Mustafa"];

arr1.pop();
arr1.shift();
arr1.unshift("Gaurav");
arr1.unshift("Soham");
arr1.push("Kushal");
arr1.shift();
arr1.pop();
arr1.push("Anjay");
console.log(arr1);

//prblem 2

let array = [1, 2, 3, 4, 5];

array.pop();
array.push(-3);
array.reverse();
array.shift();
array.unshift(-1);
array.reverse();
array.splice(3, 1, -4);
// console.log(array)

let array2 = array.slice(2);
array2.fill(1, 1, 2);
console.log(array.join("*"));
console.log(array2.join("#"));
