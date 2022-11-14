'use strict';
let target = document.querySelector('#target')
let target2 = document.querySelector('#target2')

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let evenNumbers = []

function getEvenNumbers(numbersArr) {
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] % 2 === 0) {
            evenNumbers.push(i+1)
            target.innerHTML = "Even numbers: " + evenNumbers
            }
        }
}

getEvenNumbers(numbers);
target2.innerHTML = "Original numbers: " + numbers