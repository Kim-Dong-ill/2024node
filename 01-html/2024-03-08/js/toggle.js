
const toggleElm = document.getElementsByClassName("toggle_btn")[0]

// const toggleElm = document.querySelector(".toggle.btn")

// let changToggle = true;
// toggleElm.addEventListener("click",function(){
//     if(changToggle == true){
//         toggleElm.classList.add("active")
//         changToggle = false;
//     }else{
//         toggleElm.classList.remove("active")
//         changToggle = true
//     }
    
// })

toggleElm.addEventListener("click",function(){
    toggleElm.classList.toggle("active")
})

