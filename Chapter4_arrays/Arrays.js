// Array

let fruits = []; // Empty  []
let fruits_fresh = ["apple", "banana", "cheery"];
// 3,  index - 0,1,2

let arr = [10, 20, 30, 40]; // 0-3: 4
console.log(arr.length);
// console.log(arr.length()); length is property , () -> functionc
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[4]); // undefined



let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type.



// Creating Arrays

// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];


// Array constructor

let scores = new Array(3);  // creates [empty x 3]
let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);//0-4: 5
console.log(test);
console.log(test[0]);

// Array.from()
let chars = Array.from("hello"); // ["h", "e", "l", "l", "o"]





let arr1 = [10,20,30,40,50]
console.log("array length:" + arr1.length)


arr.push(60,70); // add at last
console.log("array length:" + arr)

// arr.pop(50), no param
// console.log("array length:" + arr)

arr.pop(); // remove from last
console.log("array length pop:" + arr)

arr.unshift(1,2)//add at beg
console.log("array length:" + arr)

// arr.shift(2)
// console.log("array length:" + arr)


arr.shift()// remove from beg, no parameter
console.log("array length shift:" + arr)


//index + delete count
arr.splice(2,3)
console.log("array length splice:" + arr)


arr.splice(2, 0 , 999)
console.log("array splice 2:" + arr)


arr.splice(2, 0 , 999,888,666)
console.log("array splice:" + arr)


arr.splice(2, 1 , 999,888,666)
console.log("array splice:" + arr)


