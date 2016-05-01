import { rand, randColor } from './Helpers'
const baseSpeed = 0;
const makeDancer = (mass, position, velocity, src = "#22A") => ({
  mass, position, velocity, src
});
const makeRandDancer = () => {
  return makeDancer(
    rand(1000, 1000),
    [rand(-10, 5), rand(0, 0), rand(-10, -10)],
    [rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed)],
    randColor()
  );
}
const dancerData = [
  // makeDancer(100, -3, 4, -8),
  // makeDancer(1000, 2, 1.8, -10),
  // makeDancer(100, -2, 1.8, -10),
  // makeDancer(100, 3, 2, -8),
  // makeDancer(100, 2, 0, -5, "../assets/cow_texture.png"),
  // makeDancer(100, -2, 0, -5),
  makeRandDancer(),
  makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
  // makeRandDancer(),
];

module.exports = dancerData;
