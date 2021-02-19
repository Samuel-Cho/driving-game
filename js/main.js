/* global data */

var $car = document.querySelector('.race-car');
var offsetX = 0;
// var offsetY = 0;
// var intervalID = null;

window.addEventListener('keydown', function (event) {
  if (event.key === 'w') {
    data.direction = 'north';
    $car.className = 'north race-car';
  } else if (event.key === 'a') {
    data.direction = 'west';
    $car.className = 'west race-car';
  } else if (event.key === 's') {
    data.direction = 'south';
    $car.className = 'south race-car';
  } else if (event.key === 'd') {
    data.direction = 'east';
    $car.className = 'east race-car';
  } else if (event.key === ' ') {
    setInterval(moveCar, 16);
  }
});

function moveCar() {
  if ($car.className === 'east race-car') {
    offsetX += 5;
    $car.style.left = offsetX + 'px';
  }
  data.xCoord = offsetX;
}
