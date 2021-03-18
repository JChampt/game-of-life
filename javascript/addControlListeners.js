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

  function startAnimation() {
    const button = document.querySelector('#start');
    const text = button.children[0];
    const icon = button.children[1];

    button.dataset.start = button.dataset.start === 'false' ? 'true' : 'false';
    text.innerText = text.innerText == 'Start' ? 'Stop' : 'Start';
    icon.innerText = icon.innerText == 'play_arrow' ? 'stop' : 'play_arrow';

    if (button.dataset.start === 'true') animateGrid();
  }

  function clearGrid() {
    stopAnimationAndResetCounter();
    for (const [cell] of stepThroughGrid()) {
      cell.checked = false;
    }
  }

  function stopAnimationAndResetCounter() {
    const startButton = document.querySelector('#start');
    const text = startButton.children[0];

    startButton.dataset.start = 'false';
    text.innerText = 'Start';
    startButton.children[1].innerText = 'play_arrow';

    generationCounter = 0;
    document.querySelector('#generation').innerText = `generation: ${generationCounter}`;
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
}
