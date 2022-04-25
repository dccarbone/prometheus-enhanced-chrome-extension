function addPanel(panel) {
    if (lastPanel >= 5) {
        alert("You can add up to 5 panels")
    } else {
        lastPanel++
        const elemButton = document.createElement('button')
        elemButton.setAttribute('type', 'button')
        elemButton.setAttribute('onClick', 'selectPanel(' + lastPanel + ')')

        elemButton.classList.add('btn')
        elemButton.classList.add(colors[lastPanel - 1])
        elemButton.textContent = 'Panel ' + lastPanel
        document.getElementById('panel-buttons').appendChild(elemButton)
    }

}

function hidePanel(panel) {

    panel.style.opacity = 0
    panel.style.top = "181px"
    panel.style.position = 'fixed'
    panel.style.zIndex = -1
    panel.style.width = "95%"
    panel.style.overflowY = "scroll"
    panel.style.height = "80%"

}

function selectPanel(id) {
    panels = document.getElementsByClassName('panel')

    for (const item of panels) {
        hidePanel(item)
    }

    panels[id - 1].style['opacity'] = 100
    panels[id - 1].style.top = "181px"
    panels[id - 1].style.position = 'fixed'
    panels[id - 1].style.zIndex = 100
    panels[id - 1].style.width = "95%"
    panels[id - 1].style.overflowY = "scroll"
    panels[id - 1].style.height = "80%"


}

function addPanelButtonClick() {
    if (lastPanel >= 5) {
        alert("You can add up to 5 panels")
    } else {
        lastPanel++
        // addPanelButton = document.querySelector("#root > div > button")
        addPanelButton = document.querySelector("button.d-block.mb-3.btn.btn-primary")
        addPanelButton.click()
        panels = document.getElementsByClassName('panel')
        for (const item of panels) {
            hidePanel(item)
        }
        selectPanel(panels.length)

        const elemButton = document.createElement('button')
        elemButton.setAttribute('type', 'button')
        elemButton.setAttribute('onClick', 'selectPanel(' + lastPanel + ')')

        elemButton.classList.add('btn')
        elemButton.classList.add(colors[lastPanel - 1])
        elemButton.textContent = 'Panel ' + lastPanel
        document.getElementById('panel-buttons').appendChild(elemButton)

        replaceLastRemovePanelButton()
    }

}

function removePanel(id) {
    removeButtons = document.querySelectorAll("button.float-right.btn.btn-link.btn-sm")
    removeButtons[id].click()
    location.reload()
}

function replaceRemovePanelButton() {
    count = 0
    removeButtons = document.querySelectorAll("button.float-right.btn.btn-link.btn-sm")
    for (const item of removeButtons) {
        item.style.visibility = "hidden"
        const elem = document.createElement("button")
        elem.textContent = "Remove Panel " + (count + 1)
        elem.setAttribute('type', 'button')
        elem.classList.add('btn')
        elem.classList.add('btn-labeled')
        elem.classList.add(colors[count])
        elem.style.marginTop = "15px"
        elem.setAttribute('onClick', 'removePanel(' + count + ')')

        item.parentNode.appendChild(elem)

        count++
        // item.addEventListener("click", () => { currentClick(); location.reload(); });
    }
}


function replaceLastRemovePanelButton() {

    removeButtons = document.querySelectorAll("button.float-right.btn.btn-link.btn-sm")
    removeButtons[removeButtons.length - 1].style.visibility = "hidden"

    const elem = document.createElement("button")
    elem.textContent = "Remove Panel " + removeButtons.length
    elem.setAttribute('type', 'button')
    elem.classList.add('btn')
    elem.classList.add(colors[removeButtons.length - 1])
    elem.style.marginTop = "15px"
    elem.setAttribute('onClick', 'removePanel(' + (removeButtons.length - 1) + ')')

    removeButtons[removeButtons.length - 1].parentNode.appendChild(elem)


}

// let colors = ["btn-danger", "btn-success", "btn-warning", "btn-primary", "btn-light", "btn-dark", "btn-danger", "btn-success", "btn-warning", "btn-primary", "btn-light", "btn-dark"]
// let colors = ["btn-light", "btn-light", "btn-light", "btn-light", "btn-light", "btn-light", "btn-light", "btn-light", "btn-light", "btn-light", "btn-light", "btn-light"]
let colors = ["btn-dark", "btn-dark", "btn-dark", "btn-dark", "btn-dark", "btn-dark", "btn-dark", "btn-dark", "btn-dark", "btn-dark", "btn-dark", "btn-dark"]
let panels = []
let lastPanel = 0
const elem = document.createElement('div');
elem.innerHTML = `
<div class="btn-group" role="group" aria-label="Basic example" id='panel-buttons' style="opacity: 0.9   ">
</div>
<div class="btn-group" role="group" aria-label="Basic example" id='add-panel'>
<button type="button" class="btn btn-secondary" onClick="addPanelButtonClick()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg></button>
</div>
<hr>
<div id="panels" style="width: 100%; helght: 200px;">
</div>
`;

// Creates a new Add Panel button and hides the official
let clearfix = document.getElementsByClassName('clearfix')[0]
clearfix.parentNode.insertBefore(elem, clearfix.nextSibling);
document.querySelector("button.d-block.mb-3.btn.btn-primary").style.visibility = 'hidden'

// Creates all panel buttons
panels = document.getElementsByClassName('panel')
let count = 0
for (const item of panels) {

    addPanel(item)
    if (count > 0) {
        hidePanel(item)
    }
    count++

}

// When the extension is loaded, all Remove Panel links are replaced
replaceRemovePanelButton()


