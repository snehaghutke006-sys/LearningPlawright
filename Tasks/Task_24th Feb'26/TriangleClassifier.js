let a= 10, b = 10, c = 10;
if(a==b && b ==c){
    console.log("Equilateral triangle"); //a=10, b=10, c=10
}

else if(a==b || b==c || c==a){
    console.log("Isosceles triangle"); //a=10, b=9, c=9
}
 else
    console.log("scalene traingle"); //a=10, b=20, c=30