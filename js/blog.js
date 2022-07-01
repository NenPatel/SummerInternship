const but = document.querySelector(".but")
but.addEventListener("click",butFun)
const but1 = document.querySelector(".butt")
but1.addEventListener("click",butFun1)

function butFun(){
    
    const item = document.querySelector(".show-1")
    item.classList.toggle("hide-1")   
     
    but.textContent == "Read More" ?
    but.textContent = "Read Less" : but.textContent = "Read More"
}
// but.classList.toggle("show-1")
function butFun1(){
    
    const item1 = document.querySelector(".showw-1")
    item1.classList.toggle("hidee-1")   
     
    but1.textContent == "Read More" ?
    but1.textContent = "Read Less" : but1.textContent = "Read More"
}