import { randColor } from './Helpers';
import { ORBITAL_SPEED } from './Constants';
import { makeDancer, makeRandDancer, makeOrbitalDancer } from './MakeDancers';


// Standard orbitals
// const dancerData = [
//   makeDancer(100000, [0, 2, -40], [0, 0, 0], '#FFF'),
//   makeDancer(1000, [20, 2, -40], [0, ORBITAL_SPEED, 0], randColor()),
//   makeDancer(1000, [0, 22, -40], [0, 0, ORBITAL_SPEED], randColor()),
//   makeDancer(1000, [-20, 2, -40], [0, -ORBITAL_SPEED, 0], randColor()),
//   makeDancer(1000, [0, -22, -40], [0, 0, -ORBITAL_SPEED], randColor()),
// ];

// Random orbitals
const sun = makeDancer(10000, [0, 0, -50], [0, 0, 0], '#FDB813');
const dancerData = [
  sun,
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
];



module.exports = dancerData;
