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
    // setInterval(() => {
    //   this.setState({
    //     marsPos: this.state.marsPos.map(val => val+0.01),
    //     earthPos: this.state.earthPos.map(val => val-0.01)
    //   },100)
    // })
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

        <a-sphere id='earth'
          src='#earth-img'
          radius='4'
          position={this.state.earthPos.join(' ')} />
        <a-sphere id='mars'
          src='#mars-img'
          radius='3'
          position={this.state.marsPos.join(' ')}/>
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
    this.interval = 50;
    const position = new THREE.Vector3(rand(-10, 10), rand(-10, 10), rand(-30, -10));
    const velocity = new THREE.Vector3(0, rand(-0.01, 0.01), rand(-0.01, 0.01));
    this.state = { position, velocity };
    setInterval(this.updatePosition.bind(this), this.interval);
  }
  updatePosition() {
    this.setState({
      position: this.state.position.addScaledVector(this.state.velocity, this.interval)
    });
  }
  render() {
    return (
      <a-sphere id='earth'
        src="#cow"
        radius={Math.log2(this.mass)/4}
        position={this.state.position.toArray().join(' ')}
      />
    )
  }
}

ReactDOM.render(<SpaceScene/>, document.querySelector('.scene-container'));
