import { rand, randColor } from './Helpers';
import { GRAVITY } from './Constants';
const baseSpeed = 11e-1;

const makeDancer = (mass, position, velocity, color, light, material) => ({
  mass, position, velocity, color, light, material
});

const makeRandDancer = () => {
  return makeDancer(
    rand(100, 1000),
    [rand(-10, 10), rand(-10, 10), rand(-50, -30)],
    [rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed)],
    randColor(),
    "",
    "color: " + randColor()
  );
}

const planeToPosition = { x: 1, y: 2, z: 0 };
const planeToVelocity = { x: 2, y: 0, z: 1 };
const makeOrbitalDancer = (dancer, plane, sign) => {
  const mass = rand(0, dancer.mass/100);
  const orbitRadius = rand(0, dancer.mass/100);
  const speed = sign * Math.sqrt(GRAVITY * (mass + dancer.mass) / orbitRadius);
  const position = dancer.position.slice();
  const velocity = [0, 0, 0];
  position[planeToPosition[plane]] += sign * orbitRadius;
  velocity[planeToVelocity[plane]] = speed;
  return makeDancer(mass, position, velocity, randColor());
}

class DancerData {
  constructor(mass, position, velocity, color) {
      this.mass = mass;
      this.position = position;
      this.velocity = velocity;
      this.color = color;
  }
}

const preventOverlappingDancers = (dancersArr) => {
  for (var i = 0; i < dancersArr.length; i++) {
    for (var j = 0; j < dancersArr.length; j++) {
      if (i !== j && overlapping(dancersArr[i], dancersArr[j])) {
        dancersArr[j].reset();
        j--;
      }
    }
  }
}

module.exports = {
  makeDancer, makeRandDancer, makeOrbitalDancer
}
