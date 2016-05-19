import 'aframe';
import 'aframe-extras';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import SpaceScene from './components/SpaceScene';
import Sidebar from './components/Sidebar';


ReactDOM.render(<Sidebar/>, document.querySelector('.sidebar-container'));
ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));

document.getElementsByTagName('a-scene')[0].onmousedown = () => {
  const toggleBox = document.getElementById('drawer-toggle').checked = false;
}
