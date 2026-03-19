function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same result)



//impure
let counter = 0;

function increment() {
  counter++; // ❌ modifies external variable
  return counter;
}

console.log(increment()); // 1
console.log(increment()); // 2
