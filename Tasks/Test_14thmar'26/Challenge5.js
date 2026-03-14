/**Write a higher-order function `runStep(stepName, actionFn)` 
 * that logs the start of a step, executes the callback, and returns an object in the format `{ stepName, passed, message }`. 
 * If the callback throws an error, catch it and return `passed: false` with the error message. */

async function runStep(stepName, actionFn) {
    console.log(`>>> Starting Step: ${stepName}`);
    
    try {
        // Capture the result of the function execution
        const result = await actionFn();

        return {
            stepName: stepName,
            passed: true,
            // Use the return value as the message, 
            // or a default string if the function returned nothing
            message: result || "Step completed successfully"
        };
    } catch (error) {
        return {
            stepName: stepName,
            passed: false,
            message: error.message
        };
    }
}

// --- Test ---
async function demo() {
    const output = await runStep("open dashboard", () => "Page loaded");
    console.log(output);
}

demo();