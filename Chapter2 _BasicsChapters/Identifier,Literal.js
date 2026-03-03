var a = 10;
var b = 3.14;
var c = "Hello World";
console.log(a);
console.log(b);
console.log(c);



function printFunction(){
    console.log("This is a function");
    a = 20;
    console.log(a);
    if(true){
        var a = 30;
        console.log("function a = " + a);
    }
}

function printFunctionOfLet(){
    console.log("This is a function");
    let b = 20;
    console.log(b);
    if(true){
        let b = 30;
        console.log("function b = " + b);
    }
}















//function call
printFunction();
printFunctionOfLet();