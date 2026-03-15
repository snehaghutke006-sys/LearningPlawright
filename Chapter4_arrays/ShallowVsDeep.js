let original=[10, 20 ,30, 40]
let copy1=[...original]
console.log(copy1)//[ 10, 20, 30, 40 ]

let copy2 = original.slice();
console.log("copy2", copy2) //copy2 [ 10, 20, 30, 40 ]

let copy3 = Array.from(original)
console.log("copy3", copy3) //copy3 [ 10, 20, 30, 40 ]

let copy4 = original.concat();
console.log("copy4", copy4) //copy4 [ 10, 20, 30, 40 ]

copy2.push(99)
console.log(original)
console.log(copy2)


//deep copy
original.push(109)
console.log("original", original)
console.log("copy2",copy2)