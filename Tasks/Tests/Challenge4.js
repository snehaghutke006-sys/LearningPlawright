/*
In UI automation (Cypress/Playwright), you often need to validate element states before interacting with 
them. 
Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) a
nd prints the appropriate action a QA engineer should take. Use strict equality (===), 
logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
 */


let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let States = isPresent && isDisplayed && isEnabled ? "READY" :
            isPresent && isDisplayed && !isEnabled ? "DISABLED" :
            isPresent && !isDisplayed && isEnabled ? "HIDDEN" :
            "NOT FOUND";

 console.log(`State: ${States}`);


let Severity = isPresent && isDisplayed && isEnabled ? "All Good" :
            isPresent && !isDisplayed && !isEnabled ? "WARNING" :
            "CRITICAL" ;
             console.log(`Severity: ${Severity}`);






