/*
After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
Print a test report with total tests, counts, pass rate percentage, 
and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
*/

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let pass = 0;
let fail = 0;
let skip = 0;

for (let i = 0; i < testResults.length; i++) {

    if (testResults[i] === "pass") {
        pass++;
        
    } 
    else if (testResults[i] === "fail") {
        fail++;
       
    } 
    else if (testResults[i] === "skip") {
        skip++;
       
    }
}

console.log("Passed:", pass);
 console.log("Failed:", fail);
  console.log("Skipped:", skip);

let totalTests = testResults.length;
let passRate = (pass / totalTests) * 100;
console.log("Total Tests:", totalTests);
console.log("Pass Rate:", passRate.toFixed(2) + "%");

let verdict;

if (fail === 0) {
    verdict = "Ready for Release";
} 
else if (fail <= 2) {
    verdict = "Review Required";
} 
else {
    verdict = "Block Release";
}

console.log("Verdict:", verdict);