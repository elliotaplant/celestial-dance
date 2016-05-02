import 'aframe';
import {Animation, Entity} from 'aframe-react';
import React from 'react';
import { translate, rand, vLog, objToArr, getR,
  massToRadius, merge } from '../Helpers/Helpers';
import { getNetAccel } from '../Helpers/AccelerationLogic';
import { GRAVITY, PLANET_SPRING, MIN_DISTANCE, TIME_SCALE } from '../Helpers/Constants';

class Force {
  constructor(body1, body2) {
    this.body1 = body1; // super(body1)? super(body1, body2)?
    this.body2 = body2;
    this.vector = new THREE.Vector3();
  }

  update() {
    const displacement = getR(this.body1, this.body2);
    const displacement2 = getR(this.body1, this.body2);
    const distance = Math.max(displacement.length(), MIN_DISTANCE);
    // F_g = G * m1 * m2 * Rvector / r^3
    if (this.distance < MIN_DISTANCE) {
      merge(this.body1, this.body2);
    } else if (distance < this.body1.radius + this.body2.radius) {
      // bounce wit it
      // this.vector.add(
      //   displacement2.multiplyScalar(
      //     PLANET_SPRING * (1 - (this.body1.radius + this.body2.radius) / distance)
      //   )
      // );
    } else {
      this.vector.copy(
        displacement.multiplyScalar(
          GRAVITY * this.body1.mass * this.body2.mass / Math.pow(distance, 3)
        )
      );
    }
    return this;
  }

  apply(dt) {
    const accel1 = new THREE.Vector3().copy(this.vector).multiplyScalar(dt/this.body1.mass);
    const accel2 = new THREE.Vector3().copy(this.vector).multiplyScalar(-1*dt/this.body2.mass);
    this.body1.velocity.add(accel1);
    this.body2.velocity.add(accel2);
    return this;
  }
}

const move = (dancer, dt) => {
  const velocity = new THREE.Vector3().copy(dancer.velocity);
  translate(dancer.object3D, velocity.multiplyScalar(dt));
}

AFRAME.registerComponent('step', {
  schema: {
    forces: { default: [] },
  },

  init: function () {
    const dancers = objToArr(this.el.sceneEl.querySelectorAll('.dancer'));
    dancers.forEach((dancer, index) => {
      const velocityArr = dancer.attributes.velocity.value.split(' ').map(i => +i);
      dancer.velocity = new THREE.Vector3().fromArray(velocityArr);
      dancer.mass = +dancer.attributes.mass.value;
      dancer.radius = +dancer.attributes.radius.value;
    });
    window.forces = [];
    for (var i = 0; i < dancers.length; i++) {
      for (var j = i + 1; j < dancers.length; j++) {
        window.forces.push(new Force(dancers[i], dancers[j]));
      }
    }
    // window.forces = this.data.forces;
  },

  tick: function (dt) {
    dt = dt*TIME_SCALE;
    for (var i = 0; i < window.forces.length; i++) {
      window.forces[i].update().apply(dt);
    }
    const dancers = this.el.sceneEl.querySelectorAll('.dancer');
    for (var i = 0; i < dancers.length; i++) {
      move(dancers[i], dt);
    }
  }
});

module.exports = 'hi';
