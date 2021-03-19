import responsiveMakeGrid from './javascript/makeGrid';
import addControlListeners from './javascript/addControlListeners';

// Global varialbles used by multiple modules
let GRID;
let generationCounter = 0;

responsiveMakeGrid();
addControlListeners();

export { GRID, generationCounter };
