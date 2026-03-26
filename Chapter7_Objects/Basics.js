const user = {
  name: "Sneha",
  age: 25,
  role: "QA Engineer"
};

console.log(user.age)
console.log(user.name)
console.log(user["role"])

let a =user //copies refereence
a.city = "Nagpur";     // Add
a.age = 26;            // Update
delete a.role;         // Delete
console.log(a.age)
console.log(a.name)
console.log(a["role"]) //undefined


console.log(user["role"])//undefined


//diff memory
let b = {a:"26"}
console.log(b===a) //false (age===b) -->error it is only a property inside the object


//Dynamic access
const key = "Sneha"
console.log(key)//-->error it is only a property inside the object