var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

// // variables
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let blockSize = 20;

// Function to draw snake
function drawSnake() {
    ctx.beginPath();
    ctx.rect(canvasWidth / 2, canvasHeight / 2, 20, 20);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
}

// Function to choose a random spot for the blocks
function randomBlockSpot(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to draw the random blocks on the canvas
function drawBlocks() {
    ctx.beginPath();
    ctx.rect((randomBlockSpot(0, canvasWidth) - blockSize), (randomBlockSpot(0, canvasHeight) - blockSize), blockSize, blockSize);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();
}

// Function to draw everything
function draw() {
    drawSnake();
    drawBlocks();
}

draw();