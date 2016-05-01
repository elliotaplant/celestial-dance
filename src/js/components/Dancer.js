import 'aframe';
import {Animation, Entity} from 'aframe-react';
import React from 'react';
import { translate, rand, vLog, objToArr,
  massToRadius, filterClose, vectorToString } from '../Helpers/Helpers';
import { getNetAccel } from '../Helpers/AccelerationLogic';

const backwards = new THREE.Vector3(0, 0, 0.01);
const TIME_STEP = 1;

AFRAME.registerComponent('step', {
  schema: {
    chi: { default: new THREE.Vector3() },
  },

  tick: function (t) {
    const thisDancer = {
      mass: +this.el.attributes.mass.value,
      radius: +this.el.attributes.radius.value,
      position: this.el.object3D.position,
    }
    let velocity = new THREE.Vector3().fromArray(
      this.el.attributes.velocity.value.split(' ').map(i => +i)
    );
    let otherDancers = objToArr(this.el.sceneEl.querySelectorAll('.dancer'))
      .filter(dancer => dancer !== this.el)
      .map(dancer => ({
        mass: +dancer.attributes.mass.value,
        radius: +dancer.attributes.radius.value,
        position: dancer.object3D.position,
      }));
    const netAccel = getNetAccel(thisDancer, otherDancers);
    velocity = velocity.add(netAccel.multiplyScalar(t/100000)); // addScaledVector doesn't work. lol
    this.el.setAttribute('velocity', vectorToString(velocity));
    translate(this.el.object3D, velocity.multiplyScalar(t/100000));
  }
});


class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.mass = props.mass || rand(2, 1000);
  }

  render() {
    return (
      <a-sphere color={this.props.src} radius={massToRadius(this.mass)}
        step class='dancer' mass={this.mass}
        velocity="0 0 0"
        position={this.props.position.join(' ')}
      />
    );
  }
}

module.exports = Dancer;
