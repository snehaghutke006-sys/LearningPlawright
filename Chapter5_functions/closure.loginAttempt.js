function loginAttempt(max){

    let attempt = 0;
    return function tryAgain(){
        attempt++;
        if(max< attempt){
            return `max attempt has been reached ${attempt}`;}
        
        else{    return `${attempt}/ ${max} are left`;}
    }
}


let f = loginAttempt(3);
console.log(f())
console.log(f())
console.log(f())
console.log(f())