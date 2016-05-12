import React from 'react';
import { translate, rand, vLog, objToArr,
  massToRadius } from '../Helpers/Helpers';
import { getNetAccel } from '../Helpers/AccelerationLogic';
import Nothing from '../Simulation/Step'

const Dancer = (props) => (
  <a-sphere radius={massToRadius(props.mass)}
    class='dancer' mass={props.mass} step
    velocity={props.velocity.join(' ')}
    position={props.position.join(' ')}
    light={props.light}
    color={props.color}
    material={props.material}
  />
);

module.exports = Dancer;
