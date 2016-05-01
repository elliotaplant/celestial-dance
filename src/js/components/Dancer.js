import 'aframe';
import {Animation, Entity} from 'aframe-react';
import React from 'react';
import { translate, rand, vLog, objToArr,
  massToRadius, filterClose, vectorToString } from '../Helpers/Helpers';
import { getNetAccel } from '../Helpers/AccelerationLogic';
import Nothing from '../Simulation/Step'
const backwards = new THREE.Vector3(0, 0, 0.01);
const TIME_STEP = 1;

class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.mass = props.mass || rand(2, 1000);
  }

  render() {
    return (
      <a-sphere color={this.props.src} radius={massToRadius(this.mass)}
        class='dancer' mass={this.mass} step
        velocity="0 0 0"
        position={this.props.position.join(' ')}
      />
    );
  }
}

module.exports = Dancer;
