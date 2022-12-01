'use strict';

let number = prompt("Please, enter a number.")

let isPrime = true;
if (number == 1) {
    target.innerHTML = number + " is not a prime number."
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        target.innerHTML = number + " is a prime number."
    } else {
        target.innerHTML = number + " is not a prime number."
    }
}
