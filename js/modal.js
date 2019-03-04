document.getElementById("myBtn").onclick = function () {
    document.getElementById('myModal').style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById('myModal').style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
}

/* */
document.getElementById("myBtn1").onclick = function () {
    document.getElementById('myModal1').style.display = "block";
}

document.getElementsByClassName("close")[1].onclick = function () {
    document.getElementById('myModal1').style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById('myModal1')) {
        document.getElementById('myModal1').style.display = "none";
    }
}
/* */

document.getElementById("myBtn2").onclick = function () {
    document.getElementById('myModal2').style.display = "block";
}

document.getElementsByClassName("close")[2].onclick = function () {
    document.getElementById('myModal2').style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById('myModal2')) {
        document.getElementById('myModal2').style.display = "none";
    }
}
