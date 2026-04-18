
let maxAttempt = 0;
function falkyAPI(){
       maxAttempt++;
    if(maxAttempt<3){
  
        return Promise.reject("Attempt" + maxAttempt + ":failed")}
    else
        return Promise.resolve("Attempt" + maxAttempt + ":success")
}

async function retryLogic(attempts){
    for(let i= 0 ; i<attempts; i++){
        try{
            let result = await falkyAPI();
            console.log(result)
            return
        }
        catch(error)
        {
            console.log("Error")
        }
           }
}

retryLogic(5);
