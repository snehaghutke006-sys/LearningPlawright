/**You have an array of all supported browsers and another array of temporarily blocked browsers. 
 * Write a function that returns the runnable browsers, the blocked browsers, 
 * and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`. */


const allBrowsers = ["chromium", "firefox", "webkit"]; const blockedBrowsers = ["firefox"]


function getExecutionPlan(allBrowsers, blockedBrowsers) {
  const runnable = allBrowsers.filter(b => !blockedBrowsers.includes(b));
  const blocked = allBrowsers.filter(b => blockedBrowsers.includes(b));

  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;

  return {
    runnable,
    blocked,
    plan
  };
}

const result = getExecutionPlan(allBrowsers, blockedBrowsers);
console.log(result);
