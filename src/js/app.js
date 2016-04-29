import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
require('aframe-layout-component');
require('aframe-template-component');
// import Camera from './components/Camera';
// import Cursor from './components/Cursor';
// import Sky from './components/Sky';
const rand = (min, max) => min + Math.random()*(max - min);
const pow = Math.pow;

class Force {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.val = 0;
  }
  update() {

  }
}

class SpaceScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forces: [],
      marsPos: [5, 9, -20],
      earthPos: [0, 0, -10]
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
        </a-assets>


        <Body />
        <Body />
        <Body />
        <Body />
        <Body />
        <a-camera id="player" position="0 1.8 0"></a-camera>

        <a-sky src="#outer-space"></a-sky>
      </Scene>
    )
  }
}

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.src = props.src || '#cow';
    this.mass = props.mass || rand(2, 1000);
    this.interval = 300;
    const oldPosition = new THREE.Vector3(rand(-10, 10), rand(-10, 10), rand(-30, -10));
    const velocity = new THREE.Vector3(0, rand(-0.01, 0.01), rand(-0.01, 0.01));
    const newPosition = oldPosition.addScaledVector(velocity, this.interval);
    this.state = { oldPosition, newPosition, velocity };
    // setInterval(this.updatePosition.bind(this), this.interval);
  }
  updatePosition() {
    console.log('ho ho ho');
    const oldPosition = this.state.oldPosition;
    const newPosition = oldPosition.addScaledVector(this.state.velocity, this.interval);
    this.setState({
      oldPosition: this.state.newPosition,
      newPosition,
    });
  }
  render() {
    // change 'from' to somehow get accurate current position.
    // there's gotta be a better way to do animation than setInterval()
    return (
      <a-sphere id='earth'
        src="#cow"
        radius={Math.log2(this.mass)/4}
      >
        <a-animation attribute="position" dur="5000"
          from={this.state.oldPosition.toArray().join(' ')} to={this.state.newPosition.toArray().join(' ')}/>
      </a-sphere>
    )
  }
}

ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));

//
// <a-sphere id='earth'
//   src='#earth-img'
//   radius='4'
//   position={this.state.earthPos.join(' ')} />
// <a-sphere id='mars'
//   src='#mars-img'
//   radius='3'
//   position={this.state.marsPos.join(' ')}/>
//
//
