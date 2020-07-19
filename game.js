let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

// // variables
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let blockSize = 20;
let snake = [];
let snakeX = canvasWidth / 2;
let snakeY = canvasHeight / 2;
let directionX = 3;
let directionY = 3;
let snakeSize = 20;
let noOfBoxesOnCanvas = 1;

// variables for buttons pressed
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

// Function to draw snake
function drawSnake() {
    ctx.beginPath();
    ctx.rect(snakeX, snakeY, snakeSize, snakeSize);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();

    // snakeX += 3;
    // moveSnake();
}

// function moveSnake() {
//     ctx.beginPath();
//     ctx.rect(snakeX, snakeY, 20, 20);
//     ctx.fillStyle = "orange";
//     ctx.fill();
//     ctx.closePath();

// }

// Function to choose a random spot for the blocks
function randomBlockSpot(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to draw the random blocks on the canvas
function drawBlocks() {
    // x and y positioins to draw the box
    let blockX = randomBlockSpot(0, canvasWidth - blockSize);
    let blockY = randomBlockSpot(0, canvasHeight - blockSize);
    ctx.beginPath();
    ctx.rect(blockX, blockY, blockSize, blockSize);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();
}

// // Function to check for collision
// function collisionDetector() {
//     let block = 0;

//     // Checking if the block is visible or not; if visible then change direction, change it invisible and increase score
//     if (brickObject.status === 1) {
//         if (x > brickObject.x && x < brickObject.x + brickWidth && y > brickObject.y && y < brickObject.y + brickHeight) {
//             dy = -dy;
//             brickObject.status = 0;
//             score++;

//             // Alert winning if all bricks are cleared
//             if (score == brickRowCount * brickColumnCount) {
//                 alert("You did it. Congrats!");
//                 document.location.reload();
//             }
//         }
//     }
// }
//     }
// }

// Function to check whenever button is pressed
function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

// Function to check whenever button is released
function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

// Function to draw everything
function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    drawSnake();
    if (noOfBoxesOnCanvas === 1) {
        drawBlocks();
    }

    // Check if snake hits any of the walls
    if (((snakeX + snakeSize) > canvasWidth) ||
        (snakeX < 0) ||
        ((snakeY + snakeSize) > canvasHeight) ||
        (snakeY < 0)) {
        // alert("Hit a wall");
    }

    if (leftPressed) {
        snakeX -= 3;
    } else if (rightPressed) {
        snakeX += 3;
    } else if (upPressed) {
        snakeY -= 3;
    } else if (downPressed) {
        snakeY += 3;
    }

    requestAnimationFrame(draw);
}

// Event listeners to the buttons
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

draw();