const container = document.querySelector("#container");
//delare beginning rows and cols
const grid = 16;

//create div
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

//loop that creates a grid of 'r' iterations
function createGrid() {
    for (r = 0; r < (grid*grid); r++) {
        createCell();
    }
}

function resetGrid() {
    createGrid();
}



