makeGrid(21);

const grid = Array.from(document.querySelector('#grid').children).map((row) =>
  Array.from(row.children)
);

function makeGrid(size) {
  const grid = document.querySelector('#grid');
  clearGrid();
  for (let i = 0; i < size; i++) {
    grid.appendChild(makeRow(size, i));
  }
}

function clearGrid() {
  document.querySelector('#grid').innerHTML = '';
}

function makeRow(size, id) {
  let row = document.createElement('div');
  row.classList = 'row';
  row.id = id;

  for (let i = 0; i < size; i++) {
    row.appendChild(makeCell(`${id}:${i}`));
  }
  return row;
}

function makeCell(id) {
  let cell = document.createElement('input');
  cell.type = 'checkbox';
  cell.classList = 'cell';
  cell.id = id;
  cell.checked = random() ? true : false;
  return cell;
}

function random() {
  return Math.round(Math.random());
}

function evalCell(cell) {
  const [row, col] = getCellLocation(cell);
  const leftBound = col - 1 < 0 ? col : col - 1;

  let rowAbove = grid[row - 1] ? grid[row - 1].slice(leftBound, col + 2) : [];
  let rowOn = grid[row].slice(leftBound, col + 2);
  let rowBelow = grid[row + 1] ? grid[row + 1].slice(leftBound, col + 2) : [];

  let total = rowAbove.concat(rowOn, rowBelow).reduce((sum, ele) => {
    sum += ele.checked == true ? 1 : 0;
    return sum;
  }, 0);

  if (cell.checked) {
    return total == 3 || total == 4 ? 1 : 0;
  } else {
    return total == 3 ? 1 : 0;
  }
}

function getCellLocation(cell) {
  return cell.id.split(':').map(Number);
}

function makeRandomTemplate(size) {
  let arr = Array(size).fill(Array(size).fill(0));
  return arr.map((row) => row.map((col) => random()));
}

function updateGrid(template) {
  for (let row = 0; row < template.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const cell = grid[row][col];
      cell.checked = template[row][col] ? true : false;
    }
  }
}

// Code from: https://www.sitepoint.com/delay-sleep-pause-wait/
async function animateGrid(nSteps = 30, msDelayBetween = 333, gridSize = 21) {
  do {
    makeGrid(gridSize);
    await sleep(msDelayBetween);
  } while (--nSteps > 0);
}

function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
