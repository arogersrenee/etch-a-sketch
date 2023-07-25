// Create the divs using JavaScript.

const container = document.getElementById('container');
const squares = document.getElementsByClassName('squares')
const numOfSquaresBtn = document.getElementById('input')


let grid = 32
createGrid()
draw()

numOfSquaresBtn.addEventListener('click', getNumberofSquares)

function getNumberofSquares (){
    let grid = prompt("How many squares per side would you like? Max = 100");
    if(grid <= 100){    
    removeGrid();
    createGrid(grid);
    draw();
    } else {
        alert("Grid must be less than 100 per side");
    }
}



function createGrid(grid){
    grid **=2
    for(let i = 0; i < grid; i++){
        const square = document.createElement('div');
        square.className = "squares";
        container.appendChild(square);
        square.style.width = (500 / Math.sqrt(grid)) + "px";
        // square.style.height = (500 / Math.sqrt(grid)) + "px";
    }
}

// function remove the grid child elements
function removeGrid(){
    let gridContainer = document.getElementById('container');
    last = gridContainer.lastElementChild;
    while(last) {
        last.remove();
        last = gridContainer.lastElementChild
    }
}

// * add “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. */
function draw() {
    for(i = 0; i < squares.length; i++){
    squares[i].addEventListener('mouseover', function (){
        this.style.backgroundColor = "red" // why did "this" work?
    } )
}}