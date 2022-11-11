'use strict';
let target = document.querySelector('#target')

let numbers = [];
let number = prompt("Give a number")

while (number != 0) {
    askForNumber();
}
function askForNumber() {
    numbers.push(number)
    let number = prompt("Give a number")
}

