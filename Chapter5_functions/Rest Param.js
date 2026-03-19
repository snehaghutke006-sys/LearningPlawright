function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10



function showNames(...names) {
    console.log(names);
}

showNames("Sneha", "John", "Sam");
// ["Sneha", "John", "Sam"]


////////////////////////////////////////////////////////////////////////////////////

function hasError(...codes){
    return codes.some(c=> c>200)
}
let n  = [200, 500, 800 ,99]
console.log(hasError(...n))