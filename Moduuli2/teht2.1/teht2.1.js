'use strict';

let numbers = [];
for (let i = 0; i < 5; i++)
{
    numbers[i] = parseInt(prompt("Give "+ (i + 1) + ". number"));
}

for (let i = 4; i >= 0; i--)
{
    console.log(numbers[i])
}

console.log(numbers);
