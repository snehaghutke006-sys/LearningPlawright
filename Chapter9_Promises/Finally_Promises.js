let promise = new Promise((resolve, reject) => {
  //resolve("Success");
  reject("failure")
});

promise
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Always runs"));