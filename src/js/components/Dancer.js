import 'aframe';
import {Animation, Entity} from 'aframe-react';
import React from 'react';
import { translate, rand, getNetAccel, vLog, objToArr,
  massToRadius, filterClose, vectorToString } from '../Helpers/VectorHelpers';

const backwards = new THREE.Vector3(0, 0, 0.01);
const TIME_STEP = 1;

AFRAME.registerComponent('step', {
  schema: {
    chi: { default: new THREE.Vector3() },
  },

  tick: function (t) {
    let position = this.el.object3D.position;
    const radius = +this.el.attributes.radius.value;
    let velocity = new THREE.Vector3().fromArray(
      this.el.attributes.velocity.value.split(' ').map(i => +i)
    );
    let allDancers = objToArr(this.el.sceneEl.querySelectorAll('.dancer'))
      .filter(dancer => dancer !== this.el)
      .map(dancer => ({
        mass: +dancer.attributes.mass.value,
        position: dancer.object3D.position,
      }));
    const allOtherDancers = filterClose(allDancers, position, 2*radius);
    const netAccel = getNetAccel(position, allOtherDancers);
    velocity = velocity.add(netAccel.multiplyScalar(t)); // addScaledVector doesn't work. lol
    translate(this.el.object3D, velocity);
    const velocityString = velocity.toArray().join(' ')
    this.el.setAttribute('velocity', vectorToString(velocity));
  }
});

class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.mass = props.mass || rand(2, 1000);
  }

  render() {
    return (
      <a-sphere src="../assets/earth.jpg" radius={massToRadius(this.mass)}
        step class='dancer' mass={this.mass}
        velocity="0 0 0"
        position={this.props.position.join(' ')}
      />
    );
  }
}

module.exports = Dancer;
