'use strict';
let target = document.querySelector('#target')
// Starting an unordered list
let html = '<ul>'

let random = Math.floor(Math.random() * 101) + 1;

function rollDice(nbrOfSides) {
    random = Math.floor(Math.random() * nbrOfSides) + 1;
    html += '<li>'
    html += random
    html += '</li>'
}

// Kind of works
while (random != 101) {
    rollDice(101);
}


html += '</ul>'
target.innerHTML = html