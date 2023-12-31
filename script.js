const urlParams = new URLSearchParams(window.location.search);

// get all link in nav class
var nav = document.querySelectorAll(".nav");

// add url parameter to all link in nav class (not just message query)
for (var i = 0; i < nav.length; i++) {
    var href = nav[i].querySelector("a").getAttribute("href");
    nav[i].querySelector("a").setAttribute("href", href + "?" + urlParams);
}