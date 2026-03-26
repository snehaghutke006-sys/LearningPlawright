const person = {
  name: "Sneha",
  age: 25
};

// Destructuring
const { name, age } = person;

console.log(name); // Sneha
console.log(age);  // 25


const { name: userName } = person;
console.log(userName); // Sneha


const {age1 = 20 } = person;
console.log(age1); // 20 (default)