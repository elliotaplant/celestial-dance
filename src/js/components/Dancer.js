import 'aframe';
import {Animation, Entity} from 'aframe-react';
import React from 'react';
import { translate, rand, getNetForce, map } from '../Helpers/VectorHelpers';

const backwards = new THREE.Vector3(0, 0, 0.01);

AFRAME.registerComponent('update', {
  schema: {
    velocity: { default: new THREE.Vector3(0, 0, -2) },
    speed: { default: -0.5 }
  },

  tick: function () {
    let allDancers = this.el.sceneEl.querySelectorAll('.dancer');
    allDancers = map(allDancers,
      dancer => ({
        mass: +dancer.attributes.mass.value,
        position: dancer.object3D.position,
      }));
    const netForce = getNetForce(allDancers, this.el.object3D.position);
    // console.log('first z position:', Math.floor(allDancers[0].object3D.position.z));
    this.data.velocity.add(backwards);
    translate(this.el.object3D, this.data.velocity);
  }
});

class Dancer extends React.Component {
  constructor(props) {
    super(props);
    this.mass = props.mass || rand(2, 1000);
  }
  render() {
    return (
      <a-sphere src="../assets/earth.jpg" radius={Math.log2(this.mass)/10}
        update class='dancer' mass={this.mass}
        position={[rand(-10, 10), rand(-10, 10), rand(-30, -10)]}
      />
    );
  }
}

module.exports = Dancer;
