'use strict'

var gCurrImg
var gKeywords = {
    'happy': 12,
    'funny': 8,
    'animal': 1,
    'woman': 3,
    'men': 2,
    'sad': 5
}
var gCurrCanvasHeight
var gTopLine = true;
var gBottomLine = false;

var gMeme = {
    selectesImgId: 2,
    selectedLineIdx: 0,
    lines: [{
        txt: 'insert your TXT here',
        size: 40,
        align: 'center',
        fill: 'white',
        stroke: 'black',
        font: 'impact',
        x: 225,
        y: 60,
        isDrag: false,
        isSelected: false,
    }]
}

var gImgs = [
    {
        id: 1,
        url: 'img/meme-imgs/1.jpg',
        keywords: ['happy']
    },
    {
        id: 2,
        url: 'img/meme-imgs/2.jpg',
        keywords: ['happy']
    },
    {
        id: 3,
        url: 'img/meme-imgs/3.jpg',
        keywords: ['happy']
    },
    {
        id: 4,
        url: 'img/meme-imgs/4.jpg',
        keywords: ['happy']
    },
    {
        id: 5,
        url: 'img/meme-imgs/5.jpg',
        keywords: ['happy']
    },
    {
        id: 6,
        url: 'img/meme-imgs/6.jpg',
        keywords: ['happy']
    },
    {
        id: 7,
        url: 'img/meme-imgs/7.jpg',
        keywords: ['happy']
    },
    {
        id: 8,
        url: 'img/meme-imgs/8.jpg',
        keywords: ['happy']
    },
    {
        id: 9,
        url: 'img/meme-imgs/9.jpg',
        keywords: ['happy']
    },
    {
        id: 10,
        url: 'img/meme-imgs/10.jpg',
        keywords: ['happy']
    },
    {
        id: 11,
        url: 'img/meme-imgs/11.jpg',
        keywords: ['happy']
    },
    {
        id: 12,
        url: 'img/meme-imgs/12.jpg',
        keywords: ['happy']
    },
    {
        id: 13,
        url: 'img/meme-imgs/13.jpg',
        keywords: ['happy']
    },
    {
        id: 14,
        url: 'img/meme-imgs/14.png',
        keywords: ['happy']
    },
    {
        id: 15,
        url: 'img/meme-imgs/15.jpg',
        keywords: ['happy']
    },
    {
        id: 16,
        url: 'img/meme-imgs/16.jpg',
        keywords: ['happy']
    },
    {
        id: 17,
        url: 'img/meme-imgs/17.jpg',
        keywords: ['happy']
    },
    {
        id: 18,
        url: 'img/meme-imgs/18.jpg',
        keywords: ['happy']
    },
    {
        id: 19,
        url: 'img/meme-imgs/19.jpg',
        keywords: ['happy']
    },
    {
        id: 20,
        url: 'img/meme-imgs/20.jpg',
        keywords: ['happy']
    },
    {
        id: 21,
        url: 'img/meme-imgs/21.jpg',
        keywords: ['happy']
    },
    {
        id: 22,
        url: 'img/meme-imgs/22.jpg',
        keywords: ['happy']
    },
    {
        id: 23,
        url: 'img/meme-imgs/23.jpg',
        keywords: ['happy']
    },
    {
        id: 24,
        url: 'img/meme-imgs/24.jpg',
        keywords: ['happy']
    },
    {
        id: 25,
        url: 'img/meme-imgs/25.jpg',
        keywords: ['happy']
    },
    {
        id: 26,
        url: 'img/meme-imgs/26.png',
        keywords: ['happy']
    },
    {
        id: 27,
        url: 'img/meme-imgs/27.png',
        keywords: ['happy']
    },
    {
        id: 28,
        url: 'img/meme-imgs/28.png',
        keywords: ['happy']
    },
    {
        id: 29,
        url: 'img/meme-imgs/29.png',
        keywords: ['happy']
    },
    {
        id: 30,
        url: 'img/meme-imgs/30.png',
        keywords: ['happy']
    },
    {
        id: 31,
        url: 'img/meme-imgs/31.png',
        keywords: ['happy']
    },
    {
        id: 32,
        url: 'img/meme-imgs/32.png',
        keywords: ['happy']
    },
    {
        id: 33,
        url: 'img/meme-imgs/33.png',
        keywords: ['happy']
    },
    {
        id: 34,
        url: 'img/meme-imgs/34.png',
        keywords: ['happy']
    },
    {
        id: 35,
        url: 'img/meme-imgs/35.png',
        keywords: ['happy']
    },
    {
        id: 36,
        url: 'img/meme-imgs/36.png',
        keywords: ['happy']
    },
    {
        id: 37,
        url: 'img/meme-imgs/37.png',
        keywords: ['happy']
    },
    {
        id: 38,
        url: 'img/meme-imgs/38.png',
        keywords: ['happy']
    },
    {
        id: 39,
        url: 'img/meme-imgs/39.png',
        keywords: ['happy']
    },
    {
        id: 40,
        url: 'img/meme-imgs/40.png',
        keywords: ['happy']
    },
    {
        id: 41,
        url: 'img/meme-imgs/41.png',
        keywords: ['happy']
    },
    {
        id: 42,
        url: 'img/meme-imgs/42.png',
        keywords: ['happy']
    },
    {
        id: 43,
        url: 'img/meme-imgs/43.jpeg',
        keywords: ['happy']
    },
    {
        id: 44,
        url: 'img/meme-imgs/44.jpeg',
        keywords: ['happy']
    }
]

