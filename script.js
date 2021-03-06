let GRID;

makeGrid(21);
addControlListeners();

/* 
TODO: makeGrid could/should be a class. The constructor could accept a size,
update create the DOM elements and add them to the DOM, then return an 
2d Array containing pointers to all of the cells;
 */
function makeGrid(size) {
  const grid = document.querySelector('#grid');
  deleteGrid();
  for (let i = 0; i < size; i++) {
    grid.appendChild(makeRow(size, i));
  }
  GRID = mapGrid();

  function deleteGrid() {
    document.querySelector('#grid').innerHTML = '';
  }

  function makeRow(size, id) {
    let row = document.createElement('div');
    row.classList = 'row';
    row.id = `r-${id}`;

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

  function mapGrid() {
    return Array.from(document.querySelector('#grid').children).map((row) =>
      Array.from(row.children)
    );
  }
}

function addControlListeners() {
  const playButton = document.querySelector('#play');
  playButton.addEventListener('click', playAnimation);

  const nextButton = document.querySelector('#next');
  nextButton.addEventListener('click', theNextGeneration);

  const clearButton = document.querySelector('#clear');
  clearButton.addEventListener('click', clearGrid);
}

function playAnimation() {
  const playButton = document.querySelector('#play');

  playButton.dataset.play = playButton.dataset.play === 'false' ? 'true' : 'false';
  playButton.innerText = playButton.innerText === 'Start' ? 'Stop' : 'Start';

  if (playButton.dataset.play === 'true') animateGrid();
}

function clearGrid() {
  for (let row = 0; row < GRID.length; row++) {
    for (let col = 0; col < GRID[row].length; col++) {
      const cell = GRID[row][col];
      cell.checked = false;
    }
  }
}

function theNextGeneration() {
  updateGridFromTemplate(evalGrid());
}

function evalGrid() {
  let template = Array(GRID.length)
    .fill(0)
    .map(() => Array(GRID.length).fill(0));

  for (let row = 0; row < GRID.length; row++) {
    for (let col = 0; col < GRID[row].length; col++) {
      const cell = GRID[row][col];
      let cellTotal = getCellTotal(cell);

      if (cell.checked) {
        template[row][col] = cellTotal == 3 || cellTotal == 4 ? 1 : 0;
      } else {
        template[row][col] = cellTotal == 3 ? 1 : 0;
      }
    }
  }
  return template;
}

function getCellTotal(cell) {
  const [row, col] = getCellLocation(cell);
  const leftBound = col - 1 < 0 ? col : col - 1;

  let rowAbove = GRID[row - 1] ? GRID[row - 1].slice(leftBound, col + 2) : [];
  let rowOn = GRID[row].slice(leftBound, col + 2);
  let rowBelow = GRID[row + 1] ? GRID[row + 1].slice(leftBound, col + 2) : [];

  return rowAbove
    .concat(rowOn, rowBelow)
    .reduce((total, foo) => total + (foo.checked == true ? 1 : 0), 0);

  function getCellLocation(cell) {
    return cell.id.split(':').map(Number);
  }
}

function updateGridFromTemplate(template) {
  for (let row = 0; row < GRID.length; row++) {
    for (let col = 0; col < GRID[row].length; col++) {
      const cell = GRID[row][col];
      cell.checked = template[row][col] ? true : false;
    }
  }
}

async function animateGrid() {
  const playButton = document.querySelector('#play');
  const animationDelay = 333;

  while (playButton.dataset.play == 'true') {
    theNextGeneration();
    await sleep(animationDelay);
  }
}

// Code from: https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function makeRandomTemplate(size) {
  let arr = Array(size).fill(Array(size).fill(0));
  return arr.map((row) => row.map((col) => random()));
}
