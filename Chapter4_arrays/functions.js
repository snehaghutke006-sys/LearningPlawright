let num= "Array text";

console.log("indexOf:"+ num.indexOf("r"));
console.log("lastIndexOf:"+ num.indexOf("y"));
console.log("includes:"+ num.indexOf("e"));

let n =[10,20,30,40,50]
console.log("find:"+ n.find(x => x>30));
console.log("filter:"+ n.filter(x => x>30));
console.log("findIndex:"+ n.findIndex(x => x>30)); //40 - index - 3
console.log("findLast:"+ n.findLast(x => x>20));