function getCurrImg() {
    var imgId = gMeme.selectesImgId
    gCurrImg = gImgs.filter(function (img) {
        return img.id === imgId
    })
}

function getLinesToRender() {
    return gMeme.lines
}

function setText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function getImgs() {
    return gImgs
}

function updateCurrImg(id) {
    gMeme = {
        selectesImgId: id,
        selectedLineIdx: 0,
        lines: [{
            txt: 'insert your TXT here',
            size: 40,
            align: 'center',
            fill: 'white',
            stroke: 'black',
            font: 'impact',
            x: 225,
            y: 60,
            isDrag: false,
            isSelected: false,
        }]
    }
    gTopLine = true;
    gBottomLine = false;
    renderMeme()
}

// -------EDITOR-BUTTONS-------

function increaseText() {
    gMeme.lines[gMeme.selectedLineIdx].size++
    renderMeme()
}

function decreaseText() {
    gMeme.lines[gMeme.selectedLineIdx].size--
    renderMeme()
}

function moveUp() {
    gMeme.lines[gMeme.selectedLineIdx].y -= 2
    renderMeme()
}

function moveDown() {
    gMeme.lines[gMeme.selectedLineIdx].y += 2
    renderMeme()
}

function addNewLine() {

    if (!gTopLine) {
        gMeme.selectedLineIdx = 0
        gMeme.lines.splice(0, 0,
            {
                txt: 'insert your TXT here',
                size: 40,
                align: 'center',
                fill: 'white',
                stroke: 'black',
                font: 'impact',
                x: 225,
                y: 60,
                isDrag: false,
                isSelected: false,
            }
        )
        gTopLine = true
    }
    else if (!gBottomLine) {
        gMeme.selectedLineIdx = 1
        gMeme.lines.splice(1, 0,
            {
                txt: 'insert your TXT here',
                size: 40,
                align: 'center',
                fill: 'white',
                stroke: 'black',
                font: 'impact',
                x: 225,
                y: gCurrCanvasHeight - 40,
                isDrag: false,
                isSelected: false,
            }
        )
        gBottomLine = true
    }
    else {
        gMeme.selectedLineIdx = gMeme.lines.length
        gMeme.lines.push(
            {
                txt: 'insert your TXT here',
                size: 40,
                align: 'center',
                fill: 'white',
                stroke: 'black',
                font: 'impact',
                x: 225,
                y: gCurrCanvasHeight / 2,
                isDrag: false,
                isSelected: false,
            })
    }
    renderMeme()
}

function selectLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    }
    else gMeme.selectedLineIdx++
    renderMeme()
    onSetLineInInput(gMeme.lines[gMeme.selectedLineIdx].txt)
}

function selectedLineIdx() {
    return gMeme.selectedLineIdx
}

function selectedLine(id) {
    return gMeme.lines[id]
}

function deleteLine() {
    var idx = gMeme.selectedLineIdx
    if (idx === 0) gTopLine = false;
    if (idx === 1) gBottomLine = false;
    gMeme.lines.splice(idx, 1)
    if (gMeme.lines.length === 0) gMeme.selectedLineIdx = null
    gMeme.selectedLineIdx = null
    renderMeme()
}

function alignLeft() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    renderMeme()
}

function alignCenter() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    renderMeme()
}

function alignRight() {
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
    renderMeme()
}

function changeFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fill = color
    renderMeme()
}

function changeStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
    renderMeme()
}

function clearFrame() {
    gMeme.selectedLineIdx = null
    renderMeme()
}

function SetFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
    renderMeme()
}
