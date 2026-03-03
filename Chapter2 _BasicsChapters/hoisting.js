
//console.log(a); //undefined
let a = 10;
console.log(a); //10   
  



let x = 'global';
if(true) {
    //console.log(x); -- TDZ, cannot access x before initialization
    let x = 'block';
    console.log(x); //block
}
console.log(x); //global


let x1 = 'global';
if(true) {
    console.log(x); //global
}
