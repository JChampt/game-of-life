import { GRID } from './makeGrid';
import { stepThroughGrid } from './utils';

async function animateGrid() {
  const playButton = document.querySelector('.play');
  const animationDelay = 333;

  while (playButton.dataset.play == 'true') {
    theNextGeneration();
    await sleep(animationDelay);
  }

  function sleep(milliseconds) {
    // Code from: https://www.sitepoint.com/delay-sleep-pause-wait/
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
}

function theNextGeneration() {
  updateGridFromTemplate(makeNextGenTemplate());
  incGenCounter();
}

function updateGridFromTemplate(template) {
  for (const [cell, row, col] of stepThroughGrid()) {
    cell.checked = template[row][col] ? true : false;
  }
}

function makeNextGenTemplate() {
  let template = Array(GRID.length)
    .fill(0)
    .map((row) => Array(GRID[row].length).fill(0));

  for (const [cell, row, col] of stepThroughGrid()) {
    let cellTotal = getCellTotal(row, col);

    if (cell.checked) {
      template[row][col] = cellTotal == 3 || cellTotal == 4 ? 1 : 0;
    } else {
      template[row][col] = cellTotal == 3 ? 1 : 0;
    }
  }
  return template;
}

function getCellTotal(row, col) {
  const leftBound = col - 1 < 0 ? col : col - 1;

  let rowAbove = GRID[row - 1] ? GRID[row - 1].slice(leftBound, col + 2) : [];
  let rowOn = GRID[row].slice(leftBound, col + 2);
  let rowBelow = GRID[row + 1] ? GRID[row + 1].slice(leftBound, col + 2) : [];

  return rowAbove
    .concat(rowOn, rowBelow)
    .reduce((total, cell) => total + (cell.checked == true ? 1 : 0), 0);
}

const generation = document.querySelector('#generation');
function incGenCounter() {
  generation.innerText = generation.innerText.replace(/\d+/, (x) => +x + 1);
}

export { animateGrid, theNextGeneration };
