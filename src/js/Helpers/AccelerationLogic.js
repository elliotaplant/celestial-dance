import { translate, rand, vLog, objToArr, getR,
  massToRadius, filterClose, vectorToString } from './VectorHelpers';
import { GRAVITY, PLANET_SPRING } from './Constants';

const getGravityAccel = (vR, mass) => {
  const rMag2 = vR.lengthSq();
  const rNorm = vR.normalize();
  return rNorm.multiplyScalar(GRAVITY * mass / rMag2);
};

const getCollisionAccel = (vR, m1, r1, r2) => {
  return new THREE.Vector3(vR).normalize().multiplyScalar(PLANET_SPRING / m1 * (vR.length() - (r1 + r2)));
};

const getNetAccel = (originBody, otherBodies) => {
  return otherBodies.reduce((netAccel, otherBody) => {
    const vR = getR(originBody, otherBody);
    if (vR.length() < originBody.radius + otherBody.radius) {
      netAccel.add(getCollisionAccel(vR, originBody.mass, originBody.radius, otherBody.radius));
    }
    return netAccel.add(getGravityAccel(vR, otherBody.mass));
  }, new THREE.Vector3());
};

export {
  getNetAccel,
}
