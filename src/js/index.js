import 'aframe';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import SpaceScene from './components/SpaceScene';
import Sidebar from './components/Sidebar';
ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));
