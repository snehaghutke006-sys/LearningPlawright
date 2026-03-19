const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3)); // 5

const add1 = (a, b) => a + b;
console.log(add1(3, 3)); //6

const greet = name => `hi, ${name}`;
console.log("heloooooo")




////////////////////////////////////////////////////////////

const sum = (score)=>{
    if (score>=75 )return "pass";
    return "fail"
    
}
console.log(sum(56))   


const checkEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log(checkEven(4)); // Even