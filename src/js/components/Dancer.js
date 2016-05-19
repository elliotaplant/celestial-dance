import React from 'react';
import { translate, rand, vLog, objToArr,
  massToRadius } from '../Helpers/Helpers';
import { getNetAccel } from '../Helpers/AccelerationLogic';
import Nothing from '../Simulation/Step'
const lightDecay = 0.5;

function range(n) {
  let result = [];
  while (result.length < n) {result.push(result.length)}
  return result;
}

const Dancer = (props) => {
  if (!props.sun) {
    return (
      <a-sphere radius={massToRadius(props.mass)}
        class='dancer' mass={props.mass}
        step
        velocity={props.velocity.join(' ')}
        position={props.position.join(' ')}
        light={props.light}
        color={props.color}
        material={props.material}
      />
    );
  } else {
    return (
      <a-entity radius={massToRadius(props.mass)}
        class='dancer'
        mass={props.mass}
        step
        velocity={props.velocity.join(' ')}
        position={props.position.join(' ')}
      >
        <a-sphere radius={massToRadius(props.mass)}
          light={props.light}
          color={props.color}
          material={props.material}
        />
        {range(50).map((_, index, collection) => {
          console.log('index', index);
          return (
          <a-sphere
            key={index}
            radius={massToRadius(props.mass) * (1 + lightDecay * index / collection.length)}
            material={`opacity: ${1 - index / collection.length}; color: white; side: back`}
          />
        )})}
      </a-entity>
    );
  }
};

// color="#FFF"
// side="both"
// opacity="0.1"
module.exports = Dancer;
