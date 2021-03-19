import { GRID } from '../index';
import { random } from './utils';

export default function responsiveMakeGrid() {
  if (window.matchMedia('(max-width: 864px)').matches) makeGrid(...getMaxGridSize());
  else makeGrid(23, 23);
}

function makeGrid(rows, columns) {
  const grid = document.querySelector('#grid');
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

function getMaxGridSize() {
  const cellSize = 35;
  const verticalBuffer = 100;
  const horizontalBuffer = 10;

  return [
    Math.floor((visualViewport.height - verticalBuffer) / cellSize),
    Math.floor((visualViewport.width - horizontalBuffer) / cellSize),
  ];
}
