import responsiveMakeGrid from './makeGrid';
import addControlListeners from './addControlListeners';

// Global varialbles used by multiple modules
let GRID;
let generationCounter = 0;

responsiveMakeGrid();
addControlListeners();

export { GRID, generationCounter };
