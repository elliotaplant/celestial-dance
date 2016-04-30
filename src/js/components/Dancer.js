import 'aframe';
import {Animation, Entity} from 'aframe-react';
import React from 'react';
import { translate, rand } from '../Helpers/VectorHelpers';

const backwards = new THREE.Vector3(0, 0, 0.01);

AFRAME.registerComponent('update', {
  schema: {
    allDancers: { default: [] },
    velocity: { default: new THREE.Vector3(0, 0, -2) },
    speed: { default: -0.5 }
  },

  tick: function () {
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
        update
        position={[rand(-10, 10), rand(-10, 10), rand(-30, -10)]}
      />
    );
  }
}

module.exports = Dancer;
