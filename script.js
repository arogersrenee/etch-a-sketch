// Create the divs using JavaScript.

const container = document.getElementById('container');
const squares = document.getElementsByClassName('squares')

let grid = 32

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

// * add “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would. */
for(i = 0; i < squares.length; i++){
    squares[i].addEventListener('mouseover', function (){
        this.style.backgroundColor = "red" // why did "this" work?
    } )
}
