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

function makeRandomTemplate(size) {
  let arr = Array(size).fill(Array(size).fill(0));
  return arr.map((row) => row.map((col) => random()));
}

function updateGrid(template) {
  for (let row = 0; row < template.length; row++) {
    for (let cell = 0; cell < grid[row].length; cell++) {
      const c = grid[row][cell];
      c.checked = template[row][cell] ? true : false;
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
