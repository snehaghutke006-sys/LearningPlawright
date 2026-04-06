let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


//sum
let sum = arr.map(arr=>arr.reduce((a, b) => a+b, 0));
console.log(`sum of matrix ${sum}`)


