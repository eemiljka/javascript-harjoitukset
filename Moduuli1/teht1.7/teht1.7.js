'use strict';
let target = document.querySelector('#target')

let nbrDice = prompt("How many dice do you want to roll?", 4)

for (let i = 0; i < nbrDice; i++) {
    target.innerHTML = Math.floor(Math.random() * 6) + 1;
}


