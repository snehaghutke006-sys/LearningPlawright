let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log("a", a);
console.log("b", b);
console.log("c", c);

let [a1, , c1] = numbers;
console.log("a1", a1);
console.log("c1" , c1);


let [apple, chickoo, ...mango] = [10, 20, 30, 40, 50]
console.log(apple) //10
console.log(chickoo) //20
console.log(mango) //[ 30, 40, 50 ]