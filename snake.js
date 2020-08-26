import {getInputDirection} from './input.js';

export const SNAKE_SPEED = 5;
// Snake body is made of segments
// which in turn is made of
// coordinates on the grid system
const snakeBody = [
  {x:11, y:11}, // middle of the grid
]


let newSegments = 0; // By default snake is not growing

export function update() {

  addSegments();

  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >=0; i--) {
    // shifting every piece forward a positon
    // to where the parent element was
    snakeBody[i+1] = {...snakeBody[i]}
  }

  // snakeBody[0].x +=0;
  // snakeBody[0].y +=1; // Y increases as we move down

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y // Y increases as we move down
}

export function draw(gamBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gamBoard.appendChild(snakeElement);

  });
}

export function expandSnake(amount) {
  newSegments += amount;
}


export function onSnake(position, {ignoreHead = false} = {}) {
  // if any segment of snake has
  // the same position as food
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  })

}

export function getSnakeHead() {

  return snakeBody[0];

}

// Check the head against every other position on the snake
export function snakeIntersection() {
// Without passing the ignoreHead parameter the Onsnake
// compares head with head and always returns true
  return onSnake(snakeBody[0], {ignoreHead: true})

}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y

}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
  }

  newSegments = 0 ; // prevents from adding segments except the number told
  // whithout the above line snake will constatnly expand its segments
}
