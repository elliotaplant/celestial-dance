import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { rand } from './Helpers/VectorHelpers';
require('aframe-layout-component');
require('aframe-template-component');
import Dancer from './components/Dancer';

class SpaceScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dancers: [100, 500, 1000],
    };
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <img id="outer-space" src="../assets/equi-sky.png" />
          <img id="cow" src="../assets/cow_texture.png" />
          <img id="earth-img" src="../assets/earth.jpg" />
          <img id="mars-img" src="../assets/mars.png" />
          <a-mixin id="laser" geometry="primitive: sphere; radius: 0.5; translate: 0 -2 0"
                      material="color: green; metalness: 0.2; opacity: 0.4; roughness: 0.3"
                      projectile="speed: -10"></a-mixin>
        </a-assets>
        {this.state.dancers.map((mass, index) => (
          <Dancer key={index} allDancers={this.state.dancers} mass={mass} />
        ))}
        <a-camera id="player" position="0 1.8 0"></a-camera>
        <a-sky src="#outer-space"></a-sky>
      </Scene>
    )
  }
}

ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));
