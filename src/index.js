import { responsiveMakeGrid } from './javascript/makeGrid';
import { addControlListeners } from './javascript/addControlListeners';
import './style/main.scss';
import './style/controls.scss';
import './style/howto.scss';

// Init program after the body html is built
responsiveMakeGrid();
addControlListeners();
