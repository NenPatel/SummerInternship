document.getElementById("but2").disabled = true
document.getElementById("but3").disabled = true
document.getElementById("but4").disabled = true

function porder(){
    var porder =  document.getElementById("num1");
    porder.style.visibility = "visible";
    document.getElementById("but2").disabled = false;
    var anim = document.getElementById("anim1")
    anim.style.width = "250px"
  
}
function fprepare(){
    var porder =  document.getElementById("num2") 
    porder.style.visibility = "visible"
    document.getElementById("but3").disabled = false
    var anim = document.getElementById("anim1")
    anim.style.width = "600px"
}
function odel(){
    var porder =  document.getElementById("num3") 
    porder.style.visibility = "visible"
    document.getElementById("but4").disabled = false
    var anim = document.getElementById("anim1")
    anim.style.width = "900px"
}
function del(){
    var porder =  document.getElementById("num4") 
    porder.style.visibility = "visible"
}