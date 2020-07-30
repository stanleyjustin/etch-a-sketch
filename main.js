const container = document.querySelector("#container");
//delare beginning rows and cols
let grid = 16;

//create columns and loop createCell
function createGrid() {
    document.getElementById("container").style.gridTemplateColumns = `repeat(${grid}, auto)`;
    for (r = 0; r < (grid*grid); r++) {
        createCell();
    }
}

//create cells in the form of divs
function createCell() {
    let divCell = document.createElement("div");
    divCell.id = "divBox";
    divCell.style.background = "white";
    divCell.style.border = "none";
    document.getElementById("container").appendChild(divCell);
    //event listener to change div color on mouseover
    divCell.addEventListener("mouseover", function shadeSolid () {
        divCell.style.background = "black";
        divCell.style.border = "black";
    });
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

//creates new grid from user prompt
function newGrid() {
    let userGrid = prompt("Enter new density between 1 and 100");
    if (userGrid != null && userGrid > 0 && userGrid < 100) {
    document.getElementById("container").style.gridTemplateColumns = `repeat(${userGrid}, auto)`;
    for (i = 0; i < (userGrid*userGrid); i++) {
        createCell(userGrid);
    }
    } else {
        alert("Error: please enter a valid number between 1 and 100");
    }
}

//Create colors
function rainbowCell() {
    let divCell = document.createElement("div");
    divCell.id = "divBox";
    divCell.style.background = "white";
    divCell.style.border = "none";
    document.getElementById("container").appendChild(divCell);
    //event listener to change div color on mouseover
    divCell.addEventListener("mouseover", function shadeRainbow () {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        divCell.style.background = "#" + randomColor;
        divCell.style.border = "#" + randomColor;
    });
}
function clearRainbow() {
    const container = document.querySelector("#container");
    const containerChildren = document.querySelectorAll("#divBox");
    containerChildren.forEach(child => {
        container.removeChild(child);
    });
    newRainbow();
}
function newRainbow() {
    let userGrid = prompt("Enter new density between 1 and 100");
    if (userGrid != null && userGrid > 0 && userGrid < 100) {
    document.getElementById("container").style.gridTemplateColumns = `repeat(${userGrid}, auto)`;
    for (i = 0; i < (userGrid*userGrid); i++) {
        rainbowCell(userGrid);
    }
    } else {
     alert("Error: please enter a valid number between 1 and 100");   
    }
}




