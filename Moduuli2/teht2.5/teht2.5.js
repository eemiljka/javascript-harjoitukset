/*'use strict';
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
    target.innerHTML = numbers */

let target = document.querySelector('#target')

let numbers = [];
let givenNumber = prompt("Please, enter a number.")
numbers.push(givenNumber)

let includes = false

while (includes) {
    let givenNumber = prompt("Please, enter a number.")
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.includes(i)) {
            includes = true
        } else {
            numbers.push(givenNumber)
        }
    }

    numbers.push(givenNumber)
}
