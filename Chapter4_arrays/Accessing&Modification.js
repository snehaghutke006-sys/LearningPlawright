// Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));//last element
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log(statuses.at(-4));

// Modify
statuses[1] = "blocked";
console.log(statuses);

// Length
console.log(statuses.length);




let arr = [1, 2, 3];
console.log(arr);
// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);


// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// [ 1, 2, 3, 5, 6 ]

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(2, 1); // removes 1 item at index 2
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);

arr.splice(1, 2, 10, 20);
console.log(arr);