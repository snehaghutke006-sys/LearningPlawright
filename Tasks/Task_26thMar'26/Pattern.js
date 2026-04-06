/*

**

***

****

*****

—-  (inverted pyramid)

*********

 *******

  *****

   ***

    *
   */

   let n=4;

   for(let i=1 ; i<=n; i++){
    let row = " "
    for(let j=1; j<=i; j++){
       row = row+ "* "
       
    }
       console.log("normal pattern" + row)
   }


   for(let i=n; i>=1; i--){
    let row =" "
    for(let j =i ; j>=1; j--){
        row= row+"* "
    }
     console.log(row)
   }
   