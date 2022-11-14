'use strict';
let target = document.querySelector('#target')
let html = '<ul>'
let random = Math.floor(Math.random() * 6) + 1;


function rollDice() {
    random = Math.floor(Math.random() * 6) + 1;
    html += '<li>'
    html += random
    html += '</li>'
}

while (random != 6) {
    rollDice();
}

html += '</ul>'
target.innerHTML = html
