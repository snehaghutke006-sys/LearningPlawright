/*
As a performance tester, you collect API response times in milliseconds. 
Write a JavaScript program using a while loop that analyzes an array of response times 
and prints a performance report with min, max, average, and how many responses breached the SLA threshold 
(> 500ms). 
Use comparison operators for min/max tracking.*/




responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
// Initialize variables
let i = 0;
let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let slaBreaches = 0;
const slaThreshold = 500;

while(i<responseTimes.lenght){
 // Track min and max using comparison operators
    if (time < min) min = time;
    if (time > max) max = time;

    // Sum for average
    sum += time;

    // Count SLA breaches
    if (time > slaThreshold) slaBreaches++;

    i++;
}

// Calculate average
let average = sum / responseTimes.length;

// Print performance report
console.log("Performance Report:");
console.log(`Min Response Time: ${min} ms`);
console.log(`Max Response Time: ${max} ms`);
console.log(`Average Response Time: ${average.toFixed(2)} ms`);
console.log(`Responses Breached SLA (> ${slaThreshold}ms): ${slaBreaches}`);

