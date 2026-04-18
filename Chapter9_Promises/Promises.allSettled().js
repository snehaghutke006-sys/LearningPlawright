let p1 = Promise.resolve("Success 1");
let p2 = Promise.reject("Error 2");
let p3 = Promise.resolve("Success 3");

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));