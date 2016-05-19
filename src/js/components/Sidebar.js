import React from 'react';

const Sidebar = () => (
  <div>
    <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
    <label for="drawer-toggle" id="drawer-toggle-label"></label>
    <div id="drawer">
      <h1>Controls</h1>
      <h3>Desktop</h3>
      <p>Fly around with WASD keys</p>
      <p>Use the mouse to look around</p>
      <h3>Mobile</h3>
      <p>Use your phone as a window into space!</p>
      <p>Press the VR button in the bottom left to enter VR mode</p>
      <br>
      <p>Made by Elliot Plant</p>
      <p>Currently a work in Progress</p>
      <p><a href="https://elliotplant.wordpress.com/">My Blog</a></p>
      <p><a href="http://www.elliotplant.com/">My Website</a></p>
      <p><a href="https://github.com/elliotaplant">My Github</a></p>
      <p><a href="https://github.com/elliotaplant/celestial-dance">Project Github</a></p>
      <p><a href="aframe.io">Framework by A-Frame</a></p>
    </div>
  </div>
)
