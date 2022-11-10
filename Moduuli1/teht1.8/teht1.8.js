'use strict';

let target = document.querySelector('#target')

let startYear = parseInt(prompt('Give starting year:'))
let endYear = parseInt(prompt('Give ending year: '))

let html = '<ul>';
for (let y = startYear; y <= endYear; y++)
{
    if ((y % 4 == 0 && y % 100 == 0) || (y % 400 == 0))
    {
        html += '<li>';
        html += y;
        html += '</li>'
    }
}
html += '</ul>'

target.innerHTML = html