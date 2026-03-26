const person = {
  firstName: "Sneha",
  lastName: "Ghutke",

  // Getter
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  // Setter
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); 
// Sneha Ghutke (getter called)

person.fullName = "John Doe"; 
// setter called

console.log(person.firstName); // John
console.log(person.lastName);  // Doe