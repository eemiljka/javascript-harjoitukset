'use strict';

const names = ['Frank', 'Scott', 'Jasmine', 'Don'];

for (let i = 0; i < names.length; i++) {
    console.log(`Name: ${names[i]}`);
}

for (let name of names)
{
    console.log(name)
}

function foo(arvo) {
    arvo += 10
    console.log("Arvo funktiossa: " + arvo)
}

let x = 100;
foo(x);

console.log("Arvo pääohjelmassa: " + x);