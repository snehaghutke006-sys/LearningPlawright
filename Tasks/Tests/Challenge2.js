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
for(let i =0 ; i<testResults.lenght ; i++)
{
    console.log("Checking:", testResults[i]);
    if(testResults[i] === "pass"){
        pass++;
        console.log("pass", pass)
    }

    else if(testResults[i] === "fail"){
        fail++;
        console.log("fail", fail)
    }

    else if(testResults[i] === "skip"){
        skip++;
        console.log("skip", skip)
    }

}
    let totalTests = testResults.length;
  let passRate = (pass / totalTests) * 100;


let verdict;

if (fail === 0) {
  verdict = "Ready for Release";
} else if (fail <= 2) {
  verdict = "Review Required";
} else {
  verdict = "Block Release";
}
