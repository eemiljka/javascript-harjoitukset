'use strict';

let target = document.querySelector('#target')
let name = prompt("What is your name?")

let house = Math.floor((Math.random() * 4) + 1);

if (house == 1) {
target.innerHTML = name + ", you are Gryffindor."
}
else if (house == 2) {
target.innerHTML = name + ", you are Slytherin."
}
else if (house == 3) {
target.innerHTML = name + ", you are Hufflepuff."
}
else if (house == 4) {
target.innerHTML = name + ", you are Ravenclaw."
}