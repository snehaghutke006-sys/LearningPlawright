let arr = [10,20,30,40,50]
console.log("array length:" + arr.length)


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

