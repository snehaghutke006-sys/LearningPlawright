results = [{ name: "open login", status: "passed", durationMs: 400 }, 
    { name: "fill form", status: "failed", durationMs: 700 },
     { name: "submit", status: "skipped", durationMs: 0 }]



function printTestSummary(results) {

  let total = 0;
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  let totalDuration = 0;
  let failedNamesArray = [];

  for (const step of results) {
    total++;
    totalDuration += step.durationMs;

    if (step.status === "passed") {
      passed++;
    } else if (step.status === "failed") {
      failed++;
      failedNamesArray.push(step.name); 
    } else if (step.status === "skipped") {
      skipped++;
    }
  }

  console.log("--- Test Summary ---");
  console.log("Total Steps: " + total);
  console.log("Passed: " + passed);
  console.log("Failed: " + failed);
  console.log("Skipped: " + skipped);
  console.log("Total Duration: " + totalDuration + "ms");
  

  console.log("Failed Steps: " + (failedNamesArray.join(", ") || "None"));
}

printTestSummary(results);