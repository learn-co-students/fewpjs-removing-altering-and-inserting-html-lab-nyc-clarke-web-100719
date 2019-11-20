document.querySelector('main').remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "Eli Kantor is the champion"
const ParentNode = document.body
ParentNode.append(newHeader)

const newHeader1 = document.createElement("h2")
newHeader1.id = "Not sure about victory"
newHeader1.textContent = "This will show up below the H1 tag"
const ParentNode1 = document.getElementById("victory")
ParentNode1.append(newHeader1)

const newDiv = document.createElement("div")
newDiv.id = "div1"
newDiv.textContent = "This is a new div"
const ChildNode = document.getElementById('victory')
ChildNode.append(newDiv) 

const newP = document.createElement("p")
newP.id = "p1"
newP.innerHTML = "This text is in a P tag"
const TestNode = document.getElementById('Not sure about victory')
TestNode.append(newP)


