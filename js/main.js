/* global data */

window.addEventListener('keydown', function (event) {
  if (event.key === 'w') {
    data.direction = 'north';
  } else if (event.key === 'a') {
    data.direction = 'west';
  } else if (event.key === 's') {
    data.direction = 'south';
  } else if (event.key === 'd') {
    data.direction = 'east';
  }
});
