const grid = document.querySelector('#grid');
let size = 24
let penColor = '#209D88'

function gridLayout(size){
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}



for(let i = 0; i < size * size; i++){
    let square = document.createElement('div')
    square.addEventListener('mouseenter', color)
    square.classList.add('square')
    grid.appendChild(square)
}

function color(e){
    e.target.style.backgroundColor = penColor
}

const reset = document.querySelector('#reset')
const allSquares = document.querySelectorAll('.square')
reset.addEventListener('click', test)

function test(e){
    for(let i = 0; i < allSquares.length; i++ ){
        allSquares[i].style.backgroundColor = 'transparent';
    }
}

const colorPicker = document.querySelector('#colorPicker')
colorPicker.addEventListener('input', pickColor)

function pickColor(){
    penColor = colorPicker.value;
    console.log(penColor)
    return penColor
}

const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', erase)

function erase(){
    penColor = 'transparent'
    return penColor
}

let gridSize = document.querySelector('#gridSize')
gridSize.addEventListener('change', setSize)

function setSize(){
    size = gridSize.value
    return size
}

gridLayout(size)