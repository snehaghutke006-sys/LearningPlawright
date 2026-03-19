
// let globalVar = "Hello World";
// function myFunction() {
//   let localVar = "Inside Function";
//   console.log(localVar); // Works
// }

// myFunction();
// console.log(localVar);// ❌ Error: localVar is not defined
// console.log(globalVar) // Hello world
////////////////////////////////////////////////////////////////////////////////////////



function outerFunction() {
  let x=10;

  function innerFunction() {
    console.log(x);
    let y = 20;
    console.log(y);
  }

  innerFunction();
  console.log(y); //error //blocked-scope
}
/////////////////////////////////////////////////////////////////////////////////



// 🌍 Global Scope
let globalVar = "I am Global";

function outerFunction() {
  // 📦 Function Scope
  let functionVar = "I am in outerFunction";

  if (true) {
    // 🧱 Block Scope
    let blockVar = "I am Block Scoped";
    console.log(blockVar); // ✅ Accessible here
  }

  console.log(globalVar);   // ✅ Accessible (global)
  console.log(functionVar); // ✅ Accessible (function)
  // console.log(blockVar); // ❌ Error: blockVar is not defined outside the block
}

outerFunction();

console.log(globalVar);   // ✅ Accessible (global)
// console.log(functionVar); // ❌ Error: functionVar is not defined outside the function

