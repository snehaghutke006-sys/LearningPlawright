/*
What is wrong with this code? Fix it.
let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);*/

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort((s1, s2) => s1- s2);
console.log("Fastest:", sorted);