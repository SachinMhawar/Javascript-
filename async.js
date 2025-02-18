console.log("Hello World");

const { reject } = require("async");

setTimeout(() => {
    console.log("Aryan Rana")
}, 4000)

console.log("hey1")
console.log("hey2")

setTimeout(() => {
    console.log("hey3")

})
console.log("hey4")

let ans  = new Promise((res, rej) => {

    if(true){
        return res();
    }

    else{
        return rej();
    }
});

ans
.then(function () {
    console.log("Resolve Successfully")
})
.catch( function() {
    console.log("Reject Successully")
})



 const a = document.querySelector('h1')

 a.style.backgroundColor = "Black"
 a.style.color = "white"

 
 const btns = document.getElementsByClassName('.btn');

 const flag = 0 
 

 btns.addEventListener((click, ) => {


    if(flag === 0){
        console.log("Okey")
        
    }
    else{
        console.log("Worng")
    }

 })