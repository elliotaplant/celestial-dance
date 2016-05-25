import React from 'react';

const Sidebar = () => (
  <div>
    <input type="checkbox" defaultChecked id="drawer-toggle" name="drawer-toggle"/>
    <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
    <div id="drawer">
      <img id='close-sidebar' src='assets/x-icon-grey.png'/>
      <h1>Controls</h1>
      <div className="desktop">
        <p>Fly around with WASD or arrow keys</p>
        <p>Click and drag the mouse to look around</p>
        <p>Try using a mobile device for Virtual Reality experience</p>
        <p>Use your keyboard to control your phone at<a href="https://proxy-controls.donmccurdy.com/#/connect#%2Fconnect"> pair.elliotplant.com</a></p>
      </div>
      <div className="mobile">
        <p>To enter full-screen mode, add this page to your homescreen (<a href="http://www.ianswerguy.com/add-website-icon-to-home-screen/">iPhone</a>, <a href="http://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/">Android</a>)</p>
        <p>Press the VR button in the bottom right to enter VR mode with<a href="http://tinyurl.com/jegsfu9"> google cardboard </a></p>
        <p>To fly around using the arrow keys on your keyboard as a controller, enter your Pair Code at at pair.elliotplant.com on a computer connected to the same wifi</p>
        <p id="pair-code">Pair Code: </p>
      </div>
      <footer className="desktop">
        <div>
          <h3>Made by Elliot Plant</h3>
          <p><a href="https://elliotplant.wordpress.com/">Blog</a></p>
          <p><a href="http://www.elliotplant.com/">Website</a></p>
          <p><a href="https://github.com/elliotaplant">Github</a></p>
        </div>
        <div>
          <h3>Currently a work in Progress</h3>
          <p><a href="https://github.com/elliotaplant/celestial-dance">Project Github</a></p>
          <p><a href="aframe.io">Framework by A-Frame</a></p>
          <p>Controls by <a href="https://www.donmccurdy.com/">Don McCurdy</a></p>
        </div>
      </footer>
    </div>
  </div>
);

module.exports = Sidebar;
