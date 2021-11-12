myID = document.getElementById("scrollToTop");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "back-to-top-inner show"
    } else {
        myID.className = "back-to-top-inner hide"
    }
};

window.addEventListener("scroll", myScrollFunc);