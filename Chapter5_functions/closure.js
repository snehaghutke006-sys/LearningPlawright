function outer(){
    let m = "hello"
    console.log("outer function");

    function inner(){
        console.log(m);
        
    }
    return inner
    

}
outer(); //outer function
let inner_f = outer();
//console.log(inner())// inner not defined
console.log(inner_f) //[Function: inner]

inner_f() //hello