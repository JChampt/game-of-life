import { stepThroughGrid, random, stopAnimationAndResetCounter } from './utils';
import { animateGrid, theNextGeneration } from './animateGrid';
import { responsiveMakeGrid } from './makeGrid';

function addControlListeners() {
  document.querySelector('.play').addEventListener('click', startAnimation);
  document.querySelector('.next').addEventListener('click', theNextGeneration);
  document.querySelector('.clear').addEventListener('click', clearGrid);
  document.querySelector('.refresh').addEventListener('click', resetGrid);
  document.querySelector('#how-to-button').addEventListener('click', howTo);
  document.querySelector('#how-to-heading').addEventListener('click', howTo);

  remakeGridAfterScreenResize();
}

function startAnimation() {
  const button = document.querySelector('.play');
  const icon = button.children[0];
  const pulse = document.querySelector('#pulse');

  button.dataset.play = button.dataset.play === 'false' ? 'true' : 'false';
  icon.innerText = icon.innerText == 'play_arrow' ? 'pause' : 'play_arrow';
  pulse.className = '';

  if (button.dataset.play === 'true') animateGrid();
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
  const [p1, p2] = [...document.getElementsByTagName('p')].map((e) => e.style);
  const button = document.querySelector('#how-to-button');

  if (p1.maxHeight == '1000px') {
    [p1.maxHeight, p2.maxHeight] = ['0px', '0px'];
  } else {
    [p1.maxHeight, p2.maxHeight] = ['1000px', '1000px'];
  }

  button.innerText = button.innerText == 'add_circle' ? 'remove_circle' : 'add_circle';
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
