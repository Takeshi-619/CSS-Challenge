"use stript";
var parallexBtn = document.querySelector(".button3");
var parallex = function (e) {
    //   console.log("asd");
    // console.log(e.clientY);
    // console.log(e.clientX);
    var y = e.clientY;
    var x = e.clientX;
    console.log(y);
};
parallexBtn.addEventListener("mousemove", parallex);
