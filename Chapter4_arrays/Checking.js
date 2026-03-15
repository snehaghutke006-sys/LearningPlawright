let arr = [1, 2, 3];
console.log(Array.isArray(arr));  //true


let name = "Sneha";
console.log(Array.isArray(name)); //false ("Sneha" is a string, not an array.)


console.log(Array.isArray([10, 20])); //true
console.log(Array.isArray({a:1})); //{a:1} is an object, not an array. - false


console.log(Array.isArray('a'));  //false


//////////////////////////////////////////////////////////////////////////////////////////////////

//every
let num = [10, 20, 4, 5, 1]
console.log(num.every(n => n>0)) //true
console.log(num.every(n => n<0))//false


let numbers = [2, 4, 6, 8];
let result = numbers.every(num => num % 2 === 0)
console.log(result);


//////////////////////////////////////////////////////////////////////////////////////////////////

//some
let n = [10,20,30,50]
console.log(n.some( n=> n<=50))

let a = [1, 3, 7, 8];
console.log(a.every(n => n % 2 === 0)); // false
console.log(a.some(n => n % 2 === 0));  // true