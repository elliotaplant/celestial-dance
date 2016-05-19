import React from 'react';

const Sidebar = () => (
  <div>
    <input type="checkbox" defaultChecked id="drawer-toggle" name="drawer-toggle"/>
    <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
    <div id="drawer">
      <h1>Controls</h1>
      <img src='./assets/x-icons.png' />
      <div>
        <h3>Desktop</h3>
        <p>Fly around with WASD keys</p>
        <p>Use the mouse to look around</p>
      </div>
      <div>
        <h3>Mobile </h3>
        <p>Use your phone as a window into space</p>
        <p>For the best experience, add this page to your homescreen (<a href="http://www.ianswerguy.com/add-website-icon-to-home-screen/">iPhone</a>, <a href="http://www.howtogeek.com/196087/how-to-add-websites-to-the-home-screen-on-any-smartphone-or-tablet/">Android</a>)</p>
        <p>Press the VR button in the bottom right to enter VR mode with
          <a href="http://tinyurl.com/jegsfu9"> google cardboard </a>
        </p>
      </div>
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
      </div>
    </div>
  </div>
);

module.exports = Sidebar;
