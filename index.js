let main = document.querySelector('#main').remove()

const newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerHTML = 'Barbara Muesing is the champion!'
newHeader.className = 'victory'

document.querySelector('body').appendChild(newHeader)