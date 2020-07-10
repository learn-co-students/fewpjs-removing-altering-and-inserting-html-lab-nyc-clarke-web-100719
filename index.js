// Write your code here!

let element = document.getElementById("main");

element.remove();

let h = document.createElement("h1");
h.classList.add("victory");
h.id = "victory";


let newHeader = h;

h.innerHTML = "YOUR-NAME is the champion";