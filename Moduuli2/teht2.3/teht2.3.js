'use strict';

let target = document.querySelector('#target');

let dogs = [];

for (let i = 0; i < 6; i++){
  dogs[i] = prompt(`Give name to ${i + 1}. Dog`)
}
dogs.sort().reverse();

console.log(dogs)

let list = '<ul>';
for (let i = 0; i < 6; i++) {
  list += '<li>';
  list += dogs[i];
  list += '</li>';
}
list += '</ul>';

document.querySelector('#target')
target.innerHTML = list