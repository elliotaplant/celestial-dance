import { rand, randColor, massToRadius } from './Helpers';
import { GRAVITY } from './Constants';
const baseSpeed = 11e-1;

const makeDancer = (mass, position, velocity, light, material) => ({
  mass, position, velocity, light, material
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
  return makeDancer(mass, position, velocity, null, "color: "+randColor()+"; metalness: 0.4");
}

class DancerData {
  constructor(mass, position, velocity, color) {
      this.mass = mass;
      this.position = position;
      this.velocity = velocity;
      this.color = color;
  }
}

const sqrt = Math.sqrt;
const pow = Math.pow;
const getRArr = (position1, position2) => (
  sqrt(pow(position1[0]-position2[0], 2) +
    pow(position1[1]-position2[1], 2) +
    pow(position1[2]-position2[2], 2))
);

const overlapping = (dancer1, dancer2) => (
  dancer1 !== dancer2 &&
  getRArr(dancer1.position, dancer2.position) <=
  massToRadius(dancer1.mass) + massToRadius(dancer2.mass)
);

const preventOverlappingDancers = (dancersArr) => {
  console.log('running preventOverlappingDancers');
  for (var i = 0; i < dancersArr.length; i++) {
    for (var j = i + 1; j < dancersArr.length; j++) {
      console.log('checking');
      if (overlapping(dancersArr[i], dancersArr[j])) {
        console.log('found one');
        dancersArr[j].position = dancersArr[j].position.map(element => element * 1.1);
        j--;
      }
    }
  }
}

module.exports = {
  makeDancer, makeRandDancer, makeOrbitalDancer,
  preventOverlappingDancers
}
