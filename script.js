buildGrid(21);

function buildGrid(size) {
  const grid = document.querySelector('#grid');
  for (let i = 0; i < size; i++) {
    grid.appendChild(makeRow(size, i));
  }
}

function makeRow(size, idNum) {
  let row = document.createElement('div');
  row.classList = 'row';
  row.id = `row-${idNum}`;

  for (let i = 0; i < size; i++) {
    row.appendChild(makeCell(`${idNum}:${i}`));
  }
  return row;
}

function makeCell(idNum) {
  let cell = document.createElement('input');
  cell.type = 'checkbox';
  cell.classList = 'cell';
  cell.id = `cell-${idNum}`;
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
