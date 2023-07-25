// Create the divs using JavaScript.

const container = document.getElementById('container');
const squares = document.getElementsByClassName('squares')
const numOfSquaresBtn = document.getElementById('input')
const resetBtn = document.getElementById('reset')

//initial grid on load
let grid = 32
createGrid(grid)
draw()

numOfSquaresBtn.addEventListener('click', getNumberofSquares)

resetBtn.addEventListener('click', clearCanvas)

function getNumberofSquares() {
    grid = prompt("How many squares per side would you like? Max = 100");
    if(grid <= 100){    
    removeGrid();
    createGrid(grid);
    draw();
    } else {
        alert("Grid must be less than 100 per side");
        getNumberofSquares();
    }
}

function createGrid(grid){
    grid **=2
    for(let i = 0; i < grid; i++){
        const square = document.createElement('div');
        square.className = "squares";
        container.appendChild(square);
        square.style.width = (500 / Math.sqrt(grid)) + "px"; // 500 = container width... must match
    }
}

// function remove the grid child elements
function removeGrid(){
    last = container.lastElementChild;
    while(last) {
        last.remove();
        last = container.lastElementChild
    }
}

// * add “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. */
function draw() {
    for(i = 0; i < squares.length; i++){
    squares[i].addEventListener('mouseover', function (){
        this.style.backgroundColor = "#000" // why did "this" work?
    } )
}}

function clearCanvas() {
    for(i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = "#fff" 
    }
}

//reset button

