var counter = document.querySelector(".counter")
var counter1 = document.querySelector(".counter1")
var counter2 = document.querySelector(".counter2")
let count = 1
let count1 = 1
let count2 = 1

setInterval( () => {
   if(count<720)
   {
    count++;
    counter.innerText = count
   }
   if(count1<950)
   {
    count1++;
    counter1.innerText = count1
   }
   if(count2<680)
   {
    count2++;
    counter2.innerText = count2
   }
}, 10)

window.addEventListener('scroll',functionCall)
function functionCall() {

   var height = window.innerHeight/2
   var head = document.getElementById("sect-3")
   var main = head.getBoundingClientRect().top
   // console.log(main)
   if(main<height)
   {
    var progress = document.getElementById("barr12")
    progress.style.width = progress.getAttribute("bar")
    progress.style.opacity = 1

    var progress = document.getElementById("barr1")
    progress.style.width = progress.getAttribute("bar")
    progress.style.opacity = 1

    var progress = document.getElementById("barr2")
    progress.style.width = progress.getAttribute("bar")
    progress.style.opacity = 1

    var progress = document.getElementById("barr3")
    progress.style.width = progress.getAttribute("bar")
    progress.style.opacity = 1

    var progress = document.getElementById("barr4")
    progress.style.width = progress.getAttribute("bar")
    progress.style.opacity = 1

    var progress = document.getElementById("barr5")
    progress.style.width = progress.getAttribute("bar")
    progress.style.opacity = 1
   }
}