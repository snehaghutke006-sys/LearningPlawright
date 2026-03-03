// Print "Hello" 5 times
for(let i=0; i<5;i++){
    console.log("hello");
}

//Print numbers from 1 to 10
for(let i=1; i<=10;i++){
    console.log(i);
}


//Print even numbers from 1 to 20
for(let i=1; i<=20;i++){
    if(i %2 ==0){
        console.log("Even Numbers: " + i);
    }
}


//Print the sum of first 10 natural numbers
let sum =0;
for(let i=1; i<=10;i++){
    sum = sum+i;
}
 console.log("Sum of first 10 natural numbers: " + sum);


 //Print the multiplication table of 5
 for(let i=1; i<=10;i++){
    console.log("5 x " + i +"=" + 5*i);
    }