'use strict';
let target = document.querySelector('#target')

let nbrParticipants = parseInt(prompt("What is the number of participants?"))
let participants = [];

for (let i = 0; i < nbrParticipants; i++)
{
    participants[i] = prompt("Name: ");
}

let html = '<ol>';
for (let i = 0; i < nbrParticipants; i++)
{
    html += "<li>";
    html += participants[i];
    html += "</li>";
}
html += "</ol>";

document.querySelector('#target');
target.innerHTML = html

