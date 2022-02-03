const sketchboard = document.querySelector(".sketch_board");
const palette = document.querySelector(".palette");
const random = document.querySelector(".random");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");


// =======================================================
let tile;
for (let i = 1; i <= 64 * 64; i++) {
    tile = document.createElement('div');

    sketchboard.appendChild(tile);
    tile.classList.add("tile");
    tile.style.width = `${400 / 64}px`;
    tile.style.height = `${400 / 64}px`;
    tile.addEventListener('mouseover', addcolor, false);
}

// =======================================================
color = 'black';
function addcolor() {
    this.style.backgroundColor = color;
}

// =======================================================

palette.addEventListener('change', () => {
    color = `${palette.value}`
})

// =======================================================

clear.addEventListener('click', () => {
    tilelist = document.querySelectorAll('.tile');
    tilelist.forEach((tile) => {
        tile.style.backgroundColor = '#ffffff';
    });
})

// =======================================================

random.addEventListener('click', () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor)
    color = '#' + randomColor
    palette.value = color
})

// =======================================================

eraser.addEventListener('click', () => {
    color = 'white'
})
