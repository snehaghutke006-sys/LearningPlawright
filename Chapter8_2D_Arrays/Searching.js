let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for(i=0; i<suiteResults.length; i++){
    for(j=0; j<suiteResults[i].length; j++){
        if(suiteResults[i][j].includes("pass"))
            console.log(suiteResults[i][j])
    }
}