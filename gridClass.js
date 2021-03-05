class Grid {
  constructor(size) {
    const grid = document.querySelector('#grid');
    for (let i = 0; i < size; i++) {
      grid.appendChild(makeRow(size, i));
    }
  }

  makeRow(size, idNum) {
    let row = document.createElement('div');
    row.classList = 'row';
    row.id = `row-${idNum}`;

    for (let i = 0; i < size; i++) {
      row.appendChild(makeCell(`${idNum}:${i}`));
    }
    return row;
  }

  makeCell(idNum) {
    let cell = document.createElement('input');
    cell.type = 'checkbox';
    cell.classList = 'cell';
    cell.id = `cell-${idNum}`;
    return cell;
  }

  clear() {
    document.querySelector('#grid').innerHTML = '';
  }
}
