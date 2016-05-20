import 'aframe';
import 'aframe-extras';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import SpaceScene from './components/SpaceScene';
import Sidebar from './components/Sidebar';


ReactDOM.render(<Sidebar/>, document.querySelector('.sidebar-container'));
ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));

function hideDrawer() {
  document.getElementById('drawer-toggle').checked = false;
}

document.getElementsByTagName('a-scene')[0].onmousedown = hideDrawer;

const closeSidebar = document.getElementById('close-sidebar')

closeSidebar.onmousedown = hideDrawer;
closeSidebar.onmouseover = () => { closeSidebar.src = 'assets/x-icon-white.png' };
closeSidebar.onmouseout = () => { closeSidebar.src = 'assets/x-icon-grey.png' };
