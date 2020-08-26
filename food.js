import {onSnake, expandSnake} from './snake.js';

let food = {x:10, y:1} // CSS grid starts at 1 - y:0 lies outside the grid

const EXPANSION_RATE = 1; // the amount snake grows by eating a single food


export function update() {
  // check whether the food is on snake
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = {x:20, y:10};
  }

}


export function draw(gamBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gamBoard.appendChild(foodElement);

}

