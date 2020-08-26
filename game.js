import {update as updateSnake, draw as drawSnake, SNAKE_SPEED,
getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';

// Set up a game loop - game loop is a function that repeats
// over and over again on a set interval so render can be
// updated constantly

let lastRenderTime = 0;

let gameOver = false

const gameBoard = document.getElementById('game-board');




function main(currentTime) {

  if (gameOver) {
   //return alert ('You lose!');
   if(confirm('Game Over! Press OK to restart.')) {
     window.location = '/';
   }
   // if user does not press OK or exits abruptly
   // terminate the game
   return
  }

  // request frame to animate game
  // ask browser for when game can
  // be rendered
  // currentTime is the time
  // when the frame is going to be
  // rendered
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1/ SNAKE_SPEED) return;
  // console.log(secondsSinceLastRender);
  // console.log('Render');
  lastRenderTime = currentTime;

  update();
  draw();

}

// start loop for the first time
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  // Remove all previous pieces of
  // snake on draw - clear everything
  // in the view
  gameBoard.innerHTML= '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
