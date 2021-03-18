import responsiveMakeGrid from './script';
import addControlListeners from './addControlListeners';

let GRID;
let generationCounter = 0;

responsiveMakeGrid();
addControlListeners();

export { GRID, generationCounter };
