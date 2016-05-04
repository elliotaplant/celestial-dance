import { rand, randColor } from './Helpers'
const baseSpeed = 11e-1;

const makeDancer = (mass, position, velocity, color = "#22A") => ({
  mass, position, velocity, color
});

const makeRandDancer = () => {
  return makeDancer(
    rand(100, 1000),
    [rand(-10, 10), rand(-10, 10), rand(-50, -30)],
    // [rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed)],
    [rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed), rand(-baseSpeed, baseSpeed)],
    randColor()
  );
}

module.exports = {
  makeDancer, makeRandDancer,
}
