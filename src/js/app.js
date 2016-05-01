import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { rand } from './Helpers/Helpers';
require('aframe-layout-component');
require('aframe-template-component');
import Dancer from './components/Dancer';
import dancerData from './Helpers/dancerData';

class SpaceScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <img id="outer-space" src="../assets/equi-sky.png" />
          <img id="cow" src="../assets/cow_texture.png" />
          <img id="earth-img" src="../assets/earth.jpg" />
          <img id="mars-img" src="../assets/mars.png" />
        </a-assets>
        {dancerData.map((dancer, index) => (
          <Dancer key={index} mass={dancer.mass} position={dancer.position} src={dancer.src}/>
        ))}
        <a-camera id="player" position="0 1.8 0"></a-camera>
        <a-sky src="#outer-space"></a-sky>
      </Scene>
    )
  }
}

ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));
