const user = {
  name: "Sneha"
};

const desc = Object.getOwnPropertyDescriptor(user, "name");

console.log(desc);