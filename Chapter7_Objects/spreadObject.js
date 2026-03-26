const person = {
  name: "Sneha",
  age: 25
};

const copy = { ...person };
console.log(copy); // { name: "Sneha", age: 25 }

const update = { ...person,
    age:20
 };
console.log(update); // { name: "Sneha", age: 20 }



const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2 }