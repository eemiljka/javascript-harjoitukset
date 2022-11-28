'use strict';
const id = document.querySelector('#target');
const students = [
    {
        name: 'John',
        id: '2345768',
    },
    {
        name: 'Paul',
        id: '2134657',
    },
    {
        name: 'Jones',
        id: '5423679',
    },
];

for (let i = 0; i < students.length; i++) {


    let newOption = document.createElement('option')
    newOption.value = students[i]["id"]  + '>' + students[i]["name"];

    let html = document.getElementById('target')
    target.innerHTML = html

    console.log(newOption.outerHTML);

}
let html = document.getElementById('target')
target.innerHTML = html