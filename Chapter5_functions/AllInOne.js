function validateStatusCode(status){
    if(status>=200 && status<=300){
        console.log("API is working")}
}
validateStatusCode(200);


 const validateStatusCode1 = (status) => {
     if(status>=200 && status<=300){
        console.log("API is working")}
        else
             console.log(`API is not working, ${status}`);
 }
 validateStatusCode1(100);



 const validateStatusCode3 = function (status) {
     if(status>=200 && status<=300){
        console.log("API is working")}
        else
             console.log(`API is not working, ${status}`);
 }
 validateStatusCode3(500);