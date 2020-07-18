let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

// // variables
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let blockSize = 20;
let snake = [];
let xCetner = canvasWidth / 2;

// Function to draw snake
function drawSnake() {
    ctx.beginPath();
    ctx.rect(xCetner, canvasHeight / 2, 20, 20);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();

    xCetner += 3;
    moveSnake();
}

function moveSnake() {
    ctx.beginPath();
    ctx.rect(xCetner, canvasHeight / 2, 20, 20);
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
    // if (!block) {
    // x and y positioins to draw the box
    let blockX = randomBlockSpot(0, canvasWidth) - (blockSize * 2);
    let blockY = randomBlockSpot(0, canvasHeight) - (blockSize * 2);
    ctx.beginPath();
    ctx.rect(blockX, blockY, blockSize, blockSize);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();
    // }
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
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

// Function to check whenever button is released
function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

// Function to draw everything
function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    drawSnake();
    drawBlocks();

    requestAnimationFrame(draw);
}

// Event listeners to the buttons
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

draw();