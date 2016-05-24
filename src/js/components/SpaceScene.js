import React from 'react';
import Dancer from './Dancer';
import dancerData from '../Helpers/dancerData';
import { massToRadius } from '../Helpers/Helpers';
var KeyboardControls = require('aframe-keyboard-controls');
var ProxyControls = require('aframe-proxy-controls');
AFRAME.registerComponent('keyboard-controls', KeyboardControls);
AFRAME.registerComponent('proxy-controls', ProxyControls);

const SpaceScene = () => (
  <a-scene proxy-controls="debug: true">
    <a-assets>
      <img id="outer-space" src='assets/spaceSky.jpg' />
      <sound id="ping" src='assets/ping.wav' />
    </a-assets>
    {dancerData.map((dancer, index) => (
        <Dancer key={index} mass={dancer.mass} position={dancer.position}
           velocity={dancer.velocity} sun={dancer.sun}
           light={dancer.light} material={dancer.material}
        />
      )
    )}
    <a-entity
      camera
      look-controls
      keyboard-controls
      id="player"
      position="0 1.8 0"
    />
    <a-sky src="#outer-space" material="shader: flat"/>
    {/*<a-entity keyboard-controls
          sound="src: assets/ping.wav;
                 on: keydown:KeyR">
    </a-entity>*/}
    <a-entity light="type: ambient; color: #555"></a-entity>
  </a-scene>
);

// <a-camera wasd-controls="acceleration: 400; fly: true; easing: 5"
//  id="player" position="0 1.8 0" />

module.exports = SpaceScene;
