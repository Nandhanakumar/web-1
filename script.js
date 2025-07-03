var sidenav = document.querySelector(".side-nav-bar")

function shownav() {
    sidenav.style.display = "block"
    sidenav.style.opacity="100%"
}
function closenav() {
    sidenav.style.display = "none"
}
var bur=document.querySelector(".btn")
var inp=document.querySelector(".info")

function clk(){
    if(inp.value!=""){
    alert("INFORMATION STORED")
    }
    
    inp.value=""
}
