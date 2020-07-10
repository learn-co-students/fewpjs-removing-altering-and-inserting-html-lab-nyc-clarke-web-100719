// Write your code here!

document.querySelector('main').remove();

let h1Element = document.createElement('h1');
let newHeader = document.body.appendChild(h1Element);
newHeader.classList.add('victory');
newHeader.id = 'victory';
h1Element.innerHTML = "YOUR-NAME is the champion"