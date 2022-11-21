
function celebration(){
    return new Promise((resolve, reject) => {
    
    setTimeout(()=>{
        resolve("cake")
    },1000)
})
}
function ballon(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("purchased")
    },2000)
})
}
function chocalate(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(" for child")
    },3000)
})
}
async function fun1(){

let msg1=await celebration();
console.log(msg1)
let msg2=await ballon();
console.log(msg2)
let msg3=await chocalate();
console.log(msg3)

}
fun1()













