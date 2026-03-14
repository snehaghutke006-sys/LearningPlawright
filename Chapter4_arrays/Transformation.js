let numbers = [1,2,3,4];
let result = numbers.map(n => n * 2);
console.log(result);


let names = ["sneha", "rahul", "amit"];
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

//filter
let score = [0,50,80,90,75]
let grades = score.map(s => s>65 ? "pass" : "fail")
console.log(grades)
let pass = score.filter(s => s>65)
console.log("filter",grades)



//reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce",sum);


//flat
let arr = [1, 2, [3, [4, 5]]];
console.log("flat",arr.flat(2));