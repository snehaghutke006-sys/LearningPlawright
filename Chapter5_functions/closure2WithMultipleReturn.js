function makeCounter(start = 0){

    let count= start;

    // function increment(){
    //     count++;
    //     console.log(`increment ${count}`)
    // }
    // function decrement(){
    //     count--;
    //      console.log(`decrement ${count}`)
    // }
    // function getCount(){
    //     return count;
    // }      
return{
    increment(){
       count++;
       console.log(`increment ${count}`)}, 
    decrement(){
        count--;
         console.log(`decrement ${count}`)}, 
    getCount(){
         return count;}
}
}
 let c = makeCounter(0)
c.increment(),//increment 1
c.increment(),  //increment 2
c.increment(), 
c.increment(), 

c.decrement(), //decrement 3
console.log(c.getCount()); //3
