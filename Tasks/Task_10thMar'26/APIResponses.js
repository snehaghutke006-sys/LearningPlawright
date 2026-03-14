/*You receive an array of API response codes. Write code to:
Check if ALL responses are successful (200–299)
Find the FIRST non-success code
Return all unique error codes
let responses = [200, 201, 404, 500, 404, 200, 503];*/


let responses = [200, 201, 301,404, 500, 404, 200, 503]

//Check if ALL responses are successful (200–299)
let response = [200, 201, 301, 404, 500, 404, 200, 503].every (r => r>=200 && r<299)
console.log("All responses are successful?", response)

//Find the FIRST non-success code
let result1 = responses.find(r => r<200 || r>299);
console.log("First Non-Success Code: ", result1)

//Return all unique error codes
let result2 = responses.filter(r=> r<200 || r>299)
console.log("All unique codes: ", result2)
