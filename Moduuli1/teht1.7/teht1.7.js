'use strict';
let target = document.querySelector('#target')
let target2 = document.querySelector('#target2')

let nbrDice = prompt("How many dice do you want to roll?", 4);
let diceList = [];

function addToList() {
    for (let i = 0; i < nbrDice; i++) {
        diceList.push(Math.floor(Math.random() * 6) + 1);
    }
}

addToList();
target.innerHTML = "Here's the list: " + diceList
let total = 0;
for (let i in diceList) {
  total += diceList[i];
}
target2.innerHTML = "Here's the sum: " + total
