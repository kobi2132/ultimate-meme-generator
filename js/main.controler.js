'use strict'

var gElCanvas;
var gCtx;


function init() {
    gElCanvas = document.querySelector('#my-canvas');
    gCtx = gElCanvas.getContext('2d');


    renderGallery()
    addListeners()
    drawImgFromlocal()
    renderCanvas()
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}
function renderGallery() {
    var imgs = getImgs()
    var strHtml = imgs.map(img => {
        return `<img src="${img.url}" onclick="onUpdateCurrImg(${img.id})">`
    })
    document.querySelector('.gallery-container').innerHTML = strHtml.join('')
}

function renderCanvas() {
    renderMeme()
    gCtx.save()
    gCtx.restore()
}

function renderMeme() {
    var img = new Image()
    img.src = gCurrImg[0].url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText()
        drewSelectedLineFrame()
    }
}

function onUpdateCurrImg(id) {
    updateCurrImg(id)
    document.querySelector(".editor-content").hidden = false
    document.querySelector(".main-content").hidden = true
    drawImgFromlocal()
}

function drawImgFromlocal() {
    getCurrImg(gMeme)
    var img = new Image()
    img.src = gCurrImg[0].url
    var ch = (img.height * gElCanvas.width) / img.width
    gCurrCanvasHeight = ch
    changeCanvasHeight(ch)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, ch)
    }
}

function drawImgFromRemote() {
    var img = new Image()
    img.src = 'https://steamcdn-a.akamaihd.net/steam/apps/431960/ss_39ed0a9730b67a930acb8ceed221cc968bee7731.1920x1080.jpg?t=1571786836';
    var ch = (img.height * gElCanvas.width) / img.width
    changeCanvasHeight(ch)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, ch)
    }
}

function changeCanvasHeight(ch) {
    gElCanvas.height = ch
}

function drawText() {
    var lines = getLinesToRender()
    lines.map(line => {
        var text = line.txt;
        var x = line.x;
        var y = line.y;
        gCtx.beginPath();
        gCtx.lineWidth = 1.8;
        gCtx.strokeStyle = line.stroke;
        gCtx.fillStyle = line.fill;
        gCtx.textAlign = line.align;
        gCtx.font = line.size + 'px ' + line.font;
        gCtx.setLineDash([]);
        gCtx.fillText(text.toUpperCase(), x, y);
        gCtx.strokeText(text.toUpperCase(), x, y);
    })
}

function drewSelectedLineFrame() {
    var idx = getSelectedLineIdx()
    if (idx === null) return
    var line = getSelectedLine(idx)
    var txt = line.txt
    var widthText = gCtx.measureText(txt).width
    var heightText = gCtx.measureText(txt).fontBoundingBoxDescent + gCtx.measureText(txt).fontBoundingBoxAscent
    var x = line.x
    var y = line.y

    switch (line.align) {
        case 'center':
            x -= widthText / 2
            drewRect(x - 20, y - heightText, widthText + 40, heightText + 15)
            break;
        case 'right':
            x = line.x - widthText
            drewRect(x - 20, y - heightText, widthText + 40, heightText + 15)
            break;
        case 'left':
            drewRect(x - 20, y - heightText, widthText + 40, heightText + 15)
            break;
    }
}

function drewRect(x, y, w, h) {
    gCtx.beginPath();
    gCtx.setLineDash([5, 10]);
    gCtx.rect(x, y, w, h);
    gCtx.strokeStyle = 'white';

    gCtx.stroke();
}

function moveToGallery() {
    document.querySelector(".editor-content").hidden = true
    document.querySelector(".main-content").hidden = false
}
