'use strict';
let target = document.querySelector('#target')

const question = confirm("Should I calculate the square root?")
if (question == true) {
    let number = prompt("Give a number to square")
    let square = number * number
    target.innerHTML = square
}
else {
    target.innerHTML = "The square root is not calculated."
}