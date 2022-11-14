'use strict';
let target = document.querySelector('#target')

let numbers = [];
let givenNumber = prompt("Please, enter a number.")
numbers.push(givenNumber)
    while (false) {
        if (numbers.includes(givenNumber)) {
            givenNumber = prompt("Please, enter a number.")
            numbers.push(givenNumber)
            break;
        }
    }
    target.innerHTML = numbers