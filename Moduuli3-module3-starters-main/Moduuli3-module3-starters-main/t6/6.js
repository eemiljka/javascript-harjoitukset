'use strict';

let theButton = document.querySelector("button")
theButton.onclick = function () {
    alert("Button Clicked")
}

console.log(theButton.outerHTML)