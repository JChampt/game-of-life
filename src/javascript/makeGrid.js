import { random, stopAnimationAndResetCounter } from './utils';

// 'Global' variable which contains pointers to each cell element in the #grid parent dom element
let GRID;

function responsiveMakeGrid() {
  const [maxFitRows, maxFitColumns] = getMaxGridSize();
  makeGrid(Math.min(maxFitRows, 23), Math.min(maxFitColumns, 27));
}

function getMaxGridSize() {
  const cellSize = 30;
  const verticalBuffer = 200;
  const horizontalBuffer = 54;
  const minimumHeight = 9;

  return [
    Math.max(
      minimumHeight,
      Math.floor((visualViewport.height - verticalBuffer) / cellSize)
    ),
    Math.floor((visualViewport.width - horizontalBuffer) / cellSize),
  ];
}

function makeGrid(rows, columns) {
  const grid = document.querySelector('#grid');
  stopAnimationAndResetCounter();
  deleteGrid();

  for (let i = 0; i < rows; i++) {
    grid.appendChild(makeRow(columns, i));
  }

  GRID = mapGrid();
}

function deleteGrid() {
  document.querySelector('#grid').innerHTML = '';
}

function makeRow(columns, id) {
  let row = document.createElement('div');
  row.classList = 'row';
  row.id = `r-${id}`;

  for (let i = 0; i < columns; i++) {
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

function mapGrid() {
  return Array.from(document.querySelector('#grid').children).map((row) =>
    Array.from(row.children)
  );
}

export { GRID, responsiveMakeGrid };
