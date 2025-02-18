let bulb = document.querySelector("#bulb")

let btn1 = document.querySelector("#btn1")

// let btn2 = document.querySelectorAll("#btn2")

let flag = 0 
   
btn1.addEventListener('click', function() {


    if (flag == 0 ){
    bulb.style.backgroundColor = "yellow"
    flag = 1
    }
    else{

        bulb.style.backgroundColor = "white"
        flag = 0
    }

})


// btn2.addEventListener("click", function() {
//     bulb.style.backgroundColor = "white"

// })