import React from 'react';
import Dancer from './Dancer';
import dancerData from '../Helpers/dancerData';
import { massToRadius } from '../Helpers/Helpers';
const space = require('./spaceSky.jpg');

const Loading = () => (
  <a-scene>
    <a-camera wasd-controls="fly: true" id="player" position="0 1.8 0" />
    <a-sky src="#outer-space" material="shader: flat"/>
    <a-entity light="type: ambient; color: #555"></a-entity>
  </a-scene>
);

module.exports = Loading;
