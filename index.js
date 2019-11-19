// Write your code here!

let main = document.querySelector('main').remove();
let newMarquee = document.createElement('marquee');
let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Jack is the champion. Fuck you danny";
document.body.appendChild(newMarquee);
newMarquee.appendChild(newHeader);