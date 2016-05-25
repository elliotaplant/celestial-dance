import 'aframe';
import 'aframe-extras';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import SpaceScene from './components/SpaceScene';
import Sidebar from './components/Sidebar';


ReactDOM.render(<Sidebar/>, document.querySelector('.sidebar-container'));
ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));

const scene = document.getElementsByTagName('a-scene')[0];
const xButton = document.getElementById('close-sidebar');
const hamburgerIcon = document.getElementById('drawer-toggle-label');

function hideDrawer() {
  document.getElementById('drawer-toggle').checked = false;
}

function hideBurger() {
  hamburgerIcon.style.visibility = 'hidden';
}

function showBurger() {
  hamburgerIcon.style.visibility = 'visible';
}

function getPairCode(fullText) {
  var pairCode = '';
  var betweenQuotes = false;
  for (var i = 0; i < fullText.length; i++) {
    if (fullText.charCodeAt(i) === 8221) {
      betweenQuotes = false;
    }
    if (betweenQuotes) {
      pairCode += fullText[i];
    }
    if (fullText.charCodeAt(i) === 8220) {
      betweenQuotes = true;
    }
  }
  return pairCode;
}

function findPairCode() {
  var overlay = document.getElementsByClassName('overlay');
  if (overlay.length) {
    var pairCode = getPairCode(overlay[0].textContent);
    document.getElementById('pair-code').textContent = 'Pair Code: "' + pairCode + '"';
  } else {
    setTimeout(findPairCode, 20);
  }
}

window.onload = findPairCode;

scene.onmousedown = hideDrawer;

scene.addEventListener('enter-vr', hideBurger, false);
scene.addEventListener('exit-vr', showBurger, false);


xButton.onmousedown = hideDrawer;
xButton.onmouseover = () => { xButton.src = 'assets/x-icon-white.png' };
xButton.onmouseout = () => { xButton.src = 'assets/x-icon-grey.png' };
