'use strict';
let target = document.querySelector('#target')

let array = ["Hello", "World", "!"]

function concat(stringsArr) {
    let concatedArr = stringsArr[0].concat(" " + stringsArr[1])
    target.innerHTML = concatedArr
}

concat(array)

// Works because the "!" is not being printed