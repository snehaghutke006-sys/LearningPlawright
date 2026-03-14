/*In automation testing, 
API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a 
failed API call using a do...while loop. 
The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() 
(40% chance of success: randomValue > 0.6). 
Log each attempt and print the final result.*/


let MAX_ATTEMPTS = 5
let attempt= 0;
 do{

    attempt++;
    let randomValue = Math.random()
    success = randomValue > 0.6;
    console.log(success)
    if(success)
        break;

 }
 while(attempt<MAX_ATTEMPTS){
  if(success)
    console.log(`Success after  ${attempt}`)
else (console.log(`failes after  ${MAX_ATTEMPTS}`))
 }