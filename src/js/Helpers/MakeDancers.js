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

const makeOrbitalDancer = (dancer) => {
  // put in rand position near dancer
  // the velocity has to be in the plane perpendicular to the
    // displacement vector
  // the magnitude of the velocity can be found with r, m1, m2
  // we could add user interaction this way
  // the cursor defines a ray, we spawn a planet with initial velocity
    // along that ray, and position that corresponds to where displacement
    // is perpendicular to
}

module.exports = {
  makeDancer, makeRandDancer,
}
