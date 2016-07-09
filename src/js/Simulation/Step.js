import 'aframe';
import React from 'react';
import { translate, rand, vLog, objToArr, getR,
  massToRadius, merge } from '../Helpers/Helpers';
import { getNetAccel } from '../Helpers/AccelerationLogic';
import { GRAVITY, PLANET_SPRING, MIN_DISTANCE, TIME_SCALE } from '../Helpers/Constants';
import Force from './Force';

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
  },

  tick: function (t, dt) {
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
