function makeRateLimiter(limit){
    let call = 0;

   return function check(){
    call++;
    return call<=limit;}

}
let f = makeRateLimiter(2)
console.log(f()) //true 
console.log(f()) //true
console.log(f()) //false

