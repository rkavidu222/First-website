console.log("Javascript is Linked Code Point 2K23 !!!");

var navLinks = document.getElementById("navLinks");
var bodyId = document.getElementById("bodyId");
var htmlId = document.getElementById("htmlId");


function hideMenu() {
    bodyId.style.overflowY = "visible";
    htmlId.style.overflowY = "visible";
    navLinks.style.right = "-200px";
}
function showMenu() {
    window.scrollTo(0, 0);
    navLinks.style.right = "0";
    bodyId.style.overflowY = "hidden";
    htmlId.style.overflowY = "hidden";
}
