const list = "<li>First item</li>" +
    "<li>Second item</li>" +
    "<li>Third item</li>"

const id = document.createElement("id");
id.classList = "my-list";

console.log(id.outerHTML);

const target = document.getElementById("target");

function addClass() {
    target.className = "my-list";
}

addClass();

target.innerHTML = list

console.log(target.outerHTML);