let student ={
    name: "Rishav",
    age: 20
}
  let printfullName= function(hometown,state){
    
console.log(this.name +" "+ this.age +" "+ hometown +" "+ state);
 }
 
printfullName.call(student,"lucknow","pune"); 

 let student2 ={
    name: "Mahesh",
    age: 22
 }
 printfullName.call(student,"lucknow","pune"); //call method is not use array direct pass
 printfullName.apply(student2, ["mumbai","delhi"]); //apply method is use array

 //bind method
 let printMyName = printfullName.bind(student,"lucknow","pune"); //bind method is just like call method they bind all
 console.log(printMyName);
 printMyName();