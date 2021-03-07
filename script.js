/* 
TODO/Thoughts: makeGrid could/should be a class. The constructor could accept a size,
update create the DOM elements and add them to the DOM, then return an 
2d Array containing pointers to all of the cells;

Check for life ending and display a counter like, 'life ended in x generations'

Disco Mode:
  Checkbox to toggle on/off
  Do cool neon disco colors, and probably a dark background
  Play a disco song
  It would be cool to have some specific patterns that play
  I could use some classic Conway patterns + a random one and
  just choose a pattern randomly when running Dmode
  Sync the generation changes to the beat of the disco song!  =)
 */

let GRID;
let generationCounter = 0;

makeGrid(21);
addControlListeners();

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

  function mapGrid() {
    return Array.from(document.querySelector('#grid').children).map((row) =>
      Array.from(row.children)
    );
  }
}

function addControlListeners() {
  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', startAnimation);

  const nextButton = document.querySelector('#next');
  nextButton.addEventListener('click', theNextGeneration);

  const clearButton = document.querySelector('#clear');
  clearButton.addEventListener('click', clearGrid);

  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', resetGrid);
}

function startAnimation() {
  const startButton = document.querySelector('#start');

  startButton.dataset.start = startButton.dataset.start === 'false' ? 'true' : 'false';
  startButton.innerText = startButton.innerText === 'Start' ? 'Stop' : 'Start';

  if (startButton.dataset.start === 'true') animateGrid();
}

async function animateGrid() {
  const startButton = document.querySelector('#start');
  const animationDelay = 333;

  while (startButton.dataset.start == 'true') {
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
  generationCounter++;
  // console.log('generation:', generationCounter);
  document.querySelector('#generation').innerText = `generation: ${generationCounter}`;

  function updateGridFromTemplate(template) {
    for (const [cell, row, col] of stepThroughGrid()) {
      cell.checked = template[row][col] ? true : false;
    }
  }

  function makeNextGenTemplate() {
    let template = Array(GRID.length)
      .fill(0)
      .map(() => Array(GRID.length).fill(0));

    for (const [cell, row, col] of stepThroughGrid()) {
      let cellTotal = getCellTotal(cell);

      if (cell.checked) {
        template[row][col] = cellTotal == 3 || cellTotal == 4 ? 1 : 0;
      } else {
        template[row][col] = cellTotal == 3 ? 1 : 0;
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
  }

  function getCellLocation(cell) {
    return cell.id.split(':').map(Number);
  }
}

function clearGrid() {
  for (const [cell] of stepThroughGrid()) {
    cell.checked = false;
  }
  generationCounter = 0;
  document.querySelector('#generation').innerText = `generation: ${generationCounter}`;
}

function resetGrid() {
  for (const [cell] of stepThroughGrid()) {
    cell.checked = random() ? true : false;
  }
  generationCounter = 0;
  document.querySelector('#generation').innerText = `generation: ${generationCounter}`;
}

function* stepThroughGrid() {
  for (let row = 0; row < GRID.length; row++) {
    for (let col = 0; col < GRID[row].length; col++) {
      yield [GRID[row][col], row, col];
    }
  }
}

function random() {
  return Math.round(Math.random());
}
