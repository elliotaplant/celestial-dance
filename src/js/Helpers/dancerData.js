import { randColor } from './Helpers';
import { ORBITAL_SPEED } from './Constants';
import { makeDancer, makeRandDancer } from './MakeDancers';

let dancerData = [
  // makeDancer(100000, 0, 2, -40),
  // makeDancer(1000, 2, 1.8, -10),
  // makeDancer(100, -2, 1.8, -10),
  // makeDancer(100, 3, 2, -8),
  // makeDancer(100, 2, 0, -5, "../assets/cow_texture.png"),
  // makeDancer(100, -2, 0, -5),
  makeDancer(
    100000, [0, 2, -40], [0, 0, 0], '#FFF'
  ),
  makeDancer(
    1000, [20, 2, -40], [0, ORBITAL_SPEED, 0], randColor()
  ),
  makeDancer(
    1000, [0, 22, -40], [0, 0, ORBITAL_SPEED], randColor()
  ),
  makeDancer(
    1000, [-20, 2, -40], [0, -ORBITAL_SPEED, 0], randColor()
  ),
  makeDancer(
    1000, [0, -22, -40], [0, 0, -ORBITAL_SPEED], randColor()
  ),
  // makeDancer(
  //   1000, [2, 0, -10], [0, baseSpeed, 0], '#F00'
  // ),
  // makeDancer(
  //   1000, [-2, 0, -10], [0, -baseSpeed, 0], '#00F'
  // ),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
];

// dancerData = [
//   makeDancer(
//     10000, [5, 2, -10], [0, 0, 0], '#F00'
//   ),
//   makeDancer(
//     1000, [-5, 2, -10], [0, 0, 0], '#00F'
//   ),
// ]

module.exports = dancerData;
