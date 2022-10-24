function chBg(){
document.getElementById("main").style.animationName ="go"
}

function anistop(){
    document.getElementById("main").style.animationName =""
    }


function changeWidth(){
    var width = document.getElementById('width').value
    var ölchü = document.getElementById('ölchü').value
document.getElementById("main").style.width = width+ölchü
}

function changeWidthDefault(){
    document.getElementById("main").style.width ="150px"
    }