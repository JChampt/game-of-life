displayGrid(21);

function displayGrid(size) {
  const grid = document.querySelector('#grid');

  clearGrid();
  for (let i = 0; i < size; i++) {
    grid.appendChild(makeRow(size, i));
  }
}

function makeRow(size, id) {
  let row = document.createElement('div');
  row.classList = 'row';
  row.id = `row-${id}`;

  for (let i = 0; i < size; i++) {
    row.appendChild(makeCell(`${id}:${i}`));
  }
  return row;
}

function makeCell(id) {
  let cell = document.createElement('input');
  cell.type = 'checkbox';
  cell.classList = 'cell';
  cell.id = `cell-${id}`;
  cell.checked = random() ? true : false;
  return cell;
}

function clearGrid() {
  document.querySelector('#grid').innerHTML = '';
}

function makeGrid(size) {
  let arr = Array(size).fill(Array(size).fill(0));
  return arr.map((row) => row.map((col) => random()));
}

function random() {
  return Math.round(Math.random());
}
