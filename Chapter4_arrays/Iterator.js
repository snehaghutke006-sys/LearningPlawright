let numbers = [10, 20, 30, 40];

for (let num of numbers) {
    console.log(num);
}

let text = "Hello";

for (let char of text) {
    console.log(char);
}

//forEach
let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
    console.log(index + " : " + fruit);
});

numbers.forEach((num,index) =>{
    console.log( `${index}: ${num}`);
})


//entries
let arr = ["A", "B", "C"];

for (let [i, val] of arr.entries()) {
    console.log("Index:", i, "Value:", val);
}

//in
let person = {
  name: "Sneha",
  age: 25
};

console.log("name" in person);
console.log("city" in person);
console.log(1 in numbers);
console.log(8 in numbers);
console.log("----------------")
for (let i in numbers) {
    console.log("Index Of In:", i, numbers[i]);
}

//////////////////////////////////////////////////////////////////////////////////

// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test) // value
}
console.log("----");

// forEach (no return value)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`);
});

console.log("----");
// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];


for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}