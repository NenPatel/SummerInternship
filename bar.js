// onload = functionCall;
window.addEventListener('load',functionCall)
function functionCall() {

    var progress = document.getElementById("barr1")
    progress.style.width = progress.getAttribute("bar")
    progress.style.opacity = 1
}