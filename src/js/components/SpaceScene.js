import React from 'react';
import Dancer from './Dancer';
import dancerData from '../Helpers/dancerData';
import { massToRadius } from '../Helpers/Helpers';
const space = require('spaceSky.jpg');

const SpaceScene = () => (
  <a-scene>
    <a-assets>
      <img id="outer-space" src={space} />
    </a-assets>
    {dancerData.map((dancer, index) => (
        <Dancer key={index} mass={dancer.mass} position={dancer.position}
           velocity={dancer.velocity}
           light={dancer.light} material={dancer.material}
        />
      )
    )}
    <a-camera wasd-controls="fly: true" id="player" position="0 1.8 0" />
    <a-sky src="#outer-space" material="shader: flat"/>
    <a-entity light="type: ambient; color: #555"></a-entity>
  </a-scene>
);

module.exports = SpaceScene;
