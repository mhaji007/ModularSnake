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


export function onSnake(position) {
  // if any segment of snake has
  // the same position as food
  return snakeBody.some(segment => {
    return equalPositions(segment, position)
  })

}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y

}
