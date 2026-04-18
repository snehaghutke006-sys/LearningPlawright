let isDone = true;

let promise = new Promise((resolve, reject) => {
  if (isDone) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err));

 