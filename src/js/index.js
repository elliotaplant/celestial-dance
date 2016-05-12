import 'aframe';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import SpaceScene from './components/SpaceScene';

ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));
