let food = {x:0, y:0}




export function draw(gamBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gamBoard.appendChild(foodElement);

}
