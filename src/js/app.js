import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
require('aframe-layout-component');
// import Camera from './components/Camera';
// import Cursor from './components/Cursor';
// import Sky from './components/Sky';

class SpaceScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  // render () {
  //   return (
  //     <Scene>
  //       <Camera><Cursor/></Camera>
  //
  //       <Sky/>
  //
  //       <Entity light={{type: 'ambient', color: '#888'}}/>
  //       <Entity light={{type: 'directional', intensity: 0.2}} position={[-1, 1, 0]}/>
  //       <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>
  //
  //       <Entity geometry="primitive: box" material={{color: "#FFF"}}
  //               onClick={this.changeColor}
  //               position="0 0 -5"
  //               src="../assets/cow_texture.png">
  //         <Animation attribute="rotation" dur="5000" repeat="indefinite" to="0 360 360"/>
  //       </Entity>
  //     </Scene>
  //   );
  // }
  render() {
    return (
      <a-scene>
        <a-assets>
          <img id="enemy-sprite" src="../assets/cow_texture.png" />
        </a-assets>

        <a-entity layout="type: circle; radius: 5" position="0 0.5 0">
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
          <a-image look-at="#player" src="#enemy-sprite" transparent="true"></a-image>
        </a-entity>

        <a-camera id="player" position="0 1.8 0"></a-camera>

        <a-sky color="#252243"></a-sky>
      </a-scene>
    )
  }
}

const Sky = () => <a-sky color="skyblue"></a-sky>;

const Lights = () => (
  <div>
    <a-light type="spot" color="#333" position="-20 0 0" look-at="a-sphere"></a-light>
    <a-light type="point" color="#AAA" position="0 5 0"></a-light>
  </div>
);

const Sphere = () => {
  return (
  <a-sphere color="steelblue" radius="4"
    position="-5 2 -10"
  >
    <a-animation attribute="rotation" begin="click"
      dur ="5000" repeat="indefinite" to="360 0 0"
    />
    <a-event name="mouseenter" scale="1 1.5 1"></a-event>
    <a-event name="mouseleave" scale="1 1 1"></a-event>
  </a-sphere>
)};


const Cursor = () => (
  <a-camera position="0 2 0">
    <a-cursor color="#2E3A87" />
  </a-camera>
);


ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));
