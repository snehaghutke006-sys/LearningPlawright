
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

console.log(2 ** 3);
console.log('5' + 3);
console.log('5' - 3);
console.log(true + true);
console.log(0 || 'hello');
console.log(0 ?? 'hello');

let s = 5; let s1 = a++; console.log(s, s1);

if ('') { console.log('yes'); } else { console.log('no'); }
console.log(Boolean([]));


 let status = 200; 
 if (status === 200) { console.log("OK"); } 
 else if (status === 404) { console.log("Not Found"); } 
 else { console.log("Other"); }