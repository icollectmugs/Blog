function changeText() {
    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll down";
    document.getElementById("icon-up").style.display = "none";
    document.getElementById("icon-down").style.display = "block";
    var iconUp = document.getElementsByClassName("icon-up")[0];
    iconUp.onclick = function () {
        var button = document.getElementsByClassName("icon-down");
        button.style.display = "block";
    };
}
// Meeting11 
// Like and Dislike
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");
if (btnLike) {
    btnLike.onclick = likeColor;
}
if (btnDislike) {
    btnDislike.onclick = dislikeColor;
}
function likeColor() {
    if (btnDislike.classList.contains("red")) {
        btnDislike.classList.remove("red");
    }
    this.classList.toggle("green");
}
function dislikeColor() {
    if (btnLike.classList.contains("green")) {
        btnLike.classList.remove("green");
    }
    this.classList.toggle("red");
}

// Meeting 12 
// Changing Jumbotron Image
function changeImage(element) {
    element.setAttribute("src", "assets/img-header2.png");
    // element.setAttribute("height", "300")
    // element.setAttribute("class", "jumbotron-img")
}
    function changeImageBack(element) {
    element.setAttribute("src", "assets/img-header.png");
    // element.setAttribute("height", "300")
}

// Changing Title
function changeTitle(element) {
    element.innerHTML = "Create Simple Game and Website";
}
function changeTitleBack(element) {
    element.innerHTML = "Get Programming Tips Here!";
}