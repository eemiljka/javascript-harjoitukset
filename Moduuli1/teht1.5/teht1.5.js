'use strict';

let target = document.querySelector('#target')

let year = parseInt(prompt('Give year:'))


if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    target.innerHTML = year + " is a leap year."
}
else {
    target.innerHTML = year + " is not a leap year."
}
