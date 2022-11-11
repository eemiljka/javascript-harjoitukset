'use strict';

let target = document.querySelector('#target')

let first = parseInt(prompt("Give first:"))
let second = parseInt(prompt("Give second:"))
let third = parseInt(prompt("Give third:"))

let sum = first + second + third
let product = first * second * third
let average = sum / 3

target.innerHTML =
    'Sum = ' + sum +
    '<br> Product = ' + product +
    '<br> Average = ' + average;


