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