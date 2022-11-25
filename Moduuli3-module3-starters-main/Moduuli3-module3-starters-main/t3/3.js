'use strict';

const names = ['John', 'Paul', 'Jones'];
let list = document.getElementById('target')

for (let i = 0; i < names.length; i++) {
    let name = document.createElement('li')
    name.innerText = names[i]
    list.appendChild(name)
}
