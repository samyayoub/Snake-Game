var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

// Canvas variables
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var gridSize = 20;

// Snake variables
var snakeX = canvasWidth / 2;
var snakeY = canvasHeight / 2;
var snakeSize = 20;
var directionX = 1;
var directionY = 0;

// Blocks variables
var blockSize = 20;
var cols, rows;
// var blockX = randomBlockSpot(0, cols);
// var blockY = randomBlockSpot(0, rows);
var blockX = randomBlockSpot();
var blockY = randomBlockSpot();
var cols = Math.floor(canvasWidth / gridSize);
var rows = Math.floor(canvasHeight / gridSize);

// Function to draw snake
function drawSnake() {
	ctx.beginPath();
	ctx.rect(snakeX, snakeY, gridSize, gridSize);
	ctx.fillStyle = "orange";
	ctx.fill();
	ctx.closePath();
}

// Function to choose a random spot for the blocks
// function randomBlockSpot(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Function to choose a random spot for the blocks
// function randomBlockSpot() {
// 	cols = Math.floor(canvasWidth / gridSize);
// 	rows = Math.floor(canvasHeight / gridSize);
// }
function randomBlockSpot() {
	blockX = Math.floor(Math.random() * (canvasWidth / gridSize));
	blockY = Math.floor(Math.random() * (canvasHeight / gridSize));
}

// Function to draw the random blocks on the canvas
function drawBlocks() {
	ctx.beginPath();
	ctx.rect(blockX, blockY, gridSize, gridSize);
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
		direction(1, 0);
	} else if (e.keyCode == 37) {
		// leftPressed = true;
		direction(-1, 0);
	} else if (e.keyCode == 38) {
		// upPressed = true;
		direction(0, -1);
	} else if (e.keyCode == 40) {
		// downPressed = true;
		direction(0, 1);
	}
}

// Function to move snake
function moveSnake() {
	snakeX = snakeX + directionX * gridSize;
	snakeY = snakeY + directionY * gridSize;

	snakeX =
		snakeX < 0
			? 0
			: snakeX > canvasWidth - gridSize
			? canvasWidth - gridSize
			: snakeX;

	snakeY =
		snakeY < 0
			? 0
			: snakeY > canvasHeight - gridSize
			? canvasHeight - gridSize
			: snakeY;

	// snakeX =
	// 	snakeX > canvasWidth ? canvasWidth - gridSize : snakeX < 0 ? 0 : snakeX;
	// snakeY =
	// 	snakeY > canvasHeight ? canvasHeight - gridSize : snakeY < 0 ? 0 : snakeY;
}

// function to select the direction of snake
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
		// alert("Hit a wall");
		console.log("something");
		document.location.reload();
	}

	drawSnake();
	drawBlocks();
	moveSnake();

	requestAnimationFrame(draw);
}

// Event listeners to the buttons
document.addEventListener("keydown", keyDownHandler, false);

draw();
