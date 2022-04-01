const grid = document.querySelector('#grid');
let size = 24
let penColor = '#4A0D67'
let colorDisplay = document.querySelector('#currentColor')

function gridLayout(size){
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}

makeGrid()

function makeGrid(){
    for(let i = 0; i < size * size; i++){
        let square = document.createElement('div')
        square.addEventListener('mouseenter', color)
        square.classList.add('square')
        grid.appendChild(square)
    }
}

function color(e){
    e.target.style.backgroundColor = penColor
}

const reset = document.querySelector('#reset')
let allSquares = document.querySelectorAll('.square')
reset.addEventListener('click', resetSquares)

function resetSquares(e){
    for(let i = 0; i < allSquares.length; i++ ){
        allSquares[i].style.backgroundColor = 'transparent';
    }
}

const colorPicker = document.querySelector('#colorPicker')
colorPicker.addEventListener('input', pickColor)

function pickColor(){
    penColor = colorPicker.value;
    colorDisplay.style.backgroundColor = penColor
}

const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', erase)

function erase(){
    penColor = 'transparent'
    colorDisplay.style.backgroundColor = 'white'
}

let gridSize = document.querySelector('#gridSize')
gridSize.addEventListener('change', setSize)

function setSize(){
    removeGrid(grid);
    size = gridSize.value;
    gridLayout(size);
    makeGrid()
    allSquares = document.querySelectorAll('.square')
}

gridLayout(size)

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function hideGrid(e){
    for(let i = 0; i < allSquares.length; i++ ){
        allSquares[i].style.outline = 'transparent';
    }
}

function showGrid(e){
    for(let i = 0; i < allSquares.length; i++ ){
        allSquares[i].style.outline = 'rgba(11, 112, 243, 0.3) solid 1px';
    }
}

const hide = document.querySelector('#hide');
hide.addEventListener('click', hideGrid)

const show = document.querySelector('#show')
show.addEventListener('click', showGrid)
