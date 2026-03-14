/**Given a raw Playwright error message string, 
 * write a function that trims extra spaces, converts the message to lowercase, 
 * collapses multiple spaces into a single space, and prints a category. 
 * Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` 
 * if it contains `"locator"`, otherwise `GENERAL`.

 */


let rawMessage = " Locator not found after TIMEOUT ";

function test(rawMessage) {
    let clean = rawMessage.trim().toLowerCase().replace(/\s+/g, ' ');

    let category;
    if (clean.includes("timeout")) {
        category = "TIMEOUT";
    } else if (clean.includes("locator")) {
        category = "LOCATOR";
    } else {
        category = "GENERAL";
    }

    console.log(`Category: ${category}`);
    console.log(`Cleaned Message: ${clean}`);

    return { category, clean };
}

test(rawMessage);