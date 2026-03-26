const user = {
  name: "Sneha",
  age: 25,
  city: "Nagpur"
};

// 1. Get all keys
const keys = Object.keys(user);
console.log("Keys:", keys);  //Keys: [ 'name', 'age', 'city' ]

// 2. Get all values
const values = Object.values(user);
console.log("Values:", values); //Values: [ 'Sneha', 25, 'Nagpur' ]


// 3. Get key-value pairs
const entries = Object.entries(user);
console.log("Entries:", entries); //Entries: [ [ 'name', 'Sneha' ], [ 'age', 25 ], [ 'city', 'Nagpur' ] ]

// 4. Loop through keys
keys.forEach(key => {
  console.log("Key:", key);
});

// 5. Loop through values
values.forEach(value => {
  console.log("Value:", value);
});

// 6. Loop through entries (BEST WAY)
entries.forEach(([key, value]) => {
  console.log(key + ": " + value);
}); 