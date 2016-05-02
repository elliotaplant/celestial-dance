import { rand, randColor } from './Helpers'
const baseSpeed = 5e0;
const makeDancer = (mass, position, velocity, color = "#22A") => ({
  mass, position, velocity, color
});
const makeRandDancer = () => {
  return makeDancer(
    rand(100, 100000),
    [rand(-10, 10), rand(-10, 10), rand(-50, -20)],
    // [rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed)],
    [rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed)],
    randColor()
  );
}
let dancerData = [
  // makeDancer(100, -3, 4, -8),
  // makeDancer(1000, 2, 1.8, -10),
  // makeDancer(100, -2, 1.8, -10),
  // makeDancer(100, 3, 2, -8),
  // makeDancer(100, 2, 0, -5, "../assets/cow_texture.png"),
  // makeDancer(100, -2, 0, -5),
  // makeDancer(
  //   10000, [0, 2, -40], [0, 0, 0], '#FFF'
  // ),
  // makeDancer(
  //   1000, [2, 0, -10], [0, baseSpeed, 0], '#F00'
  // ),
  // makeDancer(
  //   1000, [-2, 0, -10], [0, -baseSpeed, 0], '#00F'
  // ),
  makeRandDancer(),
  makeRandDancer(),
  makeRandDancer(),
  makeRandDancer(),
  makeRandDancer(),
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
