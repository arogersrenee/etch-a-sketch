// Create the divs using JavaScript.

const container = document.getElementById('container');
const squares = document.getElementsByClassName('squares')

let grid = 16

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

createGrid(grid)
