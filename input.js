//By default snake is not moving
let inputDirection = {x:0, y:0};
let lastInputDirection = {x:0, y:0};

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      // check whether we are already moving up or down
      // disable moving up
      if (lastInputDirection.y !==0) break
      inputDirection = {x: 0, y:-1}
      break
    case 'ArrowDown':
      // check whether we are already moving up or down
      // disable moving down
      if (lastInputDirection.y !==0) break
      inputDirection = {x:0, y:1}
      break
    case 'ArrowLeft':
      // check whether we are already moving left or right
      // disable moving left
      if (lastInputDirection.x !==0) break
      inputDirection = {x:-1, y:0}
      break
    case 'ArrowRight':
      // check whether we are already moving left or right
      // disable moving right
      if (lastInputDirection.x !==0) break
      inputDirection = {x:1, y:0}
      break
  }
})



export function getInputDirection(){
  lastInputDirection = inputDirection;
  return inputDirection;
}
