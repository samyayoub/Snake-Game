let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

// Canvas variables
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let gridSize = 20;

// Snake variables
let snakeX = canvasWidth / 2;
let snakeY = canvasHeight / 2;
let snakeSize = 20;
let directionX = 2;
let directionY = 2;

// Blocks variables
let blockSize = 20;
let blockX = randomBlockSpot(0, canvasWidth - blockSize);
let blockY = randomBlockSpot(0, canvasHeight - blockSize);

// Function to draw snake
function drawSnake() {
	ctx.beginPath();
	ctx.rect(snakeX, snakeY, snakeSize, snakeSize);
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

// Function to check when button is pressed
function keyDownHandler(e) {
	if (e.keyCode == 39) {
		// rightPressed = true;
		direction(2, 0);
	} else if (e.keyCode == 37) {
		// leftPressed = true;
		direction(-2, 0);
	} else if (e.keyCode == 38) {
		// upPressed = true;
		direction(0, -2);
	} else if (e.keyCode == 40) {
		// downPressed = true;
		direction(0, 2);
	}
}

function moveSnake() {
	snakeX += directionX;
	snakeY += directionY;
}

function direction(x, y) {
	directionX = x;
	directionY = y;
}

// Function to draw everything
function draw() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	// Check if snake hits any of the walls
	if (
		snakeX + snakeSize > canvasWidth ||
		snakeX < 0 ||
		snakeY + snakeSize > canvasHeight ||
		snakeY < 0
	) {
		alert("Hit a wall");
		document.location.reload();
	}

	drawSnake();
	drawBlocks();
	moveSnake();

	requestAnimationFrame(draw);
}

// Event listeners to the buttons
document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

draw();
