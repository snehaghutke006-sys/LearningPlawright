let fruits = ["banana", "apple", "mango", "cherry"];
fruits.sort();
console.log(fruits); //[ 'apple', 'banana', 'cherry', 'mango' ]



let numbers = [1, 2, 10, 5];
numbers.sort();
console.log(numbers); //[ 1, 10, 2, 5 ] //comapring as string

//Ascending
console.log(numbers.sort((a, b) => a - b)); //[ 1, 2, 5, 10 ]

//descending
console.log(numbers.sort((a, b) => b - a)); //[ 10, 5, 2, 1 ]