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
// Meeting11 Like Dislike
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
