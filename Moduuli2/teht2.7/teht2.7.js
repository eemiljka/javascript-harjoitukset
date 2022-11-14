'use strict';
let target = document.querySelector('#target')
// Starting an unordered list
let html = '<ul>'

// Making a dice rolling function
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


