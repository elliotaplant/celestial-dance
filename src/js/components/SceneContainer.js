import React from 'react';
import Loading from './Loading';

const SceneContainer = () => (
  <a-scene>
    <a-camera wasd-controls="fly: true" id="player" position="0 1.8 0" />
    <Loading />
  </a-scene>
);

module.exports = SceneContainer;
