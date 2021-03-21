import { stepThroughGrid, random, stopAnimationAndResetCounter } from './utils';
import { animateGrid, theNextGeneration } from './animateGrid';
import { responsiveMakeGrid } from './makeGrid';

function addControlListeners() {
  const startButton = document.querySelector('#start');
  startButton.addEventListener('click', startAnimation);

  const nextButton = document.querySelector('#next');
  nextButton.addEventListener('click', theNextGeneration);

  const clearButton = document.querySelector('#clear');
  clearButton.addEventListener('click', clearGrid);

  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', resetGrid);

  const howToButton = document.querySelector('#how-to-button');
  howToButton.style.transform = 'rotate(0deg)';
  howToButton.addEventListener('click', howTo);

  remakeGridAfterScreenResize();
}

function startAnimation() {
  const button = document.querySelector('#start');
  const icon = button.children[0];
  const pulse = document.querySelector('#pulse');

  button.dataset.start = button.dataset.start === 'false' ? 'true' : 'false';
  icon.innerText = icon.innerText == 'play_arrow' ? 'pause' : 'play_arrow';
  pulse.className = pulse.className == 'pulse' ? '' : 'pulse';

  if (button.dataset.start === 'true') animateGrid();
}

function clearGrid() {
  stopAnimationAndResetCounter();
  for (const [cell] of stepThroughGrid()) {
    cell.checked = false;
  }
}

function resetGrid() {
  stopAnimationAndResetCounter();
  for (const [cell] of stepThroughGrid()) {
    cell.checked = random() ? true : false;
  }
}

function howTo() {
  const p1 = document.querySelector('#p1').style;
  const p2 = document.querySelector('#p2').style;
  const button = document.querySelector('#how-to-button').style;

  if (p1.maxHeight == '1000px') {
    [p1.maxHeight, p2.maxHeight] = ['0px', '0px'];
  } else {
    [p1.maxHeight, p2.maxHeight] = ['1000px', '1000px'];
  }

  button.transform =
    button.transform == 'rotate(0deg)' ? 'rotate(-180deg)' : 'rotate(0deg)';
}

function remakeGridAfterScreenResize() {
  let timeOutFunctionId;
  let screenWidth = visualViewport.width;

  window.addEventListener('resize', () => {
    if (visualViewport.width != screenWidth) {
      screenWidth = visualViewport.width;
      clearTimeout(timeOutFunctionId);

      timeOutFunctionId = setTimeout(responsiveMakeGrid, 150);
    }
  });
}

export { addControlListeners };
