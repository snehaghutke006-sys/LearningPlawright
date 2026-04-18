function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function fetchData() {
  let result = await getData();  // waits here
  console.log(result);
}

fetchData();