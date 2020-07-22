var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

// Canvas variables
var gridSize = 32;

// Snake variables
var snake = [];
snake[0] = {
	x: 9 * gridSize,
	y: 10 * gridSize,
};
let directionPressed;

// Food variables
var food = {
	x: Math.floor(Math.random() * 17 + 1) * gridSize,
	y: Math.floor(Math.random() * 15 * 3) * gridSize,
};

// Score variable
var score = 0;

document.addEventListener("keydown", direction);

function direction(e) {
	if (e.keyCode == 39) {
		directionPressed = "RIGHT";
	} else if (e.keyCode == 37) {
		directionPressed = "LEFT";
	} else if (e.keyCode == 38) {
		directionPressed = "UP";
	} else if (e.keyCode == 40) {
		directionPressed = "DOWN";
	}
}

// function to draw everything
function draw() {
	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = i === 0 ? "orange" : "white";
		ctx.fillRect(snake[i].x, snake[i].y, gridSize, gridSize);
		ctx.strokeStyle = "white";
		ctx.strokeRect(snake[i].x, snake[i].y, gridSize, gridSize);
	}

	// draw food
	ctx.rect(food.x, food.y, gridSize, gridSize);
	ctx.fillStyle = "white";
	ctx.fill();

	// Get old head position
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	// Remove the tail
	snake.pop();

	// Figure out which direction to move
	if (directionPressed == "LEFT") snakeX -= gridSize;
	if (directionPressed == "RIGHT") snakeX += gridSize;
	if (directionPressed == "UP") snakeY -= gridSize;
	if (directionPressed == "DOWN") snakeY += gridSize;

	// Add new head
	let newHead = {
		x: snakeX,
		y: snakeY,
	};

	snake.unshift(newHead);

	// draw score
	ctx.fillStyle = "white";
	ctx.font = "45px Arial one";
	ctx.fillText(score, 2 * gridSize, 1.6 * gridSize);
}
// Call draw() function every 100 ms
let game = setInterval(draw, 100);

// // Function to draw snake
// function drawSnake() {
// 	ctx.beginPath();
// 	ctx.rect(snakeX, snakeY, gridSize, gridSize);
// 	ctx.fillStyle = "orange";
// 	ctx.fill();
// 	ctx.closePath();
// }

// // Function to choose a random spot for the blocks
// // function randomBlockSpot(min, max) {
// // 	return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// // Function to choose a random spot for the blocks
// // function randomBlockSpot() {
// // 	cols = Math.floor(canvasWidth / gridSize);
// // 	rows = Math.floor(canvasHeight / gridSize);
// // }
// function randomBlockSpot() {
// 	blockX = Math.floor(Math.random() * (canvasWidth / gridSize));
// 	blockY = Math.floor(Math.random() * (canvasHeight / gridSize));
// }

// // Function to draw the random blocks on the canvas
// function drawBlocks() {
// 	ctx.beginPath();
// 	ctx.rect(blockX, blockY, gridSize, gridSize);
// 	ctx.fillStyle = "grey";
// 	ctx.fill();
// 	ctx.closePath();
// }

// // // Function to check for collision
// // function collisionDetector() {
// //     let block = 0;

// //     // Checking if the block is visible or not; if visible then change direction, change it invisible and increase score
// //     if (brickObject.status === 1) {
// //         if (x > brickObject.x && x < brickObject.x + brickWidth && y > brickObject.y && y < brickObject.y + brickHeight) {
// //             dy = -dy;
// //             brickObject.status = 0;
// //             score++;

// //             // Alert winning if all bricks are cleared
// //             if (score == brickRowCount * brickColumnCount) {
// //                 alert("You did it. Congrats!");
// //                 document.location.reload();
// //             }
// //         }
// //     }
// // }
// //     }
// // }

// // Function to check when button is pressed
// function keyDownHandler(e) {
// 	if (e.keyCode == 39) {
// 		// rightPressed = true;
// 		direction(1, 0);
// 	} else if (e.keyCode == 37) {
// 		// leftPressed = true;
// 		direction(-1, 0);
// 	} else if (e.keyCode == 38) {
// 		// upPressed = true;
// 		direction(0, -1);
// 	} else if (e.keyCode == 40) {
// 		// downPressed = true;
// 		direction(0, 1);
// 	}
// }

// // Function to move snake
// function moveSnake() {
// 	snakeX = snakeX + directionX * gridSize;
// 	snakeY = snakeY + directionY * gridSize;

// 	snakeX =
// 		snakeX < 0
// 			? 0
// 			: snakeX > canvasWidth - gridSize
// 			? canvasWidth - gridSize
// 			: snakeX;

// 	snakeY =
// 		snakeY < 0
// 			? 0
// 			: snakeY > canvasHeight - gridSize
// 			? canvasHeight - gridSize
// 			: snakeY;

// 	// snakeX =
// 	// 	snakeX > canvasWidth ? canvasWidth - gridSize : snakeX < 0 ? 0 : snakeX;
// 	// snakeY =
// 	// 	snakeY > canvasHeight ? canvasHeight - gridSize : snakeY < 0 ? 0 : snakeY;
// }

// // function to select the direction of snake
// function direction(x, y) {
// 	directionX = x;
// 	directionY = y;
// }

// // // Function to draw everything
// // function draw() {
// // 	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

// // 	// Check if snake hits any of the walls
// // 	if (
// // 		snakeX + snakeSize > canvasWidth ||
// // 		snakeX < 0 ||
// // 		snakeY + snakeSize > canvasHeight ||
// // 		snakeY < 0
// // 	) {
// // 		// alert("Hit a wall");
// // 		console.log("something");
// // 		document.location.reload();
// // 	}

// // 	drawSnake();
// // 	drawBlocks();
// // 	moveSnake();

// // 	requestAnimationFrame(draw);
// // }

// // Event listeners to the buttons
// document.addEventListener("keydown", keyDownHandler, false);

// draw();
