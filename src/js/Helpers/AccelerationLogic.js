import { translate, rand, vLog, objToArr, getR,
  massToRadius, filterClose, vectorToString } from './VectorHelpers';
import { GRAVITY, PLANET_SPRING } from './Constants';

const getAccel = (origin, body) => {
  const rMag2 = body.position.distanceToSquared(origin);
  let rNorm = new THREE.Vector3();
  rNorm.subVectors(body.position, origin).normalize();
  const result = rNorm.multiplyScalar(GRAVITY * body.mass / rMag2);
  return result;
};

const getNetAccel = (origin, bodies) => {
  let netAccel = new THREE.Vector3();
  for (var i = 0; i < bodies.length; i++) {
    netAccel.add(getAccel(origin, bodies[i]))
  }
  return netAccel;
};

export {
  getNetAccel,
}
