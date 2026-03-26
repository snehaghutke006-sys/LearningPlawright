const student = {
  name: "Sneha",
  marks: 85,

  // Method 1
  getDetails: function() {
    return "Name: " + this.name + ", Marks: " + this.marks;
  },

  // Method 2
  isPassed: function() {
    if (this.marks >= 40) {
      return "Passed";
    } else {
      return "Failed";
    }
  }
};

// Calling methods
console.log(student.getDetails()); // Name: Sneha, Marks: 85
console.log(student.isPassed());   // Passed