'use strict';
let target = document.querySelector('#target')
const numArr = []
let programRunning = true;
const number = parseInt(prompt("Give a number."))
numArr.push(number);

while (programRunning) {
    const number = parseInt(prompt("Give a number."));
    if (numArr.includes(number)) {
        programRunning = false;
    } else {
        numArr.push(number);
    }
}
const compare = (n1, n2) => {
    return n1-n2;
}
numArr.sort(compare)
target.innerHTML = numArr
