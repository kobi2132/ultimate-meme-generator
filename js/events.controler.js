'use strict'


function addListeners() {
    addMouseListeners()
    addTouchListeners()
    addTextListeners()
}

function addTextListeners() {
    var elText = document.querySelector("#txt");
    elText.addEventListener("input", onUpdateText, false);
}

function onUpdateText(event) {
    var text = event.target.value;
    setText(text)
    renderCanvas();
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    // const pos = getEvPos(ev)
    // creatShape(pos)
    // gStartPos = pos
    // gShape.selected = true
    // drawShape(pos.x, pos.y)
}

function onMove(ev) {
    // if (gShape.selected) {
    //     const pos = getEvPos(ev)
    //     gStartPos = pos
    //     drawShape(pos.x, pos.y)
    // }
}

function onUp() {
    // gShape.selected = false
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}