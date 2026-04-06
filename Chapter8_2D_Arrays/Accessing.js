let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let rows = 3;
let cols = 3;

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++)
        console.log(arr[i][j])
}


arr.forEach(row => {
  row.forEach(value => {
    //process.stdout.write(value);//error it accepts only string not numers
        process.stdout.write(value.toString());

  });
});


console.log(`array length: ${arr.length}`)
console.log(`last data ${arr[arr.length-1][arr[0].length-1]}`)

