import {onSnake, expandSnake} from './snake.js';
import {randomGridPosition} from './grid.js';

let food = randomGridPosition(); //{x:10, y:1} // CSS grid starts at 1 - y:0 lies outside the grid

const EXPANSION_RATE = 1; // the amount snake grows by eating a single food


export function update() {
  // check whether the food is on snake
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food =  randomGridPosition();//{x:Math.floor(Math.random(21))+1, y:Math.floor(Math.random(21))+1};
  }

}


export function draw(gamBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gamBoard.appendChild(foodElement);

}

// Returns a new food position that is not already on the snake
function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPostion();
  }
  return newFoodPosition;
}
