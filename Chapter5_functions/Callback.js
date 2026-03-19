function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Sneha", sayBye);


///////////////////////////////////////////////////////////

function calculation (a, b, operation){
 return operation(a, b)
}

function add(a, b){
    return a+b
}

function mult(a, b){
     return a*b
}

console.log(calculation(1,2, add))
console.log(calculation(1,2, mult))