const id = document.querySelector('#target');
const item1 = document.createTextNode('First item');
const item2 = document.createTextNode('Second item')
const item3 = document.createTextNode('Third item')
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.appendChild(item1);
li2.appendChild(item2);
li3.appendChild(item3);

id.appendChild(li1);
id.appendChild(li2);
id.appendChild(li3);

const li = document.createElement("li");
li2.classList = "my-item";

console.log(id.outerHTML);

const target = document.getElementById("target");

function addClass() {
    target.className = "my-class";
}

addClass();