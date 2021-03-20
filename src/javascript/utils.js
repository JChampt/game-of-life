import { GRID } from './makeGrid';

export function* stepThroughGrid() {
  for (let row = 0; row < GRID.length; row++) {
    for (let col = 0; col < GRID[row].length; col++) {
      yield [GRID[row][col], row, col];
    }
  }
}

export function random() {
  return Math.round(Math.random());
}

export function stopAnimationAndResetCounter() {
  const startButton = document.querySelector('#start');

  startButton.dataset.start = 'false';
  startButton.children[0].innerText = 'play_arrow';

  document.querySelector('#generation').innerText = 'generation: 0';
}
