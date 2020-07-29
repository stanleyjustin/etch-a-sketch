const container = document.querySelector("#container");
//delare beginning rows and cols
let grid = 16;

//create cells in the form of divs
function createCell() {
    let divCell = document.createElement("div");
    divCell.id = "divBox";
    divCell.style.background = "white";
    divCell.style.border = "1px dotted grey";
    document.getElementById("container").appendChild(divCell);
    //event listener to change div color on mouseover
    divCell.addEventListener("mouseover", function shadeSolid () {
        divCell.style.background = "black";
        divCell.style.border = "black";
    });
}

//create columns and loop createCell
function createGrid() {
    document.getElementById("container").style.gridTemplateColumns = `repeat(${grid}, auto)`;
    for (r = 0; r < (grid*grid); r++) {
        createCell();
    }
}

//creates new grid from user prompt
function newGrid() {
    let userGrid = prompt("Enter your dimensions as a single number");
    document.getElementById("container").style.gridTemplateColumns = `repeat(${userGrid}, auto)`;
    for (i = 0; i < (userGrid*userGrid); i++) {
        createCell(userGrid);
    }
}

//clear existing grid then run function newGrid
function clearGrid() {
    const container = document.querySelector("#container");
    const containerChildren = document.querySelectorAll("#divBox");
    containerChildren.forEach(child => {
        container.removeChild(child);
    });
    newGrid();
}






