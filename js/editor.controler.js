'use strict'


function onIncreaseText() {
    increaseText()
}

function onDecreaseText() {
    decreaseText()
}

function onMoveUp() {
    moveUp()
}

function onMoveDown() {
    moveDown()
}

function onAddNewLine() {
    addNewLine()
    document.querySelector('#txt').value = ''
}

function onSelectLine() {
    selectLine()
}

function onSetLineInInput(txt) {
    document.querySelector('#txt').value = txt
}

function getSelectedLineIdx() {
    return selectedLineIdx()
}

function getSelectedLine(id) {
    return selectedLine(id)
}

function onDeleteLine() {
    deleteLine()
}

function onAlignLeft() {
    alignLeft()
}

function onAlignCenter() {
    alignCenter()
}

function onAlignRight() {
    alignRight()
}

function onSetFont(font) {
    SetFont(font)
}

function onChangeFillColor(color) {
    changeFillColor(color)
}

function onChangeStrokeColor(color) {
    changeStrokeColor(color)
}

function onDownloadCanvas(elLink) {
    clearFrame()
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    console.log(data);
    elLink.download = 'My-Canvas'
}
