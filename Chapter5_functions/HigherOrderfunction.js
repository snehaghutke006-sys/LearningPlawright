let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);   // map takes a function
let evens   = numbers.filter(num => num % 2 === 0); // filter takes a function
let sum     = numbers.reduce((acc, num) => acc + num, 0); // reduce takes a function

console.log(doubled); // [2, 4, 6, 8]
console.log(evens);   // [2, 4]
console.log(sum);     // 10